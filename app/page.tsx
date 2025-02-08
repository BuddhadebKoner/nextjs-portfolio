"use client";

import GitHubCard from "./components/GitHubCard";
import TwitterCard from "./components/TwitterCard";

const page = () => {

  return (
    <div className="w-screen h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-5 md:px-10 lg:px-[20vw] py-10 flex flex-col gap-10">
      {/* github card */}
      <GitHubCard />
      {/* x card */}
      <TwitterCard />
    </div>
  )
}

export default page