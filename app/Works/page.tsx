import { HeroParallax } from '@/components/ui/hero-parallax';
import React from 'react'

const page = () => {
  return (
    <>
      <HeroParallax products={products} />
    </>
  )
}

export default page


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
];