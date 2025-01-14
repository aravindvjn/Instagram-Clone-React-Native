import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Card/Post";
import { PostTypes, StoryTypes } from "../components/Home/type";
import Block from "../components/Helpers/Block";
import { useFetchAllPosts } from "../hooks/useFetchAllPosts";

const HomeScreen = () => {
  const { data: posts = [], refetch, isLoading } = useFetchAllPosts();
  const [stories, setStories] = useState<StoryTypes[]>([]);
  const header = (
    <>
      <Header />
      <Stories stories={stories} />
    </>
  );

  const renderItems = ({ item, index }: { item: PostTypes; index: number }) => {
    return (
      <>
        {index === 0 && header}
        <Post {...item} />
        {index === posts?.length - 1 && <Block height={250} />}
      </>
    );
  };

  return (
    <Layout noScrollView>
      <FlatList
        data={posts}
        renderItem={renderItems}
        keyExtractor={(item) => item.post_id!}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
