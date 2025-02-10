"use client";

import React from "react";

const Page = () => {
  const details = [
    {
      title: "Profile",
      content: (
        <div className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <p><strong>Portfolio:</strong> Buddhadeb Koner</p>
          <p><strong>GitHub:</strong> Check profile</p>
          <p><strong>Location:</strong> Abhirampur, Bardhaman, 713144</p>
          <p><strong>Phone:</strong> +91 9339813998</p>
          <p><strong>Email:</strong> iambuddhadebkoner@gmail.com</p>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>MERN Stack: MongoDB, Express.js, React, Node.js</li>
          <li>Programming: C, C++, JavaScript, Python</li>
          <li>Advanced Animation: GSAP, Motion, Three.js</li>
          <li>Content Creation: YouTube, Editing, Figma</li>
          <li>Other: Appwrite, Postman, Cloud Services</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <article>
            <h3 className="font-semibold">NEXGEN / Junior Web Developer</h3>
            <p className="text-sm">January 2024 - Present, Durgapur</p>
            <ul className="list-disc list-inside text-sm">
              <li>MERN stack development & deployment</li>
              <li>GSAP, Motion, Three.js animations</li>
              <li>Industry-grade deployments</li>
            </ul>
          </article>
          <article>
            <h3 className="font-semibold">Reimagine Hackathon / Web Developer</h3>
            <p className="text-sm">July 2024 - Present, Durgapur</p>
            <ul className="list-disc list-inside text-sm">
              <li>BGMI website clone with premium UI</li>
              <li>Advanced frontend animations</li>
            </ul>
          </article>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <article>
            <h3 className="font-semibold">MAKAUT / B.Tech in CSE</h3>
            <p className="text-sm">September 2022 - Present, SETGOI</p>
            <ul className="list-disc list-inside text-sm">
              <li>Currently in 3rd year, GPA: 7.2/10</li>
              <li>Software development & DSA</li>
            </ul>
          </article>
          <article>
            <h3 className="font-semibold">EAHS / Matriculation & Post-Matriculation</h3>
            <p className="text-sm">2019 - 2022, Abhirampur</p>
            <ul className="list-disc list-inside text-sm">
              <li>12th: 80% (Science Focus)</li>
              <li>10th: 80%</li>
            </ul>
          </article>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Services-based MERN WebApp:</strong> iShowDevs
        </p>
      ),
    },
  ];


  return (
    <section className="w-screen h-fit dark:bg-darkprimaryBg bg-lightprimaryBg px-5 md:px-10 lg:px-[20vw] py-10 flex flex-col gap-10">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Buddhadeb Koner</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Creative Director | Developer</p>
      </header>

      <section className="mt-8 space-y-6">
        {details.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col justify-start items-start w-full md:w-1/3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-gray-50 dark:bg-transparent p-6">
              <p>ㅡ</p>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">{item.title}</h2>
            </div>
            <div className="w-full md:w-2/3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-transparent p-6">
              {item.content}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Page;
