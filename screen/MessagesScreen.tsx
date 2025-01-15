import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Messages/Header";
import Message from "../components/Messages/Message";

const MessagesScreen = () => {
  const data = [
    {
      message: "Hey! Have you seen the latest episode of that new series?",
      timestamp: "2023-10-01T15:00:00Z",
      incoming: true,
    },
    {
      message: "Not yet! I’ve been so busy with work. Is it good?",
      timestamp: "2023-10-01T15:01:00Z",
      incoming: false,
    },
    {
      message: "Yeah, it’s really interesting! The plot twists are amazing.",
      timestamp: "2023-10-01T15:02:00Z",
      incoming: true,
    },
    {
      message: "I’ll have to catch up. What’s it about?",
      timestamp: "2023-10-01T15:03:00Z",
      incoming: false,
    },
    {
      message:
        "It’s a sci-fi thriller about time travel and alternate realities.",
      timestamp: "2023-10-01T15:04:00Z",
      incoming: true,
    },
    {
      message: "Sounds intriguing! I love that genre.",
      timestamp: "2023-10-01T15:05:00Z",
      incoming: false,
    },
    {
      message:
        "You should definitely give it a try. The characters are well-developed too.",
      timestamp: "2023-10-01T15:06:00Z",
      incoming: true,
    },
    {
      message: "I will! Do you have a favorite character?",
      timestamp: "2023-10-01T15:07:00Z",
      incoming: false,
    },
    {
      message:
        "I really like the main character. They have such a complex backstory.",
      timestamp: "2023-10-01T15:08:00Z",
      incoming: true,
    },
    {
      message: "Nice! I always appreciate a good character arc.",
      timestamp: "2023-10-01T15:09:00Z",
      incoming: false,
    },
    {
      message: "Exactly! And the cinematography is stunning too.",
      timestamp: "2023-10-01T15:10:00Z",
      incoming: true,
    },
    {
      message:
        "I’ll have to watch it on the weekend. Any other recommendations?",
      timestamp: "2023-10-01T15:11:00Z",
      incoming: false,
    },
    {
      message: "Hey! Have you seen the latest episode of that new series?",
      timestamp: "2023-10-01T15:00:00Z",
      incoming: true,
    },
    {
      message: "Not yet! I’ve been so busy with work. Is it good?",
      timestamp: "2023-10-01T15:01:00Z",
      incoming: false,
    },
    {
      message: "Yeah, it’s really interesting! The plot twists are amazing.",
      timestamp: "2023-10-01T15:02:00Z",
      incoming: true,
    },
    {
      message: "I’ll have to catch up. What’s it about?",
      timestamp: "2023-10-01T15:03:00Z",
      incoming: false,
    },
    {
      message:
        "It’s a sci-fi thriller about time travel and alternate realities.",
      timestamp: "2023-10-01T15:04:00Z",
      incoming: true,
    },
    {
      message: "Sounds intriguing! I love that genre.",
      timestamp: "2023-10-01T15:05:00Z",
      incoming: false,
    },
    {
      message:
        "You should definitely give it a try. The characters are well-developed too.",
      timestamp: "2023-10-01T15:06:00Z",
      incoming: true,
    },
    {
      message: "I will! Do you have a favorite character?",
      timestamp: "2023-10-01T15:07:00Z",
      incoming: false,
    },
    {
      message:
        "I really like the main character. They have such a complex backstory.",
      timestamp: "2023-10-01T15:08:00Z",
      incoming: true,
    },
    {
      message: "Nice! I always appreciate a good character arc.",
      timestamp: "2023-10-01T15:09:00Z",
      incoming: false,
    },
    {
      message: "Exactly! And the cinematography is stunning too.",
      timestamp: "2023-10-01T15:10:00Z",
      incoming: true,
    },
    {
      message:
        "I’ll have to watch it on the weekend. Any other recommendations?",
      timestamp: "2023-10-01T15:11:00Z",
      incoming: false,
    },
  ];

  const renderItems = ({ item }: any) => (
    <Message
      incoming={item.incoming}
      message={item.message}
      timestamp={item.timestamp}
    />
  );
  return (
    <Layout noScrollView>
      <Header />
      <View style={{ paddingHorizontal: 16 }}>
        <FlatList
          data={data}
          renderItem={renderItems}
          contentContainerStyle={{ paddingBottom: 500 }}
        />
      </View>
    </Layout>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
