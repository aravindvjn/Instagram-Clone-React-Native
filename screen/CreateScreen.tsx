import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import CreatePost from "../components/Create/CreatePosts";

const CreateScreen = () => {
  return (
    <Layout>
      <CreatePost />
    </Layout>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
