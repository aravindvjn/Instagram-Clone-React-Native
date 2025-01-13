import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../UI/Inputs/Input";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";
import CustomButton from "../../UI/Buttons/CustomButton";
import Center from "../../UI/Wrappers/Center";
import Instagram from "../Images/Instagram";
import { UserInputs } from "./type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { users } from "../../data/users";

const Login = () => {
  const [inputs, setInputs] = useState<UserInputs>({
    password: "",
    username: "",
  });
  const queryClient = useQueryClient();

  const handleSetData = () => {
    queryClient.setQueryData(["user"], users[1]);
  };
  return (
    <View style={styles.container}>
      <View></View>
      <View style={{ gap: 15 }}>
        <Center>
          <Instagram />
        </Center>
        <Input
          onChange={(text) =>
            setInputs((prev: any) => ({ ...prev, username: text }))
          }
          placeholder="Username"
        />
        <Input
          onChange={(text) =>
            setInputs((prev: any) => ({ ...prev, password: text }))
          }
          placeholder="Password"
        />
        <CustomText textAlign="right" textStyle={styles.text}>
          Forgot Password
        </CustomText>
        <CustomButton onPress={handleSetData} style={styles.button}>
          Login
        </CustomButton>
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
