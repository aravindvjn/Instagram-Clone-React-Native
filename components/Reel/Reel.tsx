import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import CreatorDetails, { ReelDetailsSkeleton } from "./CreatorDetails";
import { PostTypes } from "../Home/type";
import { Ionicons } from "@expo/vector-icons";
import ReelOperations from "./ReelOperations";
import { ReelTypes } from "./type";
import { useFetchBasicUser } from "../../hooks/useFetchBasicUserData";

const Reel = ({ userId, caption, videoUrl = "", isActive }: ReelTypes) => {
  const { height, width } = useWindowDimensions();
  const videoRef = useRef<any>(null);
  const [isMute, setIsMute] = useState<boolean>(false);
  const { data: user, isLoading } = useFetchBasicUser(userId!);
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current?.playAsync();
    } else if (videoRef.current) {
      videoRef.current?.pauseAsync();
    }
  }, [isActive]);

  const styles = StyleSheet.create({
    container: {
      height,
    },
    heading: {
      fontWeight: "500",
      position: "absolute",
      left: 15,
      top: 15,
    },
    reel: {
      height,
      width,
    },
    mute: {
      position: "absolute",
      alignSelf: "center",
      top: height / 2 - 25,
      zIndex: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <Pressable
      onPress={() => setIsMute((prev) => !prev)}
      style={styles.container}
    >
      {isMute && (
        <Ionicons
          style={styles.mute}
          color={"white"}
          size={40}
          name="volume-mute-outline"
        />
      )}
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        style={styles.reel}
        isLooping
        isMuted={isMute}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls={false}
        shouldPlay={isActive}
      />
      <ReelOperations />
      {isLoading ? (
        <ReelDetailsSkeleton />
      ) : (
        <CreatorDetails
          caption={caption}
          userId={user?.id}
          username={user?.username}
          profilePic={user?.profilePic}
        />
      )}
    </Pressable>
  );
};

export default Reel;
