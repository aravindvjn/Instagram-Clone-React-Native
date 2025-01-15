import { useQuery } from "@tanstack/react-query"
import { fetchFollowers, fetchFollowing } from "../global/functions/followingOperations"

export const useFollowers = (id: string) => {
    return useQuery({
        queryKey: ["followers"],
        queryFn: () => fetchFollowers(id)
    })
}
export const useFollowing = (id: string) => {
    return useQuery({
        queryKey: ["following"],
        queryFn: () => fetchFollowing(id)
    })
}