import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import React from "react";

const Profile = ({
  size = 62,
  profile_url,
  style,
  path
}: {
  size?: number;
  profile_url?: string;
  style?: StyleProp<ImageStyle>;
  path?:any
}) => {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
      objectFit: "cover",
      borderRadius: size,
      alignSelf: "center",
    },
  });
  if (profile_url) {
    return <Image style={[styles.image,style]} source={{ uri: profile_url }} />;
  }
  return (
    <Image
      style={[styles.image,style]}
      source={path || require("../../assets/demo/image.png")}
    />
  );
};

export default Profile;
