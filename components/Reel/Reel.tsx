import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Video } from "expo-av";
import CreatorDetails from "./CreatorDetails";
import { PostTypes } from "../Home/type";

const Reel = ({ username, profile_url, caption, uri='' }: PostTypes) => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      height,
    },
    heading: {
      fontWeight: "500",
      position: "absolute",
      left: 15,
      top: 15,
    },
    reel: {
      height,
      width,
    },
  });
  return (
    <View style={styles.container}>
      <Video
        source={{ uri }}
        style={styles.reel}
        isLooping
        resizeMode="contain"
        useNativeControls={false}
        shouldPlay
      />
      <CreatorDetails caption={caption} user={{ username, profile_url }} />
    </View>
  );
};

export default Reel;
