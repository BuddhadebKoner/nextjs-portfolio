"use client";

import { HeroParallax } from '@/components/ui/hero-parallax';

const products = [
   {
      title: "Steps of qr attender",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/kgpm4n0jvdh8rgwzeucw.webp",
   },
   {
      title: "Feedback",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/tchgahuz0hew7to3jj9g.webp",
   },
   {
      title: "Code comm coding club",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/jnl2olsam2rep7scmjqa.webp",
   },
   {
      title: "qr Attender website",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/lfgfndl2zl1sucyxthm3.webp",
   },
   {
      title: "Login Page of codecomm",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/zxg2yjd8giobziktv2qy.webp",
   },
   {
      title: "Portfolio Buddhadeb Koner",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/pqz2raep5j9f0sxnj5mh.webp",
   },
   {
      title: "Ur buddhadeb Wbeiste Dark mode",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/whyhko7inpujcofyzy4x.webp",
   },
   {
      title: "Cards Ur buddhadeb Light mode",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/a58zr5ko85vyhuz6f2du.webp",
   },
   {
      title: "3D Cards for ur Buddhadeb",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/glgjbjzxgk02qfis4bfv.webp",
   },
   {
      title: "Kochu Media",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/bow8wm0i1r8twj8hcwhj.webp",
   },
   {
      title: "Auth page kochu media",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/mvqmmgt4nwb52nhcrdzr.webp",
   },
   {
      title: "Kochu Media explore page",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/h3oalt1fbvrobotvz0gp.webp",
   },
   {
      title: "QR",
      link: "https://gomoonbeam.com",
      thumbnail: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/enyrc44qd9yn4hennjzi.webp",
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