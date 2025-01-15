import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SingleUserType } from "./type";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import VisitUser from "../Helpers/VisitUser";

const SingleUser = ({ name, profilePic, username, userId }: SingleUserType) => {
  return (
    <VisitUser id={userId}>
      <View style={styles.container}>
        <Profile size={50} profile_url={profilePic} />
        <View>
          {name && (
            <CustomText textStyle={{ fontWeight: "bold" }} fontSize={14}>
              {name}
            </CustomText>
          )}
          <CustomText
            textStyle={[!name && { fontWeight: "bold" }]}
            fontSize={14}
          >
            {username}
          </CustomText>
        </View>
      </View>
    </VisitUser>
  );
};

export default SingleUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
