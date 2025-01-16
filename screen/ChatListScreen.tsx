import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import ArrowBackHeader from "../components/Helpers/ArrowBackHeader";
import Header from "../components/Chats/Header";
import SingleChat from "../components/Chats/SingleChat";
import { chats } from "../data/chats";
import { useChatList } from "../hooks/useChatsList";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Center from "../UI/Wrappers/Center";
import CustomText from "../UI/Typography/CustomText";

const ChatListScreen = () => {
  const { data: user } = useCurrentUser();
  const { data: chats = [], isFetching, refetch } = useChatList(user?.id!);
  return (
    <Layout noScrollView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={chats}
        renderItem={({ item }) => <SingleChat id={user?.id} {...item} />}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        ListEmptyComponent={
          <Center>
            <CustomText>No Chats</CustomText>
          </Center>
        }
      />
    </Layout>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({});
