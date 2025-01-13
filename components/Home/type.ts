export interface PostTypes {
    id: number;
    profile_url?: string;
    username?: string;
    uri?: string;
    caption?: string;
    likes_count?: number;
    locations?: string
}
export interface StoryTypes {
    profile_url?: string;
    username?: string;
    addStory?: boolean;

}