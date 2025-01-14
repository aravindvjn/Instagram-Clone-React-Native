import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import VisitUser from "../Helpers/VisitUser";
import { PostTypes } from "../Home/type";

const PostHeader = ({ id, profilePic, username, locations }: PostTypes) => {
  console.log(id,"==id")
  return (
    <View style={styles.container}>
      <VisitUser id={id}>
        <Profile profile_url={profilePic} size={32} />
      </VisitUser>
      <View>
        <VisitUser id={id}>
          <CustomText textStyle={{ fontWeight: "bold" }} fontSize={13}>
            {username}
          </CustomText>
        </VisitUser>
        <CustomText fontSize={11}>{locations}</CustomText>
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
