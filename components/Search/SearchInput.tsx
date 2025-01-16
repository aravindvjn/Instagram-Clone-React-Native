import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../../UI/Inputs/Input";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import { SearchType } from "./type";

const SearchInput = ({ onSearchChange, search }: SearchType) => {
  return (
    <View style={styles.container}>
      <Input
        value={search}
        onChangeText={onSearchChange}
        placeholder="Search"
        style={{ flex: 1 }}
        inputStyle={styles.input}
      />
      <Pressable style={styles.icon}>
        <Ionicons color={"rgba(255,255,255,0.6)"} name="search" size={20} />
      </Pressable>
      <Pressable style={styles.scan}>
        <Ionicons name="scan" color={COLORS.TEXT_COLOR} size={25} />
      </Pressable>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    height: 30,
    borderWidth: 0,
    paddingLeft: 40,
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 12,
  },
  scan: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
