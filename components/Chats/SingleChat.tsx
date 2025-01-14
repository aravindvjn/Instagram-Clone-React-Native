import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";

const SingleChat = ({ username, name, profilePic }: any) => {
  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View style={styles.container}>
        <Profile profile_url={profilePic} size={46} />
        <View>
          <CustomText fontSize={14} textStyle={{ fontWeight: "bold" }}>
            {name || username || "Instagram User"}
          </CustomText>
          <CustomText numberOfLines={1}>Hello, How are you today?</CustomText>
        </View>
      </View>
      <Pressable>
        <Ionicons name="camera-outline" color={COLORS?.TEXT_COLOR} size={30} />
      </Pressable>
    </View>
  );
};

export default SingleChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 7,
    gap: 15,
    alignItems: "center",
  },
});
