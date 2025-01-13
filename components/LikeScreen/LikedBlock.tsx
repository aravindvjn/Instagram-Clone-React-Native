import { Image, StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";

const LikedBlock = ({ username }: { username: string }) => {
  return (
    <View style={LikedStyles.container}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Profile size={44} />
        <CustomText fontSize={13} textAlign="left">
          <CustomText fontSize={13} textStyle={{ fontWeight: "bold" }}>
            {username}{" "}
          </CustomText>
          liked your photo
        </CustomText>
      </View>
      <Image
        style={LikedStyles.image}
        source={require("../../assets/demo/post.png")}
      />
    </View>
  );
};

export default LikedBlock;

export const LikedStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 2,
  },
});
