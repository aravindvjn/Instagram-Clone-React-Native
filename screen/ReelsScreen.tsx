import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Reel from "../components/Reel/Reel";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../data";
import { reels } from "../data/reels";

const { height } = Dimensions.get("window");
const ReelsScreen = () => {
  return (
    <Layout noScrollView>
      <FlatList
        data={reels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Reel key={item?.id} {...item} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingBottom: height }}
      />
    </Layout>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({});
