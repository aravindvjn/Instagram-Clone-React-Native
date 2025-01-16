import { useQuery } from "@tanstack/react-query";
import { fetchChatsForUser } from "../global/functions/messageRequests";

export const useChatList = (userId: string) => {
  return useQuery({
    queryKey: ["chatList", userId],
    queryFn: () => fetchChatsForUser(userId),
  });
};
