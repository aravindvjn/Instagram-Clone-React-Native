import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import CustomText from "../../UI/Typography/CustomText";
import { PostTypes } from "../Home/type";
import { formateFollow } from "../../global/functions/helperFunctions";
import Icons from "../../UI/Icons/Icons";

const PostFooter = ({ username, caption, likes_count = 0 }: PostTypes) => {
  const [liked, setLiked] = useState<boolean>();
  const handleLiked = () => {
    setLiked((prev) => !prev);
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
        <CustomText fontSize={13}>
          Liked by{" "}
          <CustomText fontSize={13} style={styles.bold}>
            6windh{" "}
          </CustomText>
          and{" "}
          <CustomText fontSize={13} style={styles.bold}>
            {likes_count > 0 ? formateFollow(likes_count - 1) : 0} others
          </CustomText>
        </CustomText>
        <CustomText>
          <CustomText fontSize={13} style={styles.bold}>
            {username}
          </CustomText>
          <CustomText fontSize={13}> {caption}</CustomText>
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
