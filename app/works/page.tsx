"use client";

import { HeroParallax } from '@/components/ui/hero-parallax';

const products = [
   {
      title: "Steps of qr attender",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites1.webp",
   },
   {
      title: "Feedback",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites2.webp",
   },
   {
      title: "Code comm coding club",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites3.webp",
   },
   {
      title: "qr Attender website",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites4.webp",
   },
   {
      title: "Login Page of codecomm",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites5.webp",
   },
   {
      title: "Portfolio Buddhadeb Koner",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites6.webp",
   },
   {
      title: "Ur buddhadeb Wbeiste Dark mode",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites7.webp",
   },
   {
      title: "Cards Ur buddhadeb Light mode",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites8.webp",
   },
   {
      title: "3D Cards for ur Buddhadeb",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites9.webp",
   },
   {
      title: "Kochu Media",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites10.webp",
   },
   {
      title: "Auth page kochu media",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites11.webp",
   },
   {
      title: "Kochu Media explore page",
      link: "https://gomoonbeam.com",
      thumbnail: "/works/websites12.webp",
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