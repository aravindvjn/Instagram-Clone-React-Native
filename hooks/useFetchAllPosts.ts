import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { PostTypes } from "../components/Home/type";
import { useQuery } from "@tanstack/react-query";

interface UserResponse {
  posts?: {
    [postId: string]: {
      imageUrl?: string;
      content?: string;
      locations?: string;
    };
  };
  profilePic?: string;
  username?: string;
}

interface FirebaseResponse {
  [userId: string]: UserResponse;
}

const fetchAllPosts = async (): Promise<PostTypes[]> => {
  try {
    const response = await axios.get<FirebaseResponse>(`${firebaseDatabaseURL}/users.json`);
    if (response.data) {
      let allPosts: PostTypes[] = [];
      for (const [userId, user] of Object.entries(response.data)) {
        if (user.posts) {
          for (const [postId, post] of Object.entries(user.posts)) {
            const likesResponse = await axios.get<{ [key: string]: boolean } | null>(
              `${firebaseDatabaseURL}/users/${userId}/posts/${postId}/likes.json`
            );
            const likedUsers = likesResponse.data ? Object.keys(likesResponse.data) : [];

            allPosts.push({
              post_id: postId,
              id: userId,
              profilePic: user?.profilePic || '',
              username: user?.username || '',
              uri: post?.imageUrl || '',
              caption: post?.content || '',
              likes_count: likedUsers.length,
              liked_users: likedUsers,
              locations: post?.locations || '',
            });
          }
        }
      }
      return allPosts;
    }
    return [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};

export const useFetchAllPosts = () => {
  return useQuery({
    queryKey: ['allPosts'],
    queryFn: fetchAllPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
