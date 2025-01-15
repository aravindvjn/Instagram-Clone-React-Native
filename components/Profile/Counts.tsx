import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import { formateFollow } from "../../global/functions/helperFunctions";
import Center from "../../UI/Wrappers/Center";
import { useNavigation } from "@react-navigation/native";
export type CountType = {
  count: number;
  text: "Posts" | "Followers" | "Following";
  id?: string;
};

const Counts = ({ count, text, id }: CountType) => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("FollowList", { page: text, id })}
    >
      <CustomText fontSize={16} textStyle={styles.count}>
        {formateFollow(count)}
      </CustomText>
      <CustomText>{text}</CustomText>
    </Pressable>
  );
};

export default Counts;

const styles = StyleSheet.create({
  count: { fontWeight: "bold" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
