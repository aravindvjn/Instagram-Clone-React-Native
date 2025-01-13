import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Profile/Header";
import HightLights from "../components/Profile/HightLights";
import Posts3x3Grid from "../components/Profile/Posts3x3Grid";
import { UserType } from "../components/Profile/type";
import { users } from "../data/users";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useIsFocused, useRoute, RouteProp } from "@react-navigation/native";

type ProfileScreenRouteProp = RouteProp<any>;

const ProfileScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const { params } = route;
  const [user, setUser] = useState<UserType | undefined>();
  const { data: currentUser } = useCurrentUser();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (params?.id && params?.id === currentUser?.id) {
      setUser(currentUser);
    } else if (params?.id) {
      const foundUser = users.find((u) => u.id === params.id);
      setUser(foundUser);
    }
  }, [params, currentUser, isFocused]);

  return (
    <Layout>
      <Header {...user} currentUser={currentUser!} />
      <HightLights id={user?.id || 0} currentUser={currentUser!} />
      <Posts3x3Grid {...user} />
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
