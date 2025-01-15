import axios from "axios";
import { firebaseDatabaseURL } from "../store/auth";
import { PostTypes } from "../../components/Home/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addPost = async ({
  data,
  userId,
  idToken,
}: {
  data: PostTypes
  userId: string;
  idToken: string;
}) => {
  try {
    const newPost = {
      content: data?.caption,
      imageUrl: data?.uri,
      locations: data?.locations,
      createdAt: new Date().toISOString(),
    };

    const result = await axios.post(
      `${firebaseDatabaseURL}/users/${userId}/posts.json?auth=${idToken}`,
      newPost
    );

    if (result.data) {
      return { status: true, message: 'Post added successfully.' };
    }

    return { status: false, message: 'Failed to add post.' };
  } catch (error) {
    console.error("Error adding post:", error);
    return { status: false, message: 'Error adding post.' };
  }
};

export const addReel = async ({
  videoUri,
  userId,
  caption,
  idToken,
}: {
  videoUri: string;
  userId: string;
  caption: string;
  idToken: string;
}) => {
  try {
    const newPost = {
      user_id: userId,
      caption: caption,
      video_url: videoUri,
      createdAt: new Date().toISOString(),
    };

    const result = await axios.post(
      `${firebaseDatabaseURL}/reels.json?auth=${idToken}`,
      newPost
    );

    if (result.data && result.data.name) { 
      return { 
        status: true, 
        message: 'Video post added successfully.', 
      };
    }

    return { status: false, message: 'Failed to add video post.' };
  } catch (error) {
    console.error("Error adding video post:", error);
    return { status: false, message: 'Error adding video post.' };
  }
};



export const toggleLike = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  try {
    const idToken = await AsyncStorage.getItem('idToken');
    const postResponse = await axios.get(
      `${firebaseDatabaseURL}/users/${userId}/posts/${postId}/likes.json`
    );

    const postLikes = postResponse.data || {};

    if (postLikes[userId]) {
      await axios.delete(
        `${firebaseDatabaseURL}/users/${userId}/posts/${postId}/likes/${userId}.json?auth=${idToken}`
      );

      return { status: true, liked: false };
    } else {

      await axios.put(
        `${firebaseDatabaseURL}/users/${userId}/posts/${postId}/likes/${userId}.json?auth=${idToken}`,
        { data: true }
      );

      return { status: true, liked: true };
    }
  } catch (error: any) {
    console.error(
      "Error toggling like:",
      error.response ? error.response.data : error.message
    );
    return { status: false, message: 'Error toggling like.' };
  }
};
