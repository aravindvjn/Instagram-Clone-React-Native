import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { PostTypes } from "../Home/type";

const Post = ({
  id,
  profile_url = "",
  uri,
  username = "instagram user",
  caption,
}: PostTypes) => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    image: {
      width: width,
      height: width,
    },
  });
  return (
    <View>
      <PostHeader profile_url={profile_url} username={username} />
      <Image style={styles.image} source={{ uri: uri }} resizeMode="cover" />
      <PostFooter id={id} caption={caption} username={username} />
    </View>
  );
};

export default Post;
