import axios from 'axios';
import { firebaseDatabaseURL } from '../store/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addFollower = async (userId: string, followerId: string) => {
    try {
        const idToken = await AsyncStorage.getItem('idToken');
        await axios.put(`${firebaseDatabaseURL}/users/${userId}/followers/${followerId}.json?auth=${idToken}`, { data: true });

        await axios.put(`${firebaseDatabaseURL}/users/${followerId}/following/${userId}.json?auth=${idToken}`, { data: true });

        return true;
    } catch (error) {
        console.error('Error adding follower:', error);
        return false;
    }
};

export const removeFollower = async (userId: string, followerId: string) => {
    try {
        const idToken = await AsyncStorage.getItem('idToken');
        await axios.delete(`${firebaseDatabaseURL}/users/${userId}/followers/${followerId}.json?auth=${idToken}`);

        await axios.delete(`${firebaseDatabaseURL}/users/${followerId}/following/${userId}.json?auth=${idToken}`);

        return true;
    } catch (error) {
        console.error('Error removing follower:', error);
        return false
    }
};
const fetchUserDetailsById = async (userId: string) => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users/${userId}.json`);
        if (response.data) {
            const { profilePic, username, name } = response.data;
            return { userId, profilePic, username, name };
        }
        return null; // Return null if user data is not found
    } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
    }
};

// Fetch followers
export const fetchFollowers = async (userId: string) => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users/${userId}/followers.json`);
        const followersIds = response.data ? Object.keys(response.data) : [];

        // Fetch detailed data for each follower
        const followers = await Promise.all(
            followersIds.map(async (followerId) => {
                const userDetails = await fetchUserDetailsById(followerId);
                return userDetails;
            })
        );

        return followers.filter(Boolean); // Filter out any null results
    } catch (error) {
        console.error("Error fetching followers:", error);
        return [];
    }
};

// Fetch following
export const fetchFollowing = async (userId: string) => {
    try {
        const response = await axios.get(`${firebaseDatabaseURL}/users/${userId}/following.json`);
        const followingIds = response.data ? Object.keys(response.data) : [];

        // Fetch detailed data for each following user
        const following = await Promise.all(
            followingIds.map(async (followingId) => {
                const userDetails = await fetchUserDetailsById(followingId);
                return userDetails;
            })
        );

        return following.filter(Boolean); // Filter out any null results
    } catch (error) {
        console.error("Error fetching following:", error);
        return [];
    }
};