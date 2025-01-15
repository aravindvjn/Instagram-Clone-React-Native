export type PathType = {
    path: PathValues;
    setPath: (path: PathValues) => void;
}
export type PathValues = 'Followers' | 'Following'

export type SingleUserType = {
    username: string,
    profilePic: string,
    name: string;
    userId?: string;
}