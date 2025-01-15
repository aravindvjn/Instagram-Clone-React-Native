import { StyleSheet, Text, View, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import { PathValues } from "../components/FollowList/type";
import { useFollowers, useFollowing } from "../hooks/useFetchFollowList";
import ArrowBackHeader from "../components/Helpers/ArrowBackHeader";
import HeaderNavigation from "../components/FollowList/HeaderNavigation";
import SingleUser from "../components/FollowList/SingleUser";
import Center from "../UI/Wrappers/Center";
import CustomText from "../UI/Typography/CustomText";

const FollowListScreen = ({ route }: any) => {
  const { params } = route;
  const [path, setPath] = useState<PathValues>(params?.page || "Followers");
  const { data, isFetching, refetch, isLoading } =
    path === "Followers" ? useFollowers(params?.id) : useFollowing(params?.id);
  return (
    <Layout noScrollView>
      <FlatList
        data={data}
        ListHeaderComponent={
          <>
            <ArrowBackHeader />
            <HeaderNavigation path={path} setPath={setPath} />
          </>
        }
        renderItem={({ item }) => <SingleUser key={item?.userId} {...item!} />}
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl
            refreshing={isFetching || isLoading}
            onRefresh={refetch}
          />
        }
        ListEmptyComponent={
          <Center style={{ marginTop: 20 }}>
            <CustomText fontSize={14}>No {path}</CustomText>
          </Center>
        }
      />
    </Layout>
  );
};

export default FollowListScreen;

const styles = StyleSheet.create({});
