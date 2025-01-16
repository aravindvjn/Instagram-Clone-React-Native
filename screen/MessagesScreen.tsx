import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Messages/Header";
import Message from "../components/Messages/Message";
import Footer from "../components/Messages/Footer";
import Block from "../components/Helpers/Block";
import { useMessages } from "../hooks/useMessages";
import Center from "../UI/Wrappers/Center";
import CustomText from "../UI/Typography/CustomText";
import { createChat, sendMessage } from "../global/functions/messageRequests";

const MessagesScreen = ({ route }: any) => {
  const { params } = route;
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useMessages(params?.user1_id, params?.user2_id);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const sendMessageHandler = async () => {
    if (message && !isLoading && !isError && !isSending) {
      setIsSending(true);
      if (data?.length > 0) {
        const result = await sendMessage(
          params?.user1_id,
          params?.user2_id,
          message
        );
        if (result) {
          setMessage("");
          refetch();
        }
      } else {
        const result = await createChat(params?.user1_id, params?.user2_id);
        if (result) {
          const res = await sendMessage(
            params?.user1_id,
            params?.user2_id,
            message
          );
          if (result) {
            setMessage("");
            refetch();
          }
        }
      }
      setIsSending(false);
    }
  };
  const renderItems = ({ item }: any) => (
    <Message
      incoming={params?.user1_id !== item?.senderId}
      message={item.text}
      timestamp={item.timestamp}
    />
  );
  return (
    <Layout noScrollView>
      <Header {...params?.userData} />
      <View style={{ paddingHorizontal: 16 }}>
        <FlatList
          data={data}
          renderItem={renderItems}
          contentContainerStyle={{ paddingTop: 250 }}
          ListHeaderComponent={<Block height={30} />}
          ListFooterComponent={<Block height={10} />}
          inverted
          ListEmptyComponent={
            <Center>
              <CustomText>No Messages</CustomText>
            </Center>
          }
        />
      </View>
      <Footer
        setMessage={setMessage}
        message={message}
        onSend={sendMessageHandler}
      />
    </Layout>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
