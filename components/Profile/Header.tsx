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
import EditProfile from "./EditProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { decodeFollowStatus } from "../../global/functions/helperFunctions";

export type StoryStatusType =
  | "Viewed"
  | "NotViewed"
  | "NoStory"
  | "CloseFriends";
const Header = ({
  username,
  id,
  name,
  profilePic,
  bio,
  followers = [],
  following = [],
  posts = [],
  currentUser,
}: UserType) => {
  const [storyStatus, setStoryStatus] = useState<StoryStatusType>("Viewed");
  const queryClient = useQueryClient();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const logoutHandler = async () => {
    await AsyncStorage.removeItem("idToken");
    queryClient.setQueryData(["user"], () => null);
  };
  return (
    <View>
      <EditProfile isVisible={isVisible} setIsVisible={setIsVisible} />
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
          <Profile profile_url={profilePic} size={86} />
        </View>

        <View style={styles.countContainer}>
          <Counts id={id} count={posts?.length} text="Posts" />
          <Counts id={id} count={followers?.length || 0} text="Followers" />
          <Counts id={id} count={following?.length || 0} text="Following" />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <CustomText fontSize={14} textStyle={{ fontWeight: "bold" }}>
          {name}
        </CustomText>
        <CustomText fontSize={14}>{bio}</CustomText>
        {currentUser?.id === id ? (
          <CustomButton
            onPress={() => setIsVisible(true)}
            style={styles.editButton}
          >
            Edit Profile
          </CustomButton>
        ) : (
          <OperationButtons
            currentUserId={currentUser?.id}
            userData={{ id, name, profilePic,username }}
            followStatus={decodeFollowStatus(
              currentUser?.id!,
              followers,
              following
            )}
            followerId={currentUser?.id}
          />
        )}
        {currentUser?.id === id && (
          <CustomButton onPress={logoutHandler} style={styles.editButton}>
            Logout
          </CustomButton>
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
    justifyContent: "flex-start",
    paddingLeft: 20,
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
    borderWidth: 1,
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
      <Ionicons
        name="lock-closed-outline"
        size={20}
        color={COLORS.TEXT_COLOR}
      />
      <CustomText fontSize={20} textStyle={styles.accountDropDownText}>
        {currentUser?.username}
      </CustomText>
      <Ionicons name="chevron-down" size={20} color={COLORS.TEXT_COLOR} />
      <Pressable style={styles.pressableMenu}>
        <Ionicons name="menu-outline" color={COLORS.TEXT_COLOR} size={35} />
      </Pressable>
    </Center>
  );
};
