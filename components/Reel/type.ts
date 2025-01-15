
export interface ReelType {
    reel_id?: number;
    user?: {
        id?: string;
        username?: string;
        profilePic?: string;
    };
    uri?: string;
    caption?: string
}

export interface ReelTypes {
    caption?: string;
    createdAt?: string;
    userId?: string;
    videoUrl?: string
    reelId?: string;
    isActive?: boolean;
    username?: string;
    profilePic?: string;
}