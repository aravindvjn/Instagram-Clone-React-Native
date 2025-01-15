import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Header from "../components/Profile/Header";
import HightLights from "../components/Profile/HightLights";
import Posts3x3Grid from "../components/Profile/Posts3x3Grid";
import { UserType } from "../components/Profile/type";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useIsFocused, useRoute, RouteProp } from "@react-navigation/native";
import { useFetchUser } from "../hooks/useFetchUser";
import Center from "../UI/Wrappers/Center";
import ProfileSkeleton from "../components/Profile/ProfileSkeleton";

type ProfileScreenRouteProp = RouteProp<any>;

const ProfileScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const { params } = route;
  const { data: user, isLoading, refetch } = useFetchUser(params?.id);
  const { data: currentUser, isLoading: currentLoading } = useCurrentUser();
  if (isLoading || currentLoading) {
    return <ProfileSkeleton />;
  }
  return (
    <Layout noScrollView>
      <FlatList
        data={["hai"]}
        ListHeaderComponent={
          <>
            <Header id={params?.id} {...user} currentUser={currentUser!} />
            <HightLights id={params?.id!} currentUser={currentUser!} />
            <Posts3x3Grid {...user} />
          </>
        }
        renderItem={() => null}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
