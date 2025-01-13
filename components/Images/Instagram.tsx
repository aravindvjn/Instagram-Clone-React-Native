import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Instagram = ({ height = 49 }: { height?: number; width?: number }) => {
  const styles = StyleSheet.create({
    image: {
      height: height || 49,
      width: (height * 182) / 49 || 182,
      objectFit: "contain",
    },
  });

  return (
    <Image
      style={[styles.image]}
      source={require("../../assets/logo/instagram-white.png")}
    />
  );
};

export default Instagram;
