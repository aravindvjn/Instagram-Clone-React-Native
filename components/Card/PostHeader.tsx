import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";

type PostHeaderType = {
  username: string;
  profile_url: string;
};
const PostHeader = ({
  profile_url,
  username,
}: PostHeaderType) => {
  return (
    <View style={styles.container}>
      <Profile profile_url={profile_url} size={32} />
      <View>
        <CustomText fontSize={13}>{username}</CustomText>
        <CustomText fontSize={11}>Tokyo, Japan</CustomText>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    minHeight: 54,
    alignItems: "center",
    paddingLeft: 10,
  },
});
