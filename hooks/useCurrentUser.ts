import { useQuery } from "@tanstack/react-query";
import { UserType } from "../components/Profile/type";
import { getUserData } from "../global/store/auth";

export const useCurrentUser = () => {
    return useQuery<UserType>({
        queryKey: ["user"],
        queryFn: getUserData,
    });
}

