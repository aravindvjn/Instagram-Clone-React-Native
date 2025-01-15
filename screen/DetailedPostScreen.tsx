import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Post from "../components/Card/Post";
import { useFetchPost } from "../hooks/useFetchPostById";
import ArrowBack from "../components/Helpers/ArrowBack";
import CustomText from "../UI/Typography/CustomText";
import ArrowBackHeader from "../components/Helpers/ArrowBackHeader";
import PostSkeleton from "../components/Card/PostSkeleton";

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
        <ArrowBackHeader heading="Posts" />
        <PostSkeleton />
      </Layout>
    );
  }
  return (
    <Layout>
      <ArrowBackHeader heading="Posts" />
      <Post {...data?.post} {...data?.user} />
    </Layout>
  );
};

export default DetailedPostScreen;

const styles = StyleSheet.create({});
