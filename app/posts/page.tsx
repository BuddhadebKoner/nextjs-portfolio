"use client";

import PostCard from "@/components/shared/PostCard";
import { useGetPosts } from "@/lib/react-query/queriesAndMutation";

export default function Page() {
  const {
    data,
    error,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPosts();

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  // Loading state when first fetching posts
  if (isLoading) {
    return (
      <section className="w-full h-fit dark:bg-darkprimaryBg bg-lightprimaryBg flex justify-center items-center py-10">
        <p>Loading posts...</p>
      </section>
    );
  }

  return (
    <section className="w-full h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-0 md:px-10 lg:px-[20vw] py-10 flex flex-col items-center gap-10">
      {error && (
        <div className="text-center">
          <p className="text-red-500 mb-2">
            {error instanceof Error ? error.message : "An unexpected error occurred."}
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )}

      {posts.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-10">
          {posts.map((post, index) => (
            <PostCard
              key={post?._id || index}
              title={post?.title}
              description={post?.description}
              image={post?.image}
              link={post?.link}
              profilelink={post?.profilelink}
              postdate={post?.postdate}
            />
          ))}
        </div>
      ) : (
        <p>No posts available.</p>
      )}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </section>
  );
}
