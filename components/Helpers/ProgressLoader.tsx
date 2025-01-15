import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { COLORS } from "../../global/constants/color";

const ProgressLoader = ({ progress = 0 }: { progress: number }) => {
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "gray",
      width: width - 32,
      height: 5,
      borderRadius: 5,
      marginBottom: 10,
    },
    loader: {
      width: (progress / 100) * (width - 32),
      position: "absolute",
      backgroundColor: COLORS.BLUE,
    },
  });

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.loader]}></View>
    </View>
  );
};

export default ProgressLoader;
