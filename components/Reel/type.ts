export interface ReelType {
    reel_id?: number;
    user?: {
        id?: number;
        username?: string;
        profile_url?: string;
    };
    uri?: string;
    caption?: string
}