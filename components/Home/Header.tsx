import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import Instagram from "../Images/Instagram";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Ionicons name="camera-outline" size={27} color={COLORS.TEXT_COLOR} />
      </View>
        <Instagram height={40} />
      <View style={styles.cell}>
        <Ionicons name="notifications-outline" size={27} color={COLORS.TEXT_COLOR} />
        <Ionicons name="chatbubble-ellipses-outline" size={27} color={COLORS.TEXT_COLOR} />
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
    justifyContent:'space-between'
  },
});
