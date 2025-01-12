import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { data } from "../../data";

const PhotoGrid = () => {
  const lengthBy3 = Math.floor(data?.length / 3);
  return (
    <View>
      {Array(lengthBy3)
        .fill("")
        .map((_, index) => {
          index += 1;
          if (index % 4 === 1) {
            return (
              <View style={styles.grid}>
                <View>
                  <ImageParts uri={data[1 * index - 1].uri} />
                  <ImageParts uri={data[1 * index - 1].uri} />
                </View>
                <ImageParts large uri={data[1 * index - 1].uri} />
              </View>
            );
          }
          if (index % 4 === 0) {
            return (
              <View style={styles.grid}>
                <ImageParts large uri={data[1 * index - 1].uri} />
                <View>
                  <ImageParts uri={data[1 * index - 1].uri} />
                  <ImageParts uri={data[1 * index - 1].uri} />
                </View>
              </View>
            );
          }
          return (
            <View style={styles.grid}>
              <ImageParts uri={data[1 * index - 1].uri} />
              <ImageParts uri={data[2 * index - 1].uri} />
              <ImageParts uri={data[3 * index - 1].uri} />
            </View>
          );
        })}
    </View>
  );
};

export default PhotoGrid;

const ImageParts = ({ uri, large }: { uri: string; large?: boolean }) => {
  const { width } = useWindowDimensions();
  const twoBythree = (2 * width) / 3;
  const oneBythree = (1 * width) / 3;
  return (
    <Image
      style={styles.photo}
      source={{ uri: uri }}
      width={large ? twoBythree : oneBythree}
      height={large ? twoBythree : oneBythree}
    />
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
