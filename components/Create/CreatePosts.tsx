import React, { useEffect, useState } from "react";
import { Image, View, Alert, useWindowDimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "./Header";
import CustomButton from "../../UI/Buttons/CustomButton";
import { useIsFocused, useRoute } from "@react-navigation/native";

const CreatePost: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const isFocused = useIsFocused();
  const { name } = useRoute();
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
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  useEffect(() => {
    if (name === "Create" && isFocused) {
      fetchImage();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {selectedImage && <Header />}
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: width - 32, height: width - 32 }}
        />
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
