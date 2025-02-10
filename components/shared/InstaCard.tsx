"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type InstagramData = {
   avatar_url: string;
   name: string;
   username: string;
   profile_url: string;
   following: number;
   followers: number;
   bio: string;
};

const instagramData: InstagramData = {
   avatar_url: 'https://instagram.fccu19-1.fna.fbcdn.net/v/t51.2885-19/472158728_1376410446655424_8198026343894656301_n.jpg?_nc_ht=instagram.fccu19-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AGlOdbshyRYYD671fQ1Uts5WU-pOklWCG1asEH1cBnkdbZkr_nSWIdqcGrOkRx36uA&_nc_ohc=8q5ZOhaanX8Q7kNvgGcRdWO&_nc_gid=6a8549374c9a4f95a9a0ba406bce951a&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYCNS1yi8baoEv2IoKTxCHVYy0_e4v5o4CMOztS0v675zA&oe=67AF533E&_nc_sid=22de04',
   name: 'Buddhadeb Koner',
   username: 'buddhadeb_koner',
   profile_url: 'https://www.instagram.com/buddhadeb_koner/',
   following: 197,
   followers: 243,
   bio: 'Photographer 📸\nTech Enthusiast 💻',
};

const hardcodedPosts = [
   {
      id: 1,
      image_url: 'https://via.placeholder.com/300',
      caption: 'A glimpse of my day.',
      timestamp: '2025-02-07T10:00:00Z',
      likes: 120,
      comments: 15,
   },
   {
      id: 2,
      image_url: 'https://via.placeholder.com/300',
      caption: 'Exploring new horizons.',
      timestamp: '2025-02-06T14:30:00Z',
      likes: 95,
      comments: 20,
   },
   {
      id: 3,
      image_url: 'https://via.placeholder.com/300',
      caption: 'Life in colors.',
      timestamp: '2025-02-05T09:15:00Z',
      likes: 180,
      comments: 25,
   },
];

const InstagramCard = () => {
   return (
      <div className="w-full flex flex-col border-2 border-gray-300 dark:border-gray-700 rounded-lg p-5 gap-6 bg-white dark:bg-black">
         <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            {/* Profile Section */}
            <div className="w-full h-full md:w-1/3 flex flex-col items-center ">
               <Image
                  src={instagramData.avatar_url}
                  alt="Instagram Avatar"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
               />
               <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mt-3">
                  {instagramData.name}
               </h1>
               <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  @{instagramData.username}
               </p>
               <p className="w-full text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                  {instagramData.bio.split('\n').map((line, index) => (
                     <span key={index}>
                        {line}
                        <br />
                     </span>
                  ))}
               </p>

               <div className="flex mt-3 gap-5">
                  <Link
                     href={`${instagramData.profile_url}/followers`}
                     className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                     {instagramData.followers} Followers
                  </Link>
                  <Link
                     href={`${instagramData.profile_url}/following`}
                     className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                     {instagramData.following} Following
                  </Link>
               </div>

               <a
                  href={instagramData.profile_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 mt-3"
               >
                  Follow
               </a>
            </div>

            {/* Posts Section */}
            <div className="flex flex-col w-full md:w-2/3 h-auto md:h-[30rem] px-3 pb-5 overflow-auto">
               <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center md:text-left">
                  Popular Posts
               </h1>
               {hardcodedPosts.map((post) => (
                  <div
                     key={post.id}
                     className="border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-md bg-gray-50 dark:bg-gray-950 cursor-pointer my-3 flex flex-col items-center"
                  >
                     <Image
                        src={post.image_url}
                        alt="Post Image"
                        width={300}
                        height={300}
                        className="rounded-md object-cover"
                     />
                     <p className="text-md text-gray-800 dark:text-gray-200 mt-2">
                        {post.caption}
                     </p>

                     <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400 mt-2 w-full">
                        <p>
                           {new Date(post.timestamp).toLocaleDateString("en-IN", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                           })}
                        </p>
                        <div className="flex gap-3">
                           <button className="flex items-center gap-1 hover:text-pink-500">
                              ❤️ <span>{post.likes}</span>
                           </button>
                           <button className="flex items-center gap-1 hover:text-pink-500">
                              💬 <span>{post.comments}</span>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   );
};

export default InstagramCard;