export async function getAllBlogs({ pageParam = 1, limit = 3 }) {
   try {
      const res = await fetch(`/api/posts?page=${pageParam}&limit=${limit}`);

      if (!res.ok) throw new Error("Internal server error");

      return await res.json();

   } catch (error) {
      console.error(error);
      return { posts: [], totalPosts: 0, page: pageParam, totalPages: 0 };
   }
}