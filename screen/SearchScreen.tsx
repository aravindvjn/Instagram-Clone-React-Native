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

const SearchScreen = () => {
  return (
    <Layout>
      <SearchInput />
      <Categories />
      <PhotoGrid />
    </Layout>
  );
};

export default SearchScreen;
