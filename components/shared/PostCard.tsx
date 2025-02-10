"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const PostCard = ({
   title,
   description,
   image,
}: {
   title: string;
   description: string;
   image: string;
}) => {

   // post link form title 
   const postLink = `/posts/${title.toLowerCase().split(" ").join("-")}`;

   return (
      <CardContainer className="inter-var group">
         <Link href={postLink} passHref>
            <CardBody className="bg-gray-50 relative dark:bg-black border border-black/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
               <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
               >
                  {title}
               </CardItem>
               <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
               >
                  {description}
               </CardItem>
               <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative">
                     <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl"
                        alt="thumbnail"
                     />
                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <span className="text-white text-lg font-semibold">
                           Read More →
                        </span>
                     </div>
                  </div>
               </CardItem>
            </CardBody>
         </Link>
      </CardContainer>
   );
};

export default PostCard;