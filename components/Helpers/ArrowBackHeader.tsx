import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowBack from "./ArrowBack";
import CustomText from "../../UI/Typography/CustomText";

const ArrowBackHeader = ({ heading }: { heading?: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        padding: 10,
      }}
    >
      <ArrowBack />
      <CustomText fontSize={20} textStyle={{ fontWeight: "bold" }}>
        {heading}
      </CustomText>
    </View>
  );
};

export default ArrowBackHeader;

const styles = StyleSheet.create({});
