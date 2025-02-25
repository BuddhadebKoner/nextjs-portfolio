"use client";

import { HeroParallax } from '@/components/ui/hero-parallax';

const products = [
   {
      title: "KochuGram - QR Attender Steps",
      link: "https://kochugram-com.vercel.app",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/kgpm4n0jvdh8rgwzeucw.webp",
   },
   {
      title: "KochuGram - User Feedback System",
      link: "https://kochugram-com.vercel.app",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/tchgahuz0hew7to3jj9g.webp",
   },
   {
      title: "Profesonal - Product Landing Page",
      link: "https://ur-buddhadeb.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/jnl2olsam2rep7scmjqa.webp",
   },
   {
      title: "CodeComm - Login Page",
      link: "https://code-com-sepia.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/zxg2yjd8giobziktv2qy.webp",
   },
   {
      title: "Buddhadeb Koner - Portfolio Website",
      link: "https://explorebuddhadeb.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/pqz2raep5j9f0sxnj5mh.webp",
   },
   {
      title: "UR Buddhadeb - Dark Mode Experience",
      link: "https://ur-buddhadeb.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/whyhko7inpujcofyzy4x.webp",
   },
   {
      title: "UR Buddhadeb - Light Mode Cards",
      link: "https://ur-buddhadeb.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/a58zr5ko85vyhuz6f2du.webp",
   },
   {
      title: "UR Buddhadeb - 3D Interactive Cards",
      link: "https://ur-buddhadeb.vercel.app/",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/glgjbjzxgk02qfis4bfv.webp",
   },
   {
      title: "Kochu Media - Digital Content Hub",
      link: "https://kochugram-com.vercel.app",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/bow8wm0i1r8twj8hcwhj.webp",
   },
   {
      title: "Kochu Media - Authentication Page",
      link: "https://kochugram-com.vercel.app",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/mvqmmgt4nwb52nhcrdzr.webp",
   },
   {
      title: "Kochu Media - Explore Page",
      link: "https://kochugram-com.vercel.app",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/h3oalt1fbvrobotvz0gp.webp",
   },
];



const Works = () => {
   return (
      <>
         <HeroParallax products={products} />
      </>
   );
};

export default Works;