import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WrapperType } from "./type";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../global/constants/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Layout = ({ children, style, padding, noScrollView }: WrapperType) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      minHeight: "110%",
      padding: padding,
    },
    safeArea: {
      minHeight: "110%",
      backgroundColor: COLORS.BACKGROUND_COLOR,
      paddingTop: insets.top,
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
