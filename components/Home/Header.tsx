import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import Instagram from "../Images/Instagram";
import Icons from "../../UI/Icons/Icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Instagram height={30}  />
      <View style={styles.cell}>
        <Icons name="like" size={26} />
        <Icons name="messenger" size={27} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 44,
    marginTop: 20,
    paddingHorizontal: 13,
  },
  cell: {
    flexDirection: "row",
    width: 67,
    justifyContent: "space-between",
  },
});
