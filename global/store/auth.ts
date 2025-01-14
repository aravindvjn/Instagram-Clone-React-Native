import axios from "axios";
import { firebaseAPI } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseDatabaseURL = 'https://instagramclone-c008a-default-rtdb.firebaseio.com'

export const signUp = async (email: string, password: string, username: string) => {
  try {

    const userCheckResponse = await axios.get(
      `${firebaseDatabaseURL}/users.json?orderBy="username"&equalTo="${username}"`
    );
    console.log(userCheckResponse)
    if (userCheckResponse.data && Object.keys(userCheckResponse.data).length > 0) {
      return { status: false, message: 'Username is already taken. Please choose a different one. User registered successfully' };
    }
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseAPI}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const { idToken, localId } = response.data;

    const userData = {
      email,
      username: username.toLowerCase(),
      name: '',
      profilePic: '',
      bio: '',
      createdAt: new Date().toISOString(),
      posts: {},
      followers: {},
      following: {},
    };

    await axios.put(
      `${firebaseDatabaseURL}/users/${localId}.json?auth=${idToken}`,
      userData
    );

    return { status: true, message: 'User registered and data stored successfully', userId: localId };
  } catch (error: any) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || 'An error occurred during sign-up';
      return { status: false, message: errorMessage };
    } else {
      return { status: false, message: 'An unknown error occurred during sign-up' };
    }
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPI}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    await AsyncStorage.setItem('idToken', response?.data?.idToken);
    return { status: true, data: response.data }
  } catch (error: any) {
    console.error("Sign-in error:", error);
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || 'An error occurred during sign-in';
      return { status: false, message: errorMessage === 'INVALID_LOGIN_CREDENTIALS' ? 'Invalid Email and Password.' : errorMessage }
    } else {
      return { status: false, message: 'An unknown error occurred during sign-in' };
    }
  }
};

export const getUserData = async () => {
  try {
    const idToken = await AsyncStorage.getItem('idToken');
    if (!idToken) {
      throw new Error("Token not found");
    }
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseAPI}`,
      {
        idToken,
      }
    );
    const userData = response.data.users[0];
    if (!userData) {
      throw new Error("Invalid token or user not found");
    }
    const results = await getUserFullData(userData?.localId)
    if (!results?.status) {
      throw new Error("User data retrieval failed");
    }

    const data = { ...results.data, id: userData?.localId, idToken }
    return data
  } catch (error: any) {
    throw new Error("Not logged in")
  }
};


export const getUserFullData = async (userId: string) => {
  try {
    const idToken = await AsyncStorage.getItem('idToken');
    const response = await axios.get(
      `${firebaseDatabaseURL}/users/${userId}.json`
    );
    if (response.data) {
      const userData = { ...response.data, id: userId, idToken };
      return {
        status: true,
        message: 'User data fetched successfully',
        data: userData,
      };
    } else {
      return {
        status: false,
        message: 'User data not found',
      };
    }
  } catch (error) {
    throw new Error("Error in User Data")
  }
};
