import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { InputType } from "./type";
import { COLORS } from "../../global/constants/color";
import CustomText from "../Typography/CustomText";

const Input = ({
  placeholder,
  isLabel,
  inputStyle,
  style,
  ...props
}: InputType) => {
  return (
    <View style={style}>
      <TextInput
        style={[
          styles.input,
          inputStyle,
          isLabel && { paddingTop: 25, borderRadius: 12 },
        ]}
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        placeholder={placeholder}
        {...props}
      />
      {isLabel && (
        <CustomText textStyle={styles.label}>{placeholder}</CustomText>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    minHeight: 44,
    backgroundColor: COLORS.LIGHT_BLACK,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 13.5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    color: COLORS.TEXT_COLOR,
  },
  label: {
    position: "absolute",
    left: 15,
    top: 10,
    opacity: 0.4,
  },
});
