import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../UI/Typography/CustomText";
import Center from "../../UI/Wrappers/Center";
import Profile from "../Images/Profile";
import { UserType } from "./type";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import Counts from "./Counts";
import CustomButton from "../../UI/Buttons/CustomButton";
import OperationButtons from "./OperationButtons";
import OtherUsersHeader from "./OtherUsersHeader";

export type StoryStatusType =
  | "Viewed"
  | "NotViewed"
  | "NoStory"
  | "CloseFriends";
const Header = ({
  username,
  id,
  name,
  profile_url,
  bio,
  followers = 0,
  following = 0,
  noPosts = 0,
  isPrivate,
  currentUser,
}: UserType) => {
  const [storyStatus, setStoryStatus] = useState<StoryStatusType>("Viewed");
  return (
    <View>
      {currentUser?.id === id ? (
        <AccountDropDown
          id={id}
          currentUser={currentUser}
          username={username}
        />
      ) : (
        <OtherUsersHeader username={username} />
      )}
      <View style={styles.container}>
        <View
          style={[
            styles.viewed,
            storyStatus === "Viewed"
              ? { borderColor: "gray" }
              : storyStatus === "NotViewed"
              ? { borderColor: "purple" }
              : storyStatus === "CloseFriends"
              ? { borderColor: "green" }
              : { borderColor: "transparent" },
          ]}
        >
          <Profile profile_url={profile_url} size={86} />
        </View>

        <View style={styles.countContainer}>
          <Counts count={noPosts} text="Posts" />
          <Counts count={followers} text="Followers" />
          <Counts count={following} text="Following" />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <CustomText fontSize={14} textStyle={{ fontWeight: "bold" }}>
          {name}
        </CustomText>
        <CustomText fontSize={14}>{bio}</CustomText>
        {currentUser?.id === id ? (
          <CustomButton style={styles.editButton}>Edit Profile</CustomButton>
        ) : (
          <OperationButtons status="Following" />
        )}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  accountDropDown: {
    height: 44,
    flexDirection: "row",
    gap: 3,
  },
  accountDropDownText: {
    fontWeight: "bold",
  },
  pressableMenu: {
    position: "absolute",
    right: 15,
    top: 7,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
    width: "100%",
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    flexShrink: 1,
  },
  viewed: {
    borderWidth: 1.5,
    borderRadius: "50%",
    padding: 3,
  },
  editButton: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    height: 30,
    marginTop: 10,
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
});

const AccountDropDown = ({ currentUser }: UserType) => {
  return (
    <Center style={styles.accountDropDown}>
      <Ionicons name="lock-closed" color={COLORS.TEXT_COLOR} />
      <CustomText fontSize={16} textStyle={styles.accountDropDownText}>
        {currentUser?.username}
      </CustomText>
      <Ionicons name="chevron-down" size={16} color={COLORS.TEXT_COLOR} />
      <Pressable style={styles.pressableMenu}>
        <Ionicons name="menu-outline" color={COLORS.TEXT_COLOR} size={35} />
      </Pressable>
    </Center>
  );
};
