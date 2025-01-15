import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../UI/Wrappers/Layout";
import Center from "../../UI/Wrappers/Center";

const WelcomeScreen = () => {
  return (
    <Layout noScrollView>
      <Center>
        <Image
          style={{ width: 90, height: 90 }}
          source={require("../../assets/icon.png")}
        />
      </Center>
    </Layout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
