import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useFetchAllPosts } from "../../hooks/useFetchAllPosts";
import Layout from "../../UI/Wrappers/Layout";
import { useNavigation } from "@react-navigation/native";

const PhotoGrid = ({ posts = [], isLoading }: any) => {
  if (isLoading) {
    return (
      <Layout>
        <View></View>
      </Layout>
    );
  }
  return (
    <View>
      {Array(Math.floor(posts?.length / 3))
        .fill("")
        .map((_, index) => {
          index += 1;
          if (index % 4 === 1) {
            return (
              <View key={index} style={styles.grid}>
                <View>
                  <ImageParts
                    post_id={posts[1 * index - 1].post_id || ""}
                    id={posts[1 * index - 1].id || ""}
                    uri={posts[1 * index - 1].uri || ""}
                  />
                  <ImageParts
                    post_id={posts[2 * index - 1].post_id || ""}
                    id={posts[2 * index - 1].id || ""}
                    uri={posts[2 * index - 1].uri || ""}
                  />
                </View>
                <ImageParts
                  post_id={posts[3 * index - 1].post_id || ""}
                  id={posts[3 * index - 1].id || ""}
                  large
                  uri={posts[3 * index - 1].uri || ""}
                />
              </View>
            );
          }
          if (index % 4 === 0) {
            return (
              <View key={index} style={styles.grid}>
                <ImageParts
                  post_id={posts[1 * index - 1].post_id || ""}
                  id={posts[1 * index - 1].id || ""}
                  large
                  uri={posts[1 * index - 1].uri || ""}
                />
                <View>
                  <ImageParts
                    post_id={posts[2 * index - 1].post_id || ""}
                    id={posts[2 * index - 1].id || ""}
                    uri={posts[2 * index - 1].uri || ""}
                  />
                  <ImageParts
                    post_id={posts[3 * index - 1].post_id || ""}
                    id={posts[3 * index - 1].id || ""}
                    uri={posts[3 * index - 1].uri || ""}
                  />
                </View>
              </View>
            );
          }
          return (
            <View key={index} style={styles.grid}>
              <ImageParts
                post_id={posts[1 * index - 1].post_id || ""}
                id={posts[1 * index - 1].id || ""}
                uri={posts[1 * index - 1].uri || ""}
              />
              <ImageParts
                post_id={posts[2 * index - 1].post_id || ""}
                id={posts[2 * index - 1].id || ""}
                uri={posts[2 * index - 1].uri || ""}
              />
              <ImageParts
                post_id={posts[3 * index - 1].post_id || ""}
                id={posts[3 * index - 1].id || ""}
                uri={posts[3 * index - 1].uri || ""}
              />
            </View>
          );
        })}
    </View>
  );
};

export default PhotoGrid;

const ImageParts = ({
  uri,
  large,
  id,
  post_id,
}: {
  uri: string;
  large?: boolean;
  id?: string;
  post_id?: string;
}) => {
  const { width } = useWindowDimensions();
  const twoBythree = (2 * width) / 3;
  const oneBythree = (1 * width) / 3;
  const navigation: any = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("DetailedPost", { post: { id, postId: post_id } })
      }
    >
      <Image
        style={styles.photo}
        source={{ uri: uri }}
        width={large ? twoBythree : oneBythree}
        height={large ? twoBythree : oneBythree}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grid: { flexDirection: "row" },
  photo: {
    borderWidth: 1,
    borderColor: "#000",
    overflow: "hidden",
  },
});
