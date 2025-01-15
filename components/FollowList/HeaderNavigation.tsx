import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";
import Center from "../../UI/Wrappers/Center";
import { PathType, PathValues } from "./type";

const HeaderNavigation = ({ path, setPath }: PathType) => {
  const changePath = () => {
    setPath(path === "Following" ? "Followers" : "Following");
  };

  return (
    <Pressable onPress={changePath} style={styles.container}>
      <SingleBlock path={path} text="Followers" />
      <SingleBlock path={path} text="Following" />
    </Pressable>
  );
};

export default HeaderNavigation;

export const SingleBlock = ({
  text,
  path,
}: {
  text: PathValues;
  path: PathValues;
}) => {
  return (
    <Center style={path === text && styles.textBlock}>
      <CustomText fontSize={16} style={styles.text}>
        {text}
      </CustomText>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 44,
    marginTop: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "semibold",
  },
  textBlock: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.TEXT_COLOR,
  },
});
