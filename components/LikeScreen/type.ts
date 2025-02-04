import { Dispatch, SetStateAction } from "react"
export type PathType = "Following" | 'You';
export type HeaderPathtype = {
    path: PathType;
    setPath: Dispatch<SetStateAction<PathType>>;
}
export type FollowStatusType = 'Following' | 'Requested' | 'Follow Back' | 'Follow' | 'Message' | 'Accept';
export interface FollowRequestType {
    username?: string,
    profile_url?: string;
    followStatus?: FollowStatusType,
    time?: string
    userData?: UserDataType,
    followerId?: string;
    currentUserId?: string;
}

export type UserDataType = {
    id?: string,
    name?: string,
    profilePic?: string,
    username?: string
}