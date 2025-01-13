import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../UI/Buttons/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { FollowStatusType } from "../LikeScreen/type";

const OperationButtons = ({ status }: { status: FollowStatusType }) => {
  const color = "white";

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 5,
      marginTop: 10,
    },
    button: {
      flexGrow: 1,
      height: 35,
      backgroundColor: "#2c2c2c",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <CustomButton style={styles.button}>Following</CustomButton>
      <CustomButton style={styles.button}>Message</CustomButton>
    </View>
  );
};

export default OperationButtons;
