"use client";

import InstaCard from "@/components/shared/InstaCard";
import GitHubCard from "../components/shared/GitHubCard";
import LinkedinCard from "../components/shared/LinkedinCard";
import TwitterCard from "../components/shared/TwitterCard";

const Home = () => {

   return (
      <>
         <div className="w-screen h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-5 md:px-10 lg:px-[20vw] py-10 flex flex-col gap-10">
            {/* github card */}
            <GitHubCard />
            {/* linkedin */}
            <LinkedinCard />
            {/*tweeter*/}
            <TwitterCard />
            {/* insta card */}
            <InstaCard />
         </div>
      </>
   )
}

export default Home