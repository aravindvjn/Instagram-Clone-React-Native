import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import ArrowBackHeader from "../components/Helpers/ArrowBackHeader";
import Header from "../components/Chats/Header";
import SingleChat from "../components/Chats/SingleChat";
import { chats } from "../data/chats";

const ChatListScreen = () => {
  let newChats;
  for (const post of Object.entries(chats)) {
    newChats = Object.entries(post);
  }
  return (
    <Layout noScrollView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={newChats}
        renderItem={({ item }) => <SingleChat chat={item} />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => true} />
        }
      />
    </Layout>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({});
