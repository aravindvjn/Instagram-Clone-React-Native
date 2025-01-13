import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import { formateFollow } from "../../global/functions/helperFunctions";
import Center from "../../UI/Wrappers/Center";
export type CountType = {
  count: number;
  text: "Posts" | "Followers" | "Following";
};

const Counts = ({ count, text }: CountType) => {
  return (
    <Center>
      <CustomText fontSize={16} textStyle={styles.count}>
        {formateFollow(count)}
      </CustomText>
      <CustomText>{text}</CustomText>
    </Center>
  );
};

export default Counts;

const styles = StyleSheet.create({
  count: { fontWeight: "bold" },
});
