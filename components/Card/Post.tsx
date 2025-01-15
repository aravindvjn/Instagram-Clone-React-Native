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
import { useCurrentUser } from "../../hooks/useCurrentUser";

const Post = ({
  id,
  profilePic = "",
  uri,
  username = "instagram user",
  caption,
  likes_count,
  locations,
  post_id,
  liked_users,
  createdAt
}: PostTypes) => {
  console.log(post_id, id);
  const { width } = useWindowDimensions();
  const { data: user, isLoading } = useCurrentUser();
  const styles = StyleSheet.create({
    image: {
      width: width,
      height: width,
    },
  });
  return (
    <View>
      <PostHeader
        locations={locations}
        id={id}
        profilePic={profilePic}
        username={username}
      />
      <Image style={styles.image} source={{ uri: uri }} resizeMode="cover" />
      <PostFooter
        isLiked={!!liked_users?.includes(user?.id!)}
        likes_count={likes_count}
        id={id}
        caption={caption}
        username={username}
        post_id={post_id}
        createdAt={createdAt}
      />
    </View>
  );
};

export default Post;
