import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import CustomText from "../../UI/Typography/CustomText";
import { PostTypes } from "../Home/type";
import {
  formateDate,
  formateFollow,
} from "../../global/functions/helperFunctions";
import Icons from "../../UI/Icons/Icons";
import { toggleLike } from "../../global/functions/postRequests";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Layout from "../../UI/Wrappers/Layout";

interface LikePlusPostType extends PostTypes {
  isLiked?: boolean;
}
const PostFooter = ({
  id,
  username,
  caption,
  likes_count = 0,
  post_id,
  isLiked = false,
  createdAt,
}: LikePlusPostType) => {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const handleLiked = async () => {
    if (id && post_id) {
      setLiked((prev) => !prev);
      const results = await toggleLike({
        userId: id!,
        postId: post_id!,
      });
      if (results?.status) {
        if (results?.liked) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      }
    }
  };
  return (
    <View style={{ paddingHorizontal: 15, marginBottom: 30 }}>
      <View style={styles.container}>
        <Pressable onPress={handleLiked}>
          <Icons name={liked ? "like-fill" : "like"} size={27} />
        </Pressable>
        <Icons name="comment" size={27} />
        <Icons name="share" size={27} />
      </View>
      <View>
        <CustomText fontSize={13} textStyle={styles.bold}>
          {liked ? likes_count + 1 : likes_count} Likes
        </CustomText>
        <CustomText>
          <CustomText fontSize={13} style={styles.bold}>
            {username}
          </CustomText>
          <CustomText fontSize={13}> {caption}</CustomText>
        </CustomText>
        <CustomText textStyle={{ opacity: 0.6 }} fontSize={11}>
          {formateDate(createdAt || "")}
        </CustomText>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    gap: 15,
  },
  bold: {
    fontWeight: "bold",
  },
});
