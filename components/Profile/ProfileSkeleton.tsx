import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import Layout from "../../UI/Wrappers/Layout";
import Skeleton, { skeletonStyles } from "../Loadings/Skeletons";

const ProfileSkeleton = () => {
  const { width,height } = useWindowDimensions();

  return (
    <Layout noScrollView>
      <Skeleton h={30} style={{ margin: 16, marginBottom: 4 }} />
      <View
        style={[
          skeletonStyles.row15,
          { paddingHorizontal: 16, paddingVertical: 10 },
        ]}
      >
        <Skeleton style={[skeletonStyles.profile, styles.profile]} />
        <Skeleton style={styles.count} />
      </View>
      <View style={{ gap: 7, paddingHorizontal: 16, marginBottom: 20 }}>
        <Skeleton style={skeletonStyles.name} />
        <Skeleton style={skeletonStyles.name} />
        <View
          style={[skeletonStyles.row15, { flexShrink: 1, marginVertical: 10 }]}
        >
          <Skeleton style={{ flex: 1 }} />
          <Skeleton style={{ flex: 1 }} />
        </View>
      </View>
      <Skeleton w={width} h={height} />
    </Layout>
  );
};

export default ProfileSkeleton;

const styles = StyleSheet.create({
  count: {
    flex: 1,
    height: 60,
  },
  profile: {
    width: 90,
    height: 90,
  },
});
