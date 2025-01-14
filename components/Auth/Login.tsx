import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../UI/Inputs/Input";
import CustomText from "../../UI/Typography/CustomText";
import { COLORS } from "../../global/constants/color";
import CustomButton from "../../UI/Buttons/CustomButton";
import Center from "../../UI/Wrappers/Center";
import Instagram from "../Images/Instagram";
import { UserInputs } from "./type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "../../global/store/auth";

const Login = () => {
  const [inputs, setInputs] = useState<UserInputs>({
    password: "",
    email: "",
    username: "",
  });
  const [login, setLogin] = useState<boolean>(true);
  const usernameRegex = /^[a-z0-9._]+$/;
  const changeLogin = () => {
    setLogin((prev) => !prev);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleSetData = async () => {
    if (login) {
      if (!inputs.email || !inputs.password) {
        Alert.alert("Please enter your email or password");
      } else if (inputs?.password?.length < 8) {
        Alert.alert("Password must be at least 8 characters long");
      } else {
        setIsLoading(true);
        const results = await signIn(inputs.email!, inputs.password);
        if (results?.status) {
          queryClient.setQueryData(["user"], results);
        } else {
          Alert.alert(results?.message);
        }
        setIsLoading(false);
      }
    } else {
      if (!inputs.email || !inputs.password || !inputs.username) {
        Alert.alert("Please fill everything.");
      }
      if (!usernameRegex.test(inputs?.username!)) {
        Alert.alert(
          "Username should only contain alphanumeric characters,digits, dots and underscores."
        );
        return;
      } else if (inputs?.password?.length < 6) {
        Alert.alert("Password must be at least 6 characters long");
      } else {
        setIsLoading(true);
        const results = await signUp(
          inputs.email!,
          inputs.password,
          inputs.username!
        );
        if (results?.status) {
          Alert.alert("Account created successfully. Please sign in.");
          setLogin(true);
        } else {
          Alert.alert(results?.message);
        }
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View></View>
      <View style={{ gap: 15 }}>
        <Center>
          <Instagram />
        </Center>
        {!login && (
          <Input
            placeholder="Username"
            value={inputs?.username}
            onChangeText={(text: string) => {
              const trimmedText = text.trim().toLowerCase();
              if (usernameRegex.test(trimmedText) || trimmedText === "") {
                setInputs((prev) => ({ ...prev, username: trimmedText }));
              }
            }}
          />
        )}
        <Input
          value={inputs?.email}
          onChangeText={(text) =>
            setInputs((prev: any) => ({
              ...prev,
              email: text.toLocaleLowerCase(),
            }))
          }
          placeholder="Email"
        />
        <Input
          value={inputs?.password}
          onChangeText={(text) =>
            setInputs((prev: any) => ({ ...prev, password: text }))
          }
          placeholder="Password"
        />
        <CustomText textAlign="right" textStyle={styles.text}>
          Forgot Password
        </CustomText>
        <CustomButton
          isLoading={isLoading}
          onPress={handleSetData}
          style={styles.button}
        >
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
            {login ? "Don’t have an account?" : "Already have an account?"}{" "}
            <Pressable
              onPress={changeLogin}
              style={{ transform: [{ translateY: 4 }] }}
            >
              <CustomText fontSize={14} textStyle={styles.text}>
                {login ? "Sign up." : "Sign in."}
              </CustomText>
            </Pressable>
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
