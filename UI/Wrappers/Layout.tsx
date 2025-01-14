import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WrapperType } from "./type";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../global/constants/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import SetUserNameAler from "../../components/Home/SetUserNameAler";

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
  const { data: user } = useCurrentUser();
  if (noScrollView) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        {!user?.username && user?.email && <SetUserNameAler />}
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView>
        {!user?.username && user?.email && <SetUserNameAler />}
        <View style={[styles.container, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
