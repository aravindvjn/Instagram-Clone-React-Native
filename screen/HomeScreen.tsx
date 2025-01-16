import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Card/Post";
import { PostTypes, StoryTypes } from "../components/Home/type";
import { useFetchAllPosts } from "../hooks/useFetchAllPosts";
import PostSkeleton from "../components/Card/PostSkeleton";

const HomeScreen = () => {
  const { data: posts = [], refetch, isLoading } = useFetchAllPosts();
  const [stories, setStories] = useState<StoryTypes[]>([]);
  const header = (
    <>
      <Header />
      <Stories stories={stories} />
    </>
  );
  if (isLoading) {
    return (
      <Layout>
        {header}
        <PostSkeleton />
        <PostSkeleton />
      </Layout>
    );
  }
  return (
    <Layout noScrollView>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        ListHeaderComponent={header}
        keyExtractor={(item) => item.post_id!}
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
