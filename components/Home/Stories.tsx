import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Center from "../../UI/Wrappers/Center";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import { StoryTypes } from "./type";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const Stories = ({ stories }: { stories: StoryTypes[] }) => {
  const { data } = useCurrentUser();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <SingleStory profile_url={data?.profilePic} username="Your Story" />
        {stories?.map((story) => (
          <SingleStory
            key={story.username}
            profile_url={story?.profile_url}
            username={story?.username}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  storyContainer: {
    margin: 8,
    marginTop: 0,
    gap: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    borderRadius: "50%",
    padding: 2,
    maxHeight: 70,
    maxWidth: 70,
  },
  addStory: {
    height: 60,
    width: 64,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    borderRadius: "50%",
  },
});

export const SingleStory = ({
  profile_url,
  username = "instagram user",
  addStory,
}: StoryTypes) => {
  return (
    <Center style={{ minHeight: 110 }}>
      <Pressable
        style={[
          styles.storyContainer,
          addStory && { borderColor: "transparent" },
        ]}
      >
        {addStory ? (
          <Center style={styles.addStory}>
            <Ionicons name="add" color={"white"} size={35} />
          </Center>
        ) : (
          <Profile profile_url={profile_url} />
        )}
      </Pressable>
      <CustomText fontSize={12}>
        {addStory
          ? "New"
          : username?.length > 15
          ? `${username?.slice(0, 15)}...`
          : username}
      </CustomText>
    </Center>
  );
};
