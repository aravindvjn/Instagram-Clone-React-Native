import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

export type VisitUserType = {
  children: ReactNode;
  username?: string;
  id?: string;
};
const VisitUser = ({ children, username, id }: VisitUserType) => {
  const navigation: any = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Profile", { id })}>
      {children}
    </Pressable>
  );
};

export default VisitUser;

const styles = StyleSheet.create({});
