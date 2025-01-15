export interface PostTypes {
    post_id?: string;
    id?: string;
    profilePic?: string;
    username?: string;
    uri?: string;
    caption?: string;
    likes_count?: number;
    locations?: string;
    liked_users?: string[],
    createdAt?: string;
}
export interface StoryTypes {
    profile_url?: string;
    username?: string;
    addStory?: boolean;

}