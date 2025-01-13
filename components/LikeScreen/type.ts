import { Dispatch, SetStateAction } from "react"
export type PathType = "Following" | 'You';
export type HeaderPathtype = {
    path: PathType;
    setPath: Dispatch<SetStateAction<PathType>>;
}
export type FollowStatusType = 'Following' | 'Requested' | 'Follow Back' | 'Follow' | 'Message' | 'Accept';
export interface FollowRequestType {
    username: string,
    profile_url?: string;
    followStatus?: FollowRequestType,
    time?: string
}