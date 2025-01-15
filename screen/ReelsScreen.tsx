import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import Layout from "../UI/Wrappers/Layout";
import Reel from "../components/Reel/Reel";
import { useIsFocused } from "@react-navigation/native";
import { useRandomReels } from "../hooks/useFetchReels";
import { ReelTypes } from "../components/Reel/type";
import ReelSkeleton from "../components/Reel/ReelSkeleton";

const { height } = Dimensions.get("window");

const ReelsScreen = () => {
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const isFocused = useIsFocused();
  const { data: reels = [], isLoading, refetch } = useRandomReels();
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: any[];
  }) => {
    if (viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0];
      setActiveReel(firstVisibleItem?.item?.reelId);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  if (isLoading) {
    return <ReelSkeleton />;
  }
  return (
    <Layout noScrollView>
      <FlatList
        data={reels}
        keyExtractor={(item) => item.reelId!}
        renderItem={({ item }: { item: ReelTypes }) => (
          <Reel {...item} isActive={item.reelId === activeReel && isFocused} />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingBottom: height }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </Layout>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({});
