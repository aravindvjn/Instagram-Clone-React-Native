import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../UI/Typography/CustomText";
import CustomButton from "../../UI/Buttons/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  onPress,
  isLoading,
}: {
  onPress: () => void;
  isLoading: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close" color={"white"} size={30} />
        </Pressable>
        <CustomText fontSize={20}>New Post</CustomText>
      </View>
      <CustomButton
        isLoading={isLoading}
        disabled={isLoading}
        onPress={onPress}
        textStyle={{ fontSize: 16 }}
        style={styles.button}
      >
        Post
      </CustomButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    height: 40,
  },
});
