import axios from "axios";
import { firebaseDatabaseURL } from "../global/store/auth";
import { useQuery } from "@tanstack/react-query";

const fetchRandomReels = async () => {
    const results = await axios.get(
        `${firebaseDatabaseURL}/reels.json?orderBy="createdAt"&limitToFirst=10`
    );

    if (results.data) {
        const reels = results.data;
        const allReelsWithData: any = [];

        Object.keys(reels).forEach(key => {
            const reel = reels[key];
            if (reel.user_id) {
                allReelsWithData.push({
                    reelId: key,
                    userId: reel.user_id,
                    caption: reel.caption,
                    createdAt: reel.createdAt,
                    videoUrl: reel.video_url,
                });
            }
        });
        const randomReels = allReelsWithData.sort(() => Math.random() - 0.5);
        return randomReels || []
    }
};


export const useRandomReels = () => {
    return useQuery({
        queryKey: ['randomReels'],
        queryFn: fetchRandomReels,
        staleTime: 1000 * 60 * 5,
    });
}