import AsyncStorage from "@react-native-async-storage/async-storage";
import { FollowStatusType } from "../../components/LikeScreen/type";

export const handleFollowStatus = (prev: FollowStatusType) => {
  if (prev === "Follow") {
    return { status: "Message", content: "started following you" };
  } else if (prev === "Requested") {
    return { status: "Following", content: "started following you" };
  } else {
    return { status: "Follow", content: "started following you" };
  }
}

export const formateFollow = (count: number) => {
  if (count > 1000000) {
    return `${(count / 1000000).toFixed(2)}M`
  } else if (count > 1000) {
    return `${(count / 1000).toFixed(2)}K`

  }
  return count;
}

import * as FileSystem from 'expo-file-system';

export const convertToBase64 = async (uri: string): Promise<string | null> => {
  try {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return null;
  }
};

