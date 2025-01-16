import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "../../UI/Typography/CustomText";
import Center from "../../UI/Wrappers/Center";

const NoPosts = () => {
  return (
    <Center style={{ marginTop: 100 }}>
      <Ionicons name="camera" size={40} color={"white"} />
      <CustomText>No Posts</CustomText>
    </Center>
  );
};

export default NoPosts;

const styles = StyleSheet.create({});
