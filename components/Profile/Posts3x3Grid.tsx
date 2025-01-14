import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { UserType } from "./type";
import { PostTypes } from "../Home/type";
import { Ionicons } from "@expo/vector-icons";
import NoPosts from "./NoPosts";
import { useNavigation } from "@react-navigation/native";

const Posts3x3Grid = (props: UserType) => {
  const { id, posts = [] } = props;
  console.log(props);
  const [page, setPage] = useState<"grid" | "tags">("grid");
  const changePageHandler = () => {
    setPage(page === "grid" ? "tags" : "grid");
  };
  if (!posts || posts?.length === 0) {
    return <NoPosts />;
  }
  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={changePageHandler}>
          <Ionicons
            style={[
              styles.cell,
              page === "grid" && { borderBottomColor: "white" },
            ]}
            color={"white"}
            name="grid"
            size={25}
          />
        </Pressable>
        <Pressable onPress={changePageHandler}>
          <Ionicons
            style={[
              styles.cell,
              page === "tags" && { borderBottomColor: "white" },
            ]}
            color={"white"}
            name="person-outline"
            size={25}
          />
        </Pressable>
      </View>
      {page === "grid" && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {posts &&
            posts
              ?.reverse()
              ?.map((item, index) => (
                <SingleCell id={id} {...item} uri={item?.uri} key={index} />
              ))}
        </View>
      )}
    </View>
  );
};

export default Posts3x3Grid;
const styles = StyleSheet.create({
  cell: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    paddingTop: 20,
    width: 60,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 59,
  },
});
const SingleCell = (props: PostTypes) => {
  const { uri, id } = props;
  const { width } = useWindowDimensions();
  const oneByThree = width / 3;
  const navigation: any = useNavigation();
  const styles = StyleSheet.create({
    container: {
      width: oneByThree - 2,
      height: oneByThree - 2,
      padding: 1,
      margin: 1,
    },
  });
  return (
    <Pressable
      onPress={() => navigation.navigate("DetailedPost", { post: props })}
      style={styles.container}
    >
      {uri ? (
        <Image style={styles.container} source={{ uri }} />
      ) : (
        <Image
          style={styles.container}
          source={require("../../assets/demo/post.png")}
        />
      )}
    </Pressable>
  );
};
