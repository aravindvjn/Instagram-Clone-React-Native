import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import CustomText from "../UI/Typography/CustomText";
import Header from "../components/LikeScreen/Header";
import { PathType } from "../components/LikeScreen/type";
import YouPath from "../components/LikeScreen/YouPath";

const LikeScreen = () => {
  const [path, setPath] = useState<PathType>("You");
  return (
    <Layout>
      <Header path={path} setPath={setPath} />
      {path === "You" && <YouPath />}
    </Layout>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({});
