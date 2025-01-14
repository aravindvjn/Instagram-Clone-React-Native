import axios from "axios";
import { UserType } from "../../components/Profile/type";
import { firebaseDatabaseURL } from "../store/auth";

export const updateProfile = async ({ bio, email, id, name, profilePic, username, idToken }: UserType) => {
    try {
        const userCheckResponse = await axios.get(
            `${firebaseDatabaseURL}/users.json?orderBy="username"&equalTo="${username}"`
        );
        if (userCheckResponse.data && Object.keys(userCheckResponse.data).length > 0 && Object.keys(userCheckResponse.data)[0] !== id) {
            return { status: false, message: 'Username is already taken. Please choose a different one.' };
        }
        const userData = {
            email,
            username,
            name,
            profilePic,
            bio,
            posts: {},
            followers: {},
            following: {},
        };
        const results = await axios.put(
            `${firebaseDatabaseURL}/users/${id}.json?auth=${idToken}`,
            userData
        );
        if (results.data) {
            return { status: true }
        }
        return { status: false }
    } catch (error) {
        console.log("error", error);
        return { status: false }
    }

}