import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../global/constants/color";

const { width } = Dimensions.get("window");

const Skeleton = ({
  w,
  h,
  style,
}: {
  w?: number;
  h?: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });
  const styles = StyleSheet.create({
    skeleton: {
      width: w || "50%",
      height: h || 30,
      borderRadius: 6,
      backgroundColor: COLORS.SKELETON,
      overflow: "hidden",
    },
    shimmer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#4a4a4a",
      opacity: 0.3,
    },
  });
  const Shimmer = () => (
    <Animated.View
      style={[
        styles.shimmer,
        {
          transform: [{ translateX }],
        },
      ]}
    />
  );

  return (
    <View style={[styles.skeleton, style]}>
      <Shimmer />
    </View>
  );
};

export default Skeleton;

export const skeletonStyles = StyleSheet.create({
  profile: {
    borderRadius: "50%",
    height: 56,
    width: 56,
  },
  name: {
    height: 12,
    width: 90,
  },
  row15: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  row10: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
