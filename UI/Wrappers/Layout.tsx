import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WrapperType } from "./type";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../global/constants/color";

const Layout = ({ children, style, padding, noScrollView }: WrapperType) => {
  const styles = StyleSheet.create({
    container: {
      minHeight: "100%",
      padding: padding,
    },
    safeArea: {
      minHeight: "100%",
      backgroundColor: COLORS.BACKGROUND_COLOR,
      paddingTop: 16,
    },
  });
  if (noScrollView) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={[styles.container, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
