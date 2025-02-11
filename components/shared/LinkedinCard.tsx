"use client";

import Image from 'next/image';
import Link from 'next/link';
import { LinkPreview } from "@/components/ui/link-preview";

const demoProjects = [
   {
      id: 1,
      name: "NextGen",
      author: "Buddhadeb Koner",
      username: "@buddhadeb_koner",
      description: "A futuristic web application connecting developers with clients seamlessly.",
      techStack: ["React", "Node.js", "MongoDB"],
      projectUrl: "https://nextgen.dev",
      timestamp: "2025-02-07T10:00:00Z",
   },
   {
      id: 2,
      name: "Duolingo Clone",
      author: "Buddhadeb Koner",
      username: "@buddhadeb_koner",
      description: "A language learning app built using JavaScript and modern web technologies.",
      techStack: ["JavaScript", "Express", "MongoDB"],
      projectUrl: "https://duoclone.dev",
      timestamp: "2025-01-20T08:30:00Z",
   },
];

const LinkedinCard = () => {
   return (
      <div className="w-full overflow-hidden min-h-[50rem] lg:min-h-[30rem] flex flex-col border border-blue-200 dark:border-blue-700 bg-white dark:bg-[#183049] rounded-xl p-6 gap-6 shadow-lg">
         <div className="w-full flex flex-col md:flex-row gap-8">
            {/* Profile Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
               <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQFvBnHtlMGOXw/profile-displayphoto-shrink_800_800/B56ZQ8puB3GsAc-/0/1736184358184?e=1744848000&v=beta&t=WvVtNt6PPwm-JJF2ecqVCsYcTQs5mOxIHSQXYgTlYLM"
                  alt="Buddhadeb Koner"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-blue-500 shadow-md"
               />

               <h1 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                  Buddhadeb Koner
               </h1>

               <p className="text-sm text-gray-700 dark:text-gray-200 text-center mt-2">
                  SDE 0 | Tech Lead at CodeComm <br /> Web Developer at RajisLab <br /> NEXT.js | SETGOI CSE-26
               </p>

               <div className="flex mt-3 gap-5 text-sm text-gray-600 dark:text-gray-300">
                  <span>500+ Connections</span>
                  <span>573 Followers</span>
               </div>

               <div className="w-full flex mt-4 gap-4 justify-center">
                  <Link
                     href="https://www.linkedin.com/in/buddhadeb-koner"
                     target="_blank"
                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-transform hover:scale-105"
                  >
                     Connect
                  </Link>
                  <Link
                     href="https://www.linkedin.com/in/buddhadeb-koner"
                     target="_blank"
                     className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg font-medium transition-transform hover:scale-105"
                  >
                     Follow
                  </Link>
               </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col w-full md:w-2/3 space-y-6">
               <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">About Me</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">
                     I&apos;m a passionate web developer focused on building intuitive and high-performance applications.
                     Specializing in Next.js and Appwrite, I turn complex ideas into seamless digital experiences.
                     Always eager to learn, share, and innovate.
                  </p>
               </div>

               <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">🔹 Tech Lead at CodeComm</p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">🔹 Web Developer at RajisLab</p>
               </div>

               <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">Sanaka Educational Trust&apos;s Group of Institutions</p>
               </div>

               <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h2>
                  <div className="flex mt-2">
                     <img
                        src="https://skillicons.dev/icons?i=javascript,typescript,cpp,java,appwrite,react,nodejs,expressjs,nextjs,mongo,npm,bun"
                        alt="React"
                     />
                  </div>
               </div>
            </div>
         </div>

         {/* Current Projects */}
         <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Current Projects</h2>
            <div className="mt-2 flex flex-col gap-3">
               {demoProjects.map((project) => (
                  <div key={project.id} className="border border-blue-200 dark:border-blue-700 p-4 rounded-lg shadow-md bg-blue-50 dark:bg-[#1a2d41]">
                     <div className="flex items-center gap-3">
                     </div>
                     <LinkPreview
                        url={project.projectUrl}
                        className="text-md font-semibold text-gray-900 dark:text-white mt-2">
                        {project.name}
                     </LinkPreview>
                     <p className="text-sm text-gray-800 dark:text-gray-200">{project.description}</p>

                     <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, index) => (
                           <span key={index} className="text-xs bg-blue-100 dark:bg-blue-700 px-2 py-1 rounded-md">
                              {tech}
                           </span>
                        ))}
                     </div>

                     <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mt-3">
                        <p>{new Date(project.timestamp).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</p>
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                           Visit Project
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   );
};

export default LinkedinCard;
