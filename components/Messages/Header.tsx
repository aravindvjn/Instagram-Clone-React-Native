import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowBack from "../Helpers/ArrowBack";
import Profile from "../Images/Profile";
import CustomText from "../../UI/Typography/CustomText";

const Header = () => {
  return (
    <View style={styles.container}>
      <ArrowBack />
      <Profile size={40} />
      <View>
        <CustomText textStyle={styles.name}>ABHIRAM SM</CustomText>
        <CustomText fontSize={12}>abhiramsm_</CustomText>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    gap: 15,
  },
  name: {
    fontWeight: "bold",
  },
});
