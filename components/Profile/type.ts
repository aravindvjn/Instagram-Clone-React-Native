import { PostTypes } from "../Home/type";

export interface UserType {
    id?: string;
    username?: string;
    name?: string;
    noPosts?: number;
    followers?: number;
    following?: number;
    isPrivate?: boolean;
    bio?: string;
    currentUser?: UserType;
    createdAt?: string;
    email?: string;
    profilePic?: string;
    idToken?: string;
    posts?: PostTypes[] | undefined
}
