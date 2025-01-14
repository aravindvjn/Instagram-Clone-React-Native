import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { useQuery } from "@tanstack/react-query";

const fetchPostByPostId = async (postId: string, userId: string) => {
    try {
        // Fetch the post data
        const postResponse = await axios.get(`${firebaseDatabaseURL}/users/${userId}/posts/${postId}.json`);

        if (!postResponse.data) {
            console.log("Post not found.");
            return null;
        }

        // Fetch the user data
        const userResponse = await axios.get(`${firebaseDatabaseURL}/users/${userId}.json`);

        if (!userResponse.data) {
            console.log("User not found.");
            return null;
        }

        // Fetch the likes data
        const likesResponse = await axios.get(`${firebaseDatabaseURL}/users/${userId}/posts/${postId}/likes.json`);
        const likedUsers = likesResponse.data ? Object.keys(likesResponse.data) : [];

        const postData = {
            ...postResponse.data,
            uri: postResponse.data.imageUrl,
            likes_count: likedUsers.length,
            liked_users: likedUsers,
            post_id: postId
        };

        const userData = {
            ...userResponse.data,
            id: userId,
        };

        return {
            post: postData,
            user: userData,
        };
    } catch (error) {
        console.error("Error fetching post or user data:", error);
        return null;
    }
};

export const useFetchPost = (postId: string, userId: string) => {
    return useQuery({
        queryKey: ['post', userId, postId],
        queryFn: () => fetchPostByPostId(postId, userId),
    });
};
