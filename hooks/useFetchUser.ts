import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { useQuery } from "@tanstack/react-query";

const fetchUserDataById = async (userId: string) => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users/${userId}.json?`);

        if (response.data) {

            const userData = {
                ...response.data,
                posts: response.data.posts
                    ? Object.entries(response.data.posts).map(([postId, post]: [string, any]) => ({
                        ...post,
                        postId,
                        uri: post.imageUrl,
                        id: userId
                    }))
                    : [],
            };

            return userData;
        } else {
            console.log("User not found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

export default fetchUserDataById;

export const useFetchUser = (id: string) => {
    return useQuery({
        queryKey: ['otherUser', id],
        queryFn: () => fetchUserDataById(id),
    });
};
