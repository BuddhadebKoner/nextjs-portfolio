import Image from "next/image";
import Link from "next/link";
import { useGetGitHubData } from "@/lib/react-query/queriesAndMutation";

type RepoData = {
   id: number;
   name: string;
   html_url: string;
   stargazers_count: number;
   forks_count: number;
};

const hardcodedRepos: RepoData[] = [
   {
      id: 1,
      name: "Rajis-Lab",
      html_url: "https://github.com/BuddhadebKoner/Rajis-Lab",
      stargazers_count: 50,
      forks_count: 10,
   },
   {
      id: 2,
      name: "ur-buddhadeb",
      html_url: "https://github.com/BuddhadebKoner/ur-buddhadeb",
      stargazers_count: 35,
      forks_count: 8,
   },
   {
      id: 3,
      name: "qrAttender.com",
      html_url: "https://github.com/BuddhadebKoner/qrAttender.com",
      stargazers_count: 42,
      forks_count: 15,
   },
   {
      id: 4,
      name: "kochugram.com",
      html_url: "https://github.com/BuddhadebKoner/kochugram.com",
      stargazers_count: 42,
      forks_count: 15,
   },
   {
      id: 5,
      name: "qrAttender.com",
      html_url: "https://github.com/BuddhadebKoner/qrAttender.com",
      stargazers_count: 42,
      forks_count: 15,
   },
   {
      id: 6,
      name: "kochugram.com",
      html_url: "https://github.com/BuddhadebKoner/kochugram.com",
      stargazers_count: 42,
      forks_count: 15,
   },
];

const GitHubCard = () => {
   const { data: githubData, isError, error } = useGetGitHubData();
   if (isError) return <p>Error: {(error as Error).message}</p>;

   return (
      <div className="w-full h-fit flex flex-col border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#24292e] rounded-lg p-5 gap-2">
         {error ? (
            <div className="w-full flex flex-col items-center text-center text-red-500">
               <p className="text-lg font-semibold">Failed to load GitHub data.</p>
               <p className="text-sm">{error}</p>
            </div>
         ) : (
            <>
               <div className="w-full flex flex-col flex-wrap md:flex-row gap-10">
                  {/* Profile Section */}
                  <div className="w-full md:w-fit flex flex-col items-center">
                     <Image
                        src={githubData?.avatar_url || "/default-avatar.png"}
                        alt="GitHub Avatar"
                        width={150}
                        height={150}
                        className="rounded-full"
                     />

                     <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-3">
                        {githubData?.name || "Full Name"}
                     </h1>

                     <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        @{githubData?.login || "username"} {" . "} he/him
                     </p>

                     <div className="flex mt-3 gap-3 justify-center items-center">
                        <a
                           href={githubData?.html_url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#2ea44f] text-white px-4 py-2 rounded-md transition-transform hover:scale-105"
                        >
                           Follow
                        </a>

                        <iframe
                           src="https://github.com/sponsors/BuddhadebKoner/button"
                           title="Sponsor BuddhadebKoner"
                           height="32"
                           width="114"
                           className="border-0 rounded-md mt-0"
                        ></iframe>
                     </div>

                     <div className="flex mt-3 gap-5">
                        <Link
                           href={"https://github.com/BuddhadebKoner?tab=followers"}
                           className="text-sm text-gray-700 dark:text-gray-300"
                        >
                           {githubData?.followers} followers
                        </Link>
                        <Link
                           href={"https://github.com/BuddhadebKoner?tab=following"}
                           className="text-sm text-gray-700 dark:text-gray-300"
                        >
                           {githubData?.following} following
                        </Link>
                     </div>
                  </div>

                  {/* Repositories Section */}
                  <div className="w-full md:w-2/3 mt-5 md:mt-0 flex flex-col gap-4">
                     <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        ⭐ Top Repositories
                     </h2>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {hardcodedRepos.map((repo) => (
                           <a
                              key={repo.id}
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border p-4 dark:border-gray-700 border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-105 bg-white dark:bg-[#24292e]"
                           >
                              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                                 {repo.name}
                              </h3>
                              <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                                 ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                              </p>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Contribution Chart */}
               <div className="w-full mt-5">
                  <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                     898 contributions in 2024
                  </h1>
                  <Image
                     className="w-full max-w-full rounded-md p-5 bg-white dark:bg-[#24292e]"
                     src="https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285718/next-portfolio/a1d6ys2ck4drsggz5p43.png"
                     alt="Buddhadeb Koner's GitHub chart"
                     width={800}
                     height={200}
                  />
               </div>
            </>
         )}
      </div>
   );
};

export default GitHubCard;
