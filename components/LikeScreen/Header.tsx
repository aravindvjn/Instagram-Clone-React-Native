import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";
import Center from "../../UI/Wrappers/Center";
import { HeaderPathtype, PathType } from "./type";

const Header = ({ path, setPath }: HeaderPathtype) => {
  const changePath = () => {
    setPath(path === "Following" ? "You" : "Following");
  };

  return (
    <Pressable onPress={changePath} style={styles.container}>
      <SingleBlock path={path} text="Following" />
      <SingleBlock path={path} text="You" />
    </Pressable>
  );
};

export default Header;

const SingleBlock = ({ text, path }: { text: PathType; path: PathType }) => {
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
