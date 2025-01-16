import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowBack from "../Helpers/ArrowBack";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import VisitUser from "../Helpers/VisitUser";

const Header = ({ id, profilePic, username, name }: any) => {
  return (
    <View style={styles.container}>
      <ArrowBack />
      <VisitUser id={id}>
        <Profile profile_url={profilePic} size={40} />
      </VisitUser>
      <View>
        <CustomText textStyle={styles.name}>{name}</CustomText>
        <CustomText fontSize={12}>{username}</CustomText>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    gap: 15,
  },
  name: {
    fontWeight: "bold",
  },
});
