"use client";

const Resume = () => {
   const details = [
      {
         title: "Profile",
         content: (
            <div className="list-disc list-inside text-gray-700 dark:text-gray-300">
               <p><strong>Portfolio:</strong> Buddhadeb Koner</p>
               <p><strong>GitHub:</strong>
                  <a
                     className="text-blue-500 dark:text-blue-400"
                     href="https://github.com" target="_blank">Check profile</a></p>
               <p><strong>Location:</strong> Abhirampur, Bardhaman, 713144</p>
               <p><strong>Email:</strong> iambuddhadebkoner@gmail.com</p>
            </div>
         ),
      },
      {
         title: "Skills",
         content: (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
               <li>Web Dev: Next Js </li>
               <li>Programming: JavaScript</li>
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
                  <h3 className="font-semibold">Rajis Lab</h3>
                  <p className="text-sm">January 2024 - Present, Durgapur</p>
                  <ul className="list-disc list-inside text-sm">
                     <li>Web devaloper</li>
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
               </article>
            </div>
         ),
      },
      {
         title: "Projects",
         content: (
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
               <p className="text-gray-700 dark:text-gray-300">
                  <strong>Qr Attender Website : </strong>
                  <a
                     className="text-blue-500 dark:text-blue-400"
                     href="https://qrattender.rajislab.com/" target="_blank" >Qr Attender</a>
               </p>
               <p className="text-gray-700 dark:text-gray-300">
                  <strong>Saas Website : </strong>
                  <a
                     className="text-blue-500 dark:text-blue-400"
                     href="https://ur-buddhadeb.vercel.app/" target="_blank" >Ur Buddhadeb</a>
               </p>
               <p className="text-gray-700 dark:text-gray-300">
                  <strong>CodeComm Coding Club Website : </strong>
                  <a
                     className="text-blue-500 dark:text-blue-400"
                     href="https://code-com-sepia.vercel.app//" target="_blank">Buddhadeb Koner</a>
               </p>
               <p className="text-gray-700 dark:text-gray-300">
                  <strong>Social Media App : </strong>
                  <a
                     className="text-blue-500 dark:text-blue-400"
                     href="https://kochugram-com.vercel.app//" target="_blank">Kochu Media</a>
               </p>
            </div>
         ),
      },
   ];


   return (
      <>
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
      </>
   );
};

export default Resume;
