import React, { useEffect, useState } from "react";
import { Image, View, Alert, useWindowDimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "./Header";
import CustomButton from "../../UI/Buttons/CustomButton";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { convertToBase64 } from "../../global/functions/helperFunctions";
import { handleUpload } from "../../global/functions/uploadMedia";
import { addPost, addReel } from "../../global/functions/postRequests";
import { PostTypes } from "../Home/type";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Input from "../../UI/Inputs/Input";
import { useQueryClient } from "@tanstack/react-query";
import { ResizeMode, Video } from "expo-av";
import ProgressLoader from "../Helpers/ProgressLoader";
import UploadProgress from "../Home/UploadProgress";

const CreatePost: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const isFocused = useIsFocused();
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState<PostTypes>({
    caption: "",
    locations: "",
    uri: "",
    id: "",
  });
  const { name } = useRoute();
  const { data: user } = useCurrentUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mediaTypes, setMediaTypes] = useState<string>();
  const [progress, setProgress] = useState<string | number>();
  queryClient.setQueryData<any>(["uploadProgress"], progress);

  const fetchMedia = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Permission to access the media library is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setProgress("");

      if (result.assets[0]?.duration! < 30000) {
        setMediaTypes(result?.assets[0]?.type);
        setSelectedMedia(result.assets[0].uri);
        return;
      }

      Alert.alert("Failed", "Video duration should not exceed 30 seconds.");
    }
  };

  const addPostHandler = async () => {
    if (!selectedMedia || !user?.id || !user?.idToken) return;

    try {
      setIsLoading(true);
      setProgress(10);
      const base64 = await convertToBase64(selectedMedia);

      if (!base64) return;
      const uri = await handleUpload(base64, mediaTypes, setProgress);
      if (!uri || typeof uri !== "string") return;
      let res;

      if (mediaTypes === "video") {
        res = await addReel({
          caption: inputs?.caption || "",
          idToken: user?.idToken,
          videoUri: uri,
          userId: user?.id,
        });
      } else {
        res = await addPost({
          data: {
            caption: inputs?.caption || "",
            id: inputs?.id,
            uri: uri,
            locations: inputs?.locations,
          },
          userId: user?.id,
          idToken: user?.idToken,
        });
      }

      if (res.status) {
        Alert.alert("Success", "Post created successfully!");
        queryClient.invalidateQueries<any>(["user"]);
        setInputs({ caption: "", locations: "", uri: "", id: "" });
        setSelectedMedia(null);
      } else {
        Alert.alert(res?.message);
      }
      setIsLoading(false);
      setProgress(0);
      queryClient.setQueryData<any>(["uploadProgress"], null);
    } catch {
      Alert.alert("Error", "An error occurred while creating the post.");
    }
  };

  useEffect(() => {
    if (name === "Create" && isFocused) {
      fetchMedia();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {selectedMedia && (
        <Header isLoading={isLoading} onPress={addPostHandler} />
      )}
      {<UploadProgress />}
      {selectedMedia ? (
        <View style={{ gap: 15 }}>
          {mediaTypes === "video" ? (
            <Video
              source={{ uri: selectedMedia }}
              isLooping
              style={{ width: width - 32, height: width - 32 }}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls
            />
          ) : (
            <Image
              source={{ uri: selectedMedia }}
              style={{ width: width - 32, height: width - 32 }}
            />
          )}
          <Input
            value={inputs?.caption}
            inputStyle={[{ height: 100 }]}
            onChangeText={(text) =>
              setInputs((prev) => ({ ...prev, caption: text }))
            }
            multiline
            placeholder="Share your thoughts."
          />
          {mediaTypes !== "video" && (
            <Input
              value={inputs?.locations}
              maxLength={15}
              onChangeText={(text) =>
                setInputs((prev) => ({ ...prev, locations: text }))
              }
              placeholder="location"
            />
          )}
        </View>
      ) : (
        <View>
          <Image
            source={require("../../assets/demo/post.png")}
            style={{ width: width - 32, height: width - 32 }}
          />
        </View>
      )}
      <CustomButton style={{ marginTop: 20 }} onPress={() => fetchMedia()}>
        {selectedMedia ? "Try New" : "Select Photo"}
      </CustomButton>
    </View>
  );
};

export default CreatePost;
