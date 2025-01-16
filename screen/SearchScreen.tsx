import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import Layout from "../UI/Wrappers/Layout";
import Categories from "../components/Search/Categories";
import SearchInput from "../components/Search/SearchInput";
import PhotoGrid from "../components/Search/PhotoGrid";
import { useFetchAllPosts } from "../hooks/useFetchAllPosts";
import { useAllUsers } from "../hooks/useAllUsers";
import CustomText from "../UI/Typography/CustomText";
import SingleUser from "../components/FollowList/SingleUser";
import Center from "../UI/Wrappers/Center";
import { UserType } from "../components/Profile/type";

const SearchScreen = () => {
  const { data: posts = [], isLoading, refetch } = useFetchAllPosts();
  const { data: allUsers = [], isLoading: allUsersLoading } = useAllUsers();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<UserType[]>([]);

  const onSearchChange = (text: string) => {
    setSearch(text);
    setResults((prev) => {
      const res = allUsers?.filter((user) => {
        return (
          user.username.toLowerCase().includes(text.toLowerCase()) ||
          user.name.toLowerCase().includes(text.toLowerCase())
        );
      });
      return res;
    });
  };

  return (
    <Layout noScrollView>
      <SearchInput search={search} onSearchChange={onSearchChange} />
      {!search && (
        <>
          <Categories />
          <PhotoGrid posts={posts} isLoading={isLoading} />
        </>
      )}
      {search &&
        (results?.length > 0 ? (
          results?.map((item: any) => (
            <SingleUser key={item?.userId} {...item} />
          ))
        ) : (
          <Center>
            <CustomText>No Users Found</CustomText>
          </Center>
        ))}
      {search && allUsersLoading && <ActivityIndicator size="large" />}
    </Layout>
  );
};

export default SearchScreen;
