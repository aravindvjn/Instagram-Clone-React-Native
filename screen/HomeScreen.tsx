import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Card/Post";
import { PostTypes, StoryTypes } from "../components/Home/type";
import { data } from "../data";
import Block from "../components/Helpers/Block";

const HomeScreen = () => {
  const [posts, setPosts] = useState<PostTypes[]>(data);
  const [stories, setStories] = useState<StoryTypes[]>(data);
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
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
