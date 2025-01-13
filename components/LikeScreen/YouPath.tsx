import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import LikedBlock from "./LikedBlock";
import FollowRequest from "./FollowRequest";

const YouPath = () => {
  return (
    <View style={styles.container}>
      <CustomText fontSize={14}>Follow Requests</CustomText>
      <CustomText fontSize={14} textStyle={styles.bold}>
        New
      </CustomText>
      <LikedBlock username={"karenne"} />
      <CustomText fontSize={14} textStyle={styles.bold}>
        Today
      </CustomText>
      <LikedBlock username={"6windh"} />
      <LikedBlock username={"ara_windth"} />
      <LikedBlock username={"eloke_now"} />
      <CustomText fontSize={14} textStyle={styles.bold}>
        This Week
      </CustomText>
      <LikedBlock username={"loki"} />
      <FollowRequest
        profile_url=""
        username={""}
      />
    </View>
  );
};

export default YouPath;

const styles = StyleSheet.create({
  container: {
    gap: 13,
    padding: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
