import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import ReelOperations from "./ReelOperations";
import { ReelDetailsSkeleton } from "./CreatorDetails";

const ReelSkeleton = () => {
  const { width, height } = useWindowDimensions();
  const styles = StyleSheet.create({
    reel: {
      width,
      height: height + 40,
      backgroundColor: "#3c3c3c",
    },
    footer: {
      alignSelf: "baseline",
    },
  });
  return (
    <View style={styles.reel}>
      <ReelOperations />
      <ReelDetailsSkeleton />
    </View>
  );
};

export default ReelSkeleton;
