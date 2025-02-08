import { useQuery } from "@tanstack/react-query";

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
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
      refetchOnWindowFocus: false, // Disable refetching when window is focused
   });
};