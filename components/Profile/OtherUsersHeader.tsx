import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { UserType } from "./type";
import CustomText from "../../UI/Typography/CustomText";
import { useNavigation } from "@react-navigation/native";

const OtherUsersHeader = ({ username }: UserType) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color={"white"} />
      </Pressable>
      <CustomText textStyle={{ fontWeight: "bold" }} fontSize={20}>
        {username}
      </CustomText>
    </View>
  );
};

export default OtherUsersHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    gap: 20,
  },
});
