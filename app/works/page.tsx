"use client";

import { HeroParallax } from '@/components/ui/hero-parallax';

const products = [
   {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
   },
];

const page = () => {
   return (
      <>
         <HeroParallax products={products} />
      </>
   );
};

export default page;