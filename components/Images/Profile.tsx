import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = ({
  size = 62,
  profile_url,
}: {
  size?: number;
  profile_url?: string;
}) => {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
      objectFit: "cover",
      borderRadius: 31,
      alignSelf: "center",
    },
  });
  if (profile_url) {
    return <Image style={[styles.image]} source={{ uri: profile_url }} />;
  }
  return (
    <Image
      style={[styles.image]}
      source={require("../../assets/demo/image.png")}
    />
  );
};

export default Profile;
