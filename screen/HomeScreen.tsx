import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Card/Post";
import { PostTypes } from "../components/Home/type";
import { data } from "../data";

const HomeScreen = () => {
  const [posts, setPosts] = useState<PostTypes[]>(data);

  const header = (
    <>
      <Header />
      <Stories />
    </>
  );

  const renderItems = ({ item, index }: { item: PostTypes; index: number }) => {
    return (
      <>
        {index === 0 && header}
        <Post {...item} />
      </>
    );
  };

  return (
    <Layout noScrollView>
      <FlatList
        data={posts}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
