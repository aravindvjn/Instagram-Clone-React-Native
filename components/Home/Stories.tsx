import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Center from "../../UI/Wrappers/Center";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
        <Pressable style={styles.storyContainer}>
          <Profile />
          <CustomText>Your Story</CustomText>
        </Pressable>
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
  },
});
