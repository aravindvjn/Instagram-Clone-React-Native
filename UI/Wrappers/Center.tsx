import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WrapperType } from "./type";

const Center = ({ children, style }: WrapperType) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
