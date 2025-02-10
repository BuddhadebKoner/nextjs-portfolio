import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { getAllBlogs } from "../api-calls/post-api-calls";

const GITHUB_API_URL = "https://api.github.com/users/BuddhadebKoner";

// Custom hook to fetch GitHub data
export const useGetGitHubData = () => {
   return useQuery({
      queryKey: ["github-data"],
      queryFn: async () => {
         const res = await fetch(GITHUB_API_URL);
         if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
         return res.json();
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
   });
};

// get all posts 
export const useGetPosts = () => {
   return useInfiniteQuery({
      queryKey: [QUERY_KEYS.GET_POSTS],
      queryFn: ({ pageParam = 1 }) => getAllBlogs({ pageParam }),
      getNextPageParam: (lastPage) => {
         if (lastPage.page >= lastPage.totalPages) return null;
         return lastPage.page + 1;
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
   });
}
