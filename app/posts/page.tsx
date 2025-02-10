"use client";

import PostCard from "@/components/shared/PostCard";

const page = () => {
  return (
    <>
      <section className="w-full h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-0 md:px-10 lg:px-[20vw] py-10 flex flex-wrap justify-center items-center gap-10">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}

          />
        ))}
      </section>
    </>
  )
}

export default page


const posts = [
  {
    title: "Post Title",
    description: "Post Description",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Read More",
    buttonLink: "/post",
  },
  {
    title: "Post Title",
    description: "Post Description",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Read More",
    buttonLink: "/post",
  },
  {
    title: "Post Title",
    description: "Post Description",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Read More",
    buttonLink: "/post",
  },
]