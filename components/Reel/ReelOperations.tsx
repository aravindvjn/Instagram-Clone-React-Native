import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icons from "../../UI/Icons/Icons";
import Entypo from '@expo/vector-icons/Entypo';;
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ReelOperations = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleLiked}>
        <Icons name={liked ? "like-fill" : "like"} size={30} />
      </Pressable>
      <Icons name={"comment"} size={30} />
      <Icons name={"share"} size={30} />
      <Entypo name="dots-three-vertical" size={20} color="white" />
      <MaterialIcons name="music-video" size={24} color="white" />
    </View>
  );
};

export default ReelOperations;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 15,
    gap: 20,
    bottom: 105,
    alignItems: "center",
  },
});
