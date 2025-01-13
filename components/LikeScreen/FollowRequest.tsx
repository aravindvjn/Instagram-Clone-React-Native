import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { LikedStyles } from "./LikedBlock";
import CustomText from "../../UI/Typography/CustomText";
import Profile from "../Images/Profile";
import CustomButton from "../../UI/Buttons/CustomButton";
import { FollowRequestType, FollowStatusType } from "./type";
import { COLORS } from "../../global/constants/color";
import { handleFollowStatus } from "../../global/functions/helperFunctions";

const FollowRequest = ({
  username,
  profile_url,
  time = "1hr",
}: FollowRequestType) => {
  const [followStatus, setFollowStatus] = useState<FollowStatusType>("Follow");
  let content = handleFollowStatus(followStatus)?.content;
  const sendRequest = () => {
    setFollowStatus((prev) => {
      const res = handleFollowStatus(prev);
      content = res.content;
      return res.status as FollowStatusType;
    });
  };
  const { width } = useWindowDimensions();
  return (
    <View style={LikedStyles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          maxWidth: width - 160,
        }}
      >
        <Profile profile_url={profile_url} size={44} />
        <CustomText textStyle={styles.content}>
          <CustomText textAlign="left" textStyle={{ fontWeight: "bold" }}>
            {username}{" "}
          </CustomText>
          {content} <CustomText textStyle={styles.time}>{time}</CustomText>
        </CustomText>
      </View>
      <CustomButton
        onPress={sendRequest}
        style={[styles.button, followStatus === "Message" && styles.message]}
      >
        {followStatus}
      </CustomButton>
    </View>
  );
};

export default FollowRequest;

const styles = StyleSheet.create({
  button: {
    minWidth: 90,
    height: 28,
    borderRadius: 4,
    maxWidth: 110,
  },
  message: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    height: 30,
  },
  time: {
    color: "rgba(255, 255, 255, 0.60)",
  },
  content: {
    marginLeft: 10,
    color: COLORS.TEXT_COLOR,
    overflow: "hidden",
  },
});
