import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ArrowBack = ({ onPress }: { onPress?: () => void }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <Pressable onPress={handleBack}>
      <Ionicons name="arrow-back-outline" size={30} color={"white"} />
    </Pressable>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({});
