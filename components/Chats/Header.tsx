import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowBackHeader from "../Helpers/ArrowBackHeader";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";

const Header = () => {
  return (
    <View>
      <ArrowBackHeader  />
      <View style={styles.container}>
        <CustomText fontSize={16} textStyle={[styles.text]}>
          Messages
        </CustomText>
        <CustomText
          fontSize={16}
          textStyle={[styles.text, { color: COLORS.BLUE }]}
        >
          Requests
        </CustomText>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 20,
  },
  text: {
    fontWeight: "bold",
  },
});
