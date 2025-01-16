import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { useQuery } from "@tanstack/react-query";

const fetchAllUsers = async () => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users.json`);

        if (response.data) {
            const usersData = Object.keys(response.data).map((userId) => {
                const user = response.data[userId];
                return {
                    userId,
                    profilePic: user.profilePic || '',
                    username: user.username || '',
                    name: user.name || ''
                };
            });
            return usersData;
        } else {
            console.log("No users found.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users data:", error);
        return [];
    }
};

export const useAllUsers = () => {
    return useQuery({
        queryKey: ['allUsers'],
        queryFn: fetchAllUsers,
    });
};
