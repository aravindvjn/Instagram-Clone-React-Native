import React, { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Layout from "../UI/Wrappers/Layout";
import Reel from "../components/Reel/Reel";
import { reels } from "../data/reels";
import { useIsFocused } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const ReelsScreen = () => {
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const isFocused = useIsFocused();
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      if (viewableItems.length > 0) {
        const firstVisibleItem = viewableItems[0];
        setActiveReel(firstVisibleItem.item.id.toString());
      }
    }
  ).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <Layout noScrollView>
      <FlatList
        data={reels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Reel
            key={item.id}
            {...item}
            isActive={item.id.toString() === activeReel && isFocused}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingBottom: height }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </Layout>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({});
