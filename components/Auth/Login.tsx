import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../../UI/Inputs/Input";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";
import CustomButton from "../../UI/Buttons/CustomButton";
import Center from "../../UI/Wrappers/Center";
import Instagram from "../Images/Instagram";

const Login = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={{ gap: 15 }}>
        <Center>
          <Instagram />
        </Center>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <CustomText textAlign="right" textStyle={styles.text}>
          Forgot Password
        </CustomText>
        <CustomButton style={styles.button}>Login</CustomButton>
        <Center style={styles.center}>
          <CustomText textAlign="center" fontSize={14} textStyle={styles.text}>
            Log in with Facebook
          </CustomText>
          <CustomText textStyle={styles.opacity} fontSize={14}>
            OR
          </CustomText>
          <CustomText textStyle={styles.opacity} fontSize={14}>
            Don’t have an account?{" "}
            <CustomText fontSize={14} textStyle={styles.text}>
              Sign up.
            </CustomText>
          </CustomText>
        </Center>
      </View>
      <CustomText textAlign="center" textStyle={styles.opacity} fontSize={14}>
        Instagram from Facebook
      </CustomText>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
    marginBottom: 19,
    marginTop: 39,
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    color: COLORS.BLUE,
  },
  button: {
    marginTop: 25,
  },
  center: {
    gap: 41.5,
    marginTop: 37,
    flex: 0,
    justifyContent: "space-between",
  },
  opacity: {
    opacity: 0.6,
  },
});
