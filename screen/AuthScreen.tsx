import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Center from "../UI/Wrappers/Center";
import Login from "../components/Auth/Login";

const AuthScreen = () => {
  return (
    <Layout padding={16}>
      <Center style={styles.container}>
        <Login />
      </Center>
    </Layout>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
