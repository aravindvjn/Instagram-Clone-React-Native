import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowBack from "./ArrowBack";
import CustomText from "../../UI/Typography/CustomText";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const ArrowBackHeader = ({ heading }: { heading?: string }) => {
  const { data: user } = useCurrentUser();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        padding: 12,
      }}
    >
      <ArrowBack />
      <CustomText fontSize={20} textStyle={{ fontWeight: "bold" }}>
        {heading || user?.username || "Instagram User"}
      </CustomText>
    </View>
  );
};

export default ArrowBackHeader;

const styles = StyleSheet.create({});
