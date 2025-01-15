import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Skeleton, { skeletonStyles } from "../Loadings/Skeletons";

const PostSkeleton = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    image: {
      width,
      height: width,
      borderRadius: 0,
      marginVertical: 10,
    },
    container: {
      gap: 0,
    },
  });
  return (
    <View style={styles.container}>
      <View style={[skeletonStyles.row10, { paddingHorizontal: 16 }]}>
        <Skeleton style={[skeletonStyles.profile, { height: 44, width: 44 }]} />
        <View style={{ gap: 7 }}>
          <Skeleton style={[skeletonStyles.name]} />
          <Skeleton style={[skeletonStyles.name]} />
        </View>
      </View>
      <Skeleton style={styles.image} />
    </View>
  );
};

export default PostSkeleton;
