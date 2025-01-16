import { useQuery } from "@tanstack/react-query"
import { fetchMessages } from "../global/functions/messageRequests"

export const useMessages = (user1_id: string, user2_id: string) => {
    return useQuery({
        queryKey: ['messages', user1_id, user2_id],
        queryFn: () => fetchMessages(user1_id, user2_id),
        refetchInterval: 10000
    })
}