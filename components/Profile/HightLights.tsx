import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SingleStory } from "../Home/Stories";
import { UserType } from "./type";

const HightLights = ({
  currentUser,
  id,
}: {
  currentUser: UserType;
  id: number;
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {currentUser?.id === id && <SingleStory addStory />}
      </ScrollView>
    </View>
  );
};

export default HightLights;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
});
