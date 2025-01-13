export interface UserType {
    id?: number;
    username?: string;
    name?: string;
    noPosts?: number;
    followers?: number;
    following?: number;
    isPrivate?: boolean;
    profile_url?: string;
    bio?: string;
    currentUser?: UserType;
}
