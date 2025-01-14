import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Post from "../components/Card/Post";
import { useFetchPost } from "../hooks/useFetchPostById";
import ArrowBack from "../components/Helpers/ArrowBack";
import CustomText from "../UI/Typography/CustomText";

const DetailedPostScreen = ({ route }: { route: any }) => {
  const { params } = route;
  if (!params || !params?.post) {
    return null;
  }
  const { data, isLoading } = useFetchPost(
    params?.post?.postId,
    params?.post?.id
  );

  if (isLoading) {
    return (
      <Layout>
        <View></View>
      </Layout>
    );
  }
  console.log(data);
  return (
    <Layout>
      <View
        style={{
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
          gap: 15,
        }}
      >
        <ArrowBack />
        <CustomText textStyle={{ fontWeight: "bold" }} fontSize={20}>
          Posts
        </CustomText>
      </View>
      <Post {...data?.post} {...data?.user} />
    </Layout>
  );
};

export default DetailedPostScreen;

const styles = StyleSheet.create({});
