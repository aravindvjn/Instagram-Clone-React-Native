import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "./catData";
import CustomText from "../../UI/Typography/CustomText";
import CustomButton from "../../UI/Buttons/CustomButton";

const Categories = () => {
  const renderItem = ({ item }: { item: string }) => (
    <CustomButton style={styles.item}>
      <CustomText fontSize={14}>{item}</CustomText>
    </CustomButton>
  );
  return (
    <View>
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "transparent",
    padding: 7,
  },
});
