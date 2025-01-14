import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Layout from "../../UI/Wrappers/Layout";
import CustomText from "../../UI/Typography/CustomText";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import ArrowBack from "../Helpers/ArrowBack";
import Profile from "../Images/Profile";
import CustomButton from "../../UI/Buttons/CustomButton";
import { COLORS } from "../../global/constants/color";
import Input from "../../UI/Inputs/Input";
import { UserType } from "./type";
import { updateProfile } from "../../global/functions/updateProfile";
import { useQueryClient } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import { handleUpload } from "../../global/functions/uploadMedia";
import { convertToBase64 } from "../../global/functions/helperFunctions";

export type EditProfileType = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};
const EditProfile = ({ isVisible, setIsVisible }: EditProfileType) => {
  const { data: user } = useCurrentUser();
  const usernameRegex = /^[a-z0-9._]+$/;
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState<UserType | undefined>();
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleUpdate = async () => {
    setIsLoading(true);
    let url;
    if (selectedImage) {
      const base64 = await convertToBase64(selectedImage);
      if (base64) {
        url = await handleUpload(base64);
      }
    }
    const results = await updateProfile({
      ...inputs,
      profilePic: url || user?.profilePic,
    });
    if (results?.status) {
      queryClient.invalidateQueries<any>(["user"]);
      setIsVisible(false);
    } else {
      Alert.alert(results?.message!);
    }
    setIsLoading(false);
  };

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
    setSelectedImage(undefined);
    setIsLoading(false);
    if (user) {
      setInputs(user);
    }
  }, [isVisible]);

  if (!inputs) {
    return null;
  }
  return (
    <Modal visible={isVisible}>
      <Layout style={{ paddingHorizontal: 16 }}>
        <View style={styles.header}>
          <ArrowBack onPress={() => setIsVisible(false)} />
          <CustomText textStyle={styles.textStyle} fontSize={20}>
            Edit profile
          </CustomText>
        </View>
        <View style={{ width: "100%", gap: 20, marginTop: 50 }}>
          <Profile
            profile_url={selectedImage || inputs?.profilePic}
            size={72}
          />
          <CustomButton
            onPress={fetchImage}
            textStyle={{ color: COLORS.BLUE, fontWeight: "bold" }}
            style={styles.changeProfileButton}
          >
            Change profile photo
          </CustomButton>
          <Input
            maxLength={20}
            onChangeText={(text) =>
              setInputs((prev: any) => ({ ...prev, name: text }))
            }
            isLabel
            style={styles.input}
            value={inputs?.name}
            placeholder="Name"
          />
          <Input
            maxLength={15}
            onChangeText={(text: string) => {
              const trimmedText = text.trim().toLowerCase();
              if (usernameRegex.test(trimmedText) || trimmedText === "") {
                setInputs((prev) => ({
                  ...prev,
                  username: trimmedText,
                }));
              }
            }}
            isLabel
            style={styles.input}
            value={inputs?.username}
            placeholder="Username"
          />
          <Input
            multiline
            onChangeText={(text) =>
              setInputs((prev: any) => ({ ...prev, bio: text }))
            }
            isLabel
            style={styles.input}
            value={inputs?.bio}
            placeholder="Bio"
          />
          <CustomButton
            isLoading={isLoading}
            onPress={handleUpdate}
            textStyle={{ fontSize: 18 }}
          >
            Save
          </CustomButton>
        </View>
      </Layout>
    </Modal>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 20,
    width: 150,
  },
  textStyle: {
    fontWeight: "bold",
  },
  changeProfileButton: {
    height: 20,
    backgroundColor: "transparent",
  },
  input: {},
});
