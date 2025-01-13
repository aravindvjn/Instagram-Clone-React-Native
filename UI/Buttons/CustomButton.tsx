import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../Typography/CustomText";
import { ButtonType } from "./type";
import { COLORS } from "../../global/constants/color";

const CustomButton = ({
  children,
  backgroundColor,
  color,
  style,
  textStyle,
  ...props
}: ButtonType) => {
  const styles = StyleSheet.create({
    pressable: {
      backgroundColor: backgroundColor || COLORS.BLUE,
      paddingHorizontal: 15,
      borderRadius: 5,
      height: 45,
      alignItems: "center",
      justifyContent:'center'
    },
    text: {
      color: color || COLORS.TEXT_COLOR,
      textAlign: "center",
      fontWeight: "bold",
    },
    pressed: {
      opacity: 0.4,
    },
  });

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.pressable,
        style,
        pressed && styles.pressed,
      ]}
    >
      <CustomText fontSize={14} textStyle={[styles.text, textStyle]}>
        {children}
      </CustomText>
    </Pressable>
  );
};

export default CustomButton;
