import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { useQuery } from "@tanstack/react-query";

const fetchBasicUserDataById = async (userId: string) => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users/${userId}.json`);
        
        if (response.data) {
            const userData = {
                id: userId,
                profilePic: response.data.profilePic || '',
                username: response.data.username || '',
                name: response.data.name || ''
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

export const useFetchBasicUser = (userId: string) => {
    return useQuery({
        queryKey: ['basicUser', userId],
        queryFn: () => fetchBasicUserDataById(userId),
    });
};
