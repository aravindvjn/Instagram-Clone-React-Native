import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TypographyType } from "./type";
import { COLORS } from "../../global/constants/color";

const CustomText = ({
  children,
  textStyle,
  fontSize = 12,
  textAlign,
  ...props
}: TypographyType) => {
  const styles = StyleSheet.create({
    text: {
      color: COLORS.TEXT_COLOR,
      fontSize: fontSize,
      textAlign: textAlign || "left",
    },
  });

  return (
    <Text style={[styles.text, textStyle]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
