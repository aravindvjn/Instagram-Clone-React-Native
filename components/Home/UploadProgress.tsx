import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProgressLoader from "../Helpers/ProgressLoader";
import { COLORS } from "../../global/constants/color";
import Center from "../../UI/Wrappers/Center";
import CustomText from "../../UI/Typography/CustomText";

const UploadProgress = () => {
  const { data } = useQuery({
    queryKey: ["uploadProgress"],
    initialData: 0,
  });
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "gray",
      width: width,
      height: 3,
      marginBottom: 10,
    },
    loader: {
      width: (data / 100) * width,
      position: "absolute",
      backgroundColor: COLORS.BLUE,
    },
    text: {
      color: COLORS.BLUE,
      padding: 10,
    },
  });
  if (!data) return;
  return (
    <View>
      {data && Number(data) > 0 && (
        <CustomText textStyle={styles.text}>Uploading...</CustomText>
      )}
      <View style={styles.container}>
        <View style={[styles.container, styles.loader]}></View>
      </View>
    </View>
  );
};

export default UploadProgress;

const styles = StyleSheet.create({});
