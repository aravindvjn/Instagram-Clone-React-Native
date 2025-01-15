import AsyncStorage from "@react-native-async-storage/async-storage";
import { FollowStatusType } from "../../components/LikeScreen/type";

export const handleFollowStatus = (prev: FollowStatusType) => {
  if (prev === "Follow") {
    return { status: "Following", content: "started following you" };
  } else if (prev === "Following") {
    return { status: "Following", content: "started following you" };
  } else {
    return { status: "Follow", content: "started following you" };
  }
}

export const decodeFollowStatus = (id: string, followers: string[], following: string[]) => {
  if (followers.includes(id) && following.includes(id)) {
    return "Following";
  } else if (followers.includes(id)) {
    return 'Following';
  } else if (following.includes(id)) {
    return 'Follow Back'
  } else {
    return 'Follow';
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



//Formate dates
export const formateDate = (date: string) => {
  const now: any = new Date();
  const givenDate: any = new Date(date);
  const diffInSeconds = Math.floor((now - givenDate) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hours ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} days ago`;
  } else if (diffInSeconds < 2592000) {
    const weeks = Math.floor(diffInSeconds / 604800);
    return `${weeks} weeks ago`;
  } else {
    return givenDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}

