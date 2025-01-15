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