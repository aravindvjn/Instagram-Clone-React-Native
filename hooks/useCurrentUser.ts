import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserType } from "../components/Profile/type";

export const useCurrentUser = () => {
    const queryClient = useQueryClient()
    return useQuery<UserType>({
        queryKey: ["user"],
        enabled: false,
        initialData: () => {
            return queryClient.getQueryData<UserType>(["user"]);
        },
    });
}