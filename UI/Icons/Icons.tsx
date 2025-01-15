import React from "react";
import { Image, StyleSheet } from "react-native";
import { IconType } from "./type";

// Static mapping of icon names to their respective require paths
const iconPaths = {
  account: require("../../assets/icon/account.png"),
  comment: require("../../assets/icon/comment.png"),
  create: require("../../assets/icon/create.png"),
  home: require("../../assets/icon/home.png"),
  "like-fill": require("../../assets/icon/like-fill.png"),
  like: require("../../assets/icon/like.png"),
  messenger: require("../../assets/icon/messenger.png"),
  reel: require("../../assets/icon/reel.png"),
  save: require("../../assets/icon/save.png"),
  search: require("../../assets/icon/search.png"),
  share: require("../../assets/icon/share.png"),
  "reel-fill": require("../../assets/icon/reel-fill.png"),
  "home-fill": require("../../assets/icon/home-fill.png"),
  "create-fill": require("../../assets/icon/create-fill.png"),
  "search-fill": require("../../assets/icon/search-fill.png"),
};

const Icons = ({ name = "save", size = 32, focused }: IconType) => {
  const iconSource = iconPaths[name] || iconPaths["save"];

  return (
    <Image
      style={[styles.icon, { height: size + 2, width: size + 2 }]}
      source={iconSource}
      resizeMode="contain"
    />
  );
};

export default Icons;

const styles = StyleSheet.create({
  icon: {
    objectFit: "contain",
  },
});
