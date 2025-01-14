import React, { useEffect, useState } from "react";
import { Image, View, Alert, useWindowDimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "./Header";
import CustomButton from "../../UI/Buttons/CustomButton";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { convertToBase64 } from "../../global/functions/helperFunctions";
import { handleUpload } from "../../global/functions/uploadMedia";
import { addPost } from "../../global/functions/postRequests";
import { PostTypes } from "../Home/type";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Input from "../../UI/Inputs/Input";
import { useQueryClient } from "@tanstack/react-query";

const CreatePost: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
  const fetchImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Permission to access the media library is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  const addPostHandler = async () => {
    if (!selectedImage || !user?.id || !user?.idToken) return;
    try {
      setIsLoading(true);
      const base64 = await convertToBase64(selectedImage);
      if (!base64) return;
      const uri = await handleUpload(base64);
      if (!uri) return;
      const res = await addPost({
        data: {
          caption: inputs?.caption || "",
          id: inputs?.id,
          uri: uri,
          locations: inputs?.locations,
        },
        userId: user?.id,
        idToken: user?.idToken,
      });
      if (res.status) {
        Alert.alert("Success", "Post created successfully!");
        queryClient.invalidateQueries<any>(["user"]);
        setInputs({ caption: "", locations: "", uri: "", id: "" });
        setSelectedImage(null);
      } else {
        Alert.alert(res?.message);
      }
      setIsLoading(false);
    } catch {
      Alert.alert("Error", "An error occurred while creating the post.");
    }
  };
  useEffect(() => {
    if (name === "Create" && isFocused) {
      fetchImage();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {selectedImage && (
        <Header isLoading={isLoading} onPress={addPostHandler} />
      )}
      {selectedImage ? (
        <View style={{ gap: 15 }}>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: width - 32, height: width - 32 }}
          />
          <Input
            value={inputs?.caption}
            inputStyle={[{ height: 100 }]}
            onChangeText={(text) =>
              setInputs((prev) => ({ ...prev, caption: text }))
            }
            multiline
            placeholder="Share your thoughts."
          />
          <Input
            value={inputs?.locations}
            maxLength={15}
            onChangeText={(text) =>
              setInputs((prev) => ({ ...prev, locations: text }))
            }
            placeholder="location"
          />
        </View>
      ) : (
        <View>
          <Image
            source={require("../../assets/demo/post.png")}
            style={{ width: width - 32, height: width - 32 }}
          />
        </View>
      )}

      <CustomButton style={{ marginTop: 20 }} onPress={fetchImage}>
        {selectedImage ? "Try New" : "Select Photo"}
      </CustomButton>
    </View>
  );
};

export default CreatePost;
