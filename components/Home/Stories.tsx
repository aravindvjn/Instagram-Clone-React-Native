import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Center from "../../UI/Wrappers/Center";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";
import { StoryTypes } from "./type";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";

const Stories = ({ stories }: { stories: StoryTypes[] }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <SingleStory username="Your Story" />
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
    <Center style={{ height: 130 }}>
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
      <CustomText>
        {addStory
          ? "New"
          : username?.length > 10
          ? `${username?.slice(0, 10)}...`
          : username}
      </CustomText>
    </Center>
  );
};
