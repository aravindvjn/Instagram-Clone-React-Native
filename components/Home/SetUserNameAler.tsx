import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../../UI/Wrappers/Layout";
import EditProfile from "../Profile/EditProfile";

const SetUserNameAler = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return <EditProfile isVisible={isVisible} setIsVisible={setIsVisible} />;
};

export default SetUserNameAler;

const styles = StyleSheet.create({});
