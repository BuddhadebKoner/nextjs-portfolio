"use client";

import PostCard from "@/components/shared/PostCard";
import { useGetPosts } from "@/lib/react-query/queriesAndMutation";

export default function Page() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPosts();

  const posts = data?.pages.flatMap((page) => page.posts) || [];
  console.log(posts);

  return (
    <section className="w-full h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-0 md:px-10 lg:px-[20vw] py-10 flex flex-col items-center gap-10">
      {error && (
        <p className="text-red-500">
          {error instanceof Error ? error.message : "An unexpected error occurred."}
        </p>
      )}

      <div className="flex flex-wrap justify-center items-center gap-10">
        {posts.map((post, index) => (
          <PostCard
            key={post?._id || index}
            title={post?.title}
            description={post?.description}
            image={post?.image}
            slug={post?.slug} // Corrected property name from `slag` to `slug`
          />
        ))}
      </div>

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
