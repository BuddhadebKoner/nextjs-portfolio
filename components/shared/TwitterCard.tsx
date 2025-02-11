"use client";

import Image from 'next/image';
import Link from 'next/link';

type TwitterData = {
   avatar_url: string;
   name: string;
   username: string;
   profile_url: string;
   following: number;
   followers: number;
   bio: string;
};

const twitterData: TwitterData = {
   avatar_url: '/profiles/x.jpg',
   name: 'Buddhadeb Koner',
   username: 'buddhadeb_koner',
   profile_url: 'https://x.com/buddhadeb_koner',
   following: 80,
   followers: 23,
   bio: 'Programmer 🇮🇳 \nTech Lead at @codecomm_setgoi \n web developer at @rajis_lab',
};

const hardcodedTweets = [
   {
      id: 1,
      user: {
         name: 'Buddhadeb Koner',
         handle: '@buddhadeb_koner',
      },
      content:
         "Caffeine for my code, beats for my brain, and a plant to remind me I'm still alive. 🌱☕💻🎶 If bugs had a fear, it’d be me. ",
      timestamp: '2025-02-07T10:00:00Z',
      replies: 12,
      retweets: 25,
      likes: 150,
   },
   {
      id: 2,
      user: {
         name: 'Buddhadeb Koner',
         handle: '@buddhadeb_koner',
      },
      content:
         "Caffeine for my code, beats for my brain, and a plant to remind me I'm still alive. 🌱☕💻🎶 If bugs had a fear, it’d be me. ",
      timestamp: '2025-02-07T10:00:00Z',
      replies: 12,
      retweets: 25,
      likes: 150,
   },
   {
      id: 3,
      user: {
         name: 'Buddhadeb Koner',
         handle: '@buddhadeb_koner',
      },
      content:
         "Caffeine for my code, beats for my brain, and a plant to remind me I'm still alive. 🌱☕💻🎶 If bugs had a fear, it’d be me. ",
      timestamp: '2025-02-07T10:00:00Z',
      replies: 12,
      retweets: 25,
      likes: 150,
   },
   {
      id: 4,
      user: {
         name: 'Buddhadeb Koner',
         handle: '@buddhadeb_koner',
      },
      content:
         "Caffeine for my code, beats for my brain, and a plant to remind me I'm still alive. 🌱☕💻🎶 If bugs had a fear, it’d be me. ",
      timestamp: '2025-02-07T10:00:00Z',
      replies: 12,
      retweets: 25,
      likes: 150,
   },
];

const TwitterCard = () => {
   return (
      <div className="w-full flex flex-col border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-5 gap-6">
         <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            {/* Tweets Section */}
            <div className="flex flex-col w-full md:w-2/3 h-auto md:h-[30rem] px-3 pb-5 overflow-auto">
               <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center md:text-left">
                  Latest Tweets
               </h1>

               {hardcodedTweets.map((tweet) => (
                  <div
                     key={tweet.id}
                     className="border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 cursor-pointer my-3"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                           {tweet.user.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                           {tweet.user.handle}
                        </p>
                     </div>
                     <p className="text-md text-gray-800 dark:text-gray-200 mb-3">
                        {tweet.content}
                     </p>

                     <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                        <p>
                           {new Date(tweet.timestamp).toLocaleDateString("en-IN", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                           })}
                        </p>
                        <div className="flex gap-3">
                           <button className="flex items-center gap-1 hover:text-[#1DA1F2]">
                              💬 <span>{tweet.replies}</span>
                           </button>
                           <button className="flex items-center gap-1 hover:text-[#1DA1F2]">
                              🔁 <span>{tweet.retweets}</span>
                           </button>
                           <button className="flex items-center gap-1 hover:text-red-500">
                              ❤️ <span>{tweet.likes}</span>
                           </button>
                           <button className="flex items-center gap-1 hover:text-[#1DA1F2]">
                              🔗 <span>Share</span>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Profile Section */}
            <div className="w-full h-full md:w-1/3 flex flex-col items-center ">
               <Image
                  src={twitterData.avatar_url}
                  alt="Twitter Avatar"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
               />
               <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mt-3">
                  {twitterData.name}
               </h1>
               <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  @{twitterData.username}
               </p>
               <p className="w-full text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                  {
                     twitterData.bio.split('\n').map((line, index) => (
                        <span key={index}>
                           {line}
                           <br />
                        </span>
                     ))
                  }
               </p>

               <div className="flex mt-3 gap-5">
                  <Link
                     href={"https://x.com/buddhadeb_koner/followers"}
                     className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                     {twitterData.followers} Followers
                  </Link>
                  <Link
                     href={"https://x.com/buddhadeb_koner/following"}
                     className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                     {twitterData.following} Following
                  </Link>
               </div>

               <a
                  href={twitterData.profile_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[#1DA1F2] text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 mt-3"
               >
                  Follow
               </a>
            </div>
         </div>
      </div>
   );
};

export default TwitterCard;
