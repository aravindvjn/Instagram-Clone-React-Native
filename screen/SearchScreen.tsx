import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Layout from "../UI/Wrappers/Layout";
import Categories from "../components/Search/Categories";
import SearchInput from "../components/Search/SearchInput";
import PhotoGrid from "../components/Search/PhotoGrid";
import { useFetchAllPosts } from "../hooks/useFetchAllPosts";

const SearchScreen = () => {
  const { data: posts = [], isLoading, refetch } = useFetchAllPosts();
  return (
    <Layout>
      <SearchInput />
      <Categories />
      <PhotoGrid posts={posts} isLoading={isLoading} />
    </Layout>
  );
};

export default SearchScreen;
