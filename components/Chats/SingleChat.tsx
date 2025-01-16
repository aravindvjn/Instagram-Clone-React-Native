import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import { useNavigation } from "@react-navigation/native";

const SingleChat = ({ chatId = "", otherUserData, lastMessage, id }: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <Pressable
        onPress={() =>
          navigation.navigate("Messages", {
            user1_id: id,
            user2_id: otherUserData?.id,
            userData: otherUserData,
          })
        }
        style={styles.container}
      >
        <Profile profile_url={otherUserData?.profilePic} size={46} />
        <View>
          <CustomText fontSize={14} textStyle={{ fontWeight: "bold" }}>
            {otherUserData?.name || otherUserData?.username || "Instagram User"}
          </CustomText>
          <CustomText numberOfLines={1}>{lastMessage?.text || ""}</CustomText>
        </View>
      </Pressable>
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
