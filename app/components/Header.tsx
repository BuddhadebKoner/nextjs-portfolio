"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
         setIsDarkMode(true);
         document.documentElement.classList.add("dark");
      }
   }, []);

   const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      if (newMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   };

   const pathname = usePathname();

   return (
      <div className="w-screen min-h-fit bg-lightprimaryBg dark:bg-darkprimaryBg">
         <div className="w-full flex justify-center items-center h-fit py-10 relative">
            <h1 className="font-semibold text-4xl text-lightprimaryText dark:text-darkprimaryText">
               Buddhadeb Koner
            </h1>

            <button
               onClick={toggleDarkMode}
               className="w-fit h-fit fixed right-14 flex justify-center items-center text-gray-700 dark:text-gray-300 focus:outline-none transition-transform duration-300 ease-in-out"
            >
               <span
                  className={`text-2xl inline-block transition-transform duration-300 ${isDarkMode ? "rotate-[270deg]" : "rotate-[90deg]"
                     }`}
               >
                  <Image
                     width={40}
                     height={40}
                     src={isDarkMode ? "/icons/dark_mode.svg" : "/icons/light_mode.svg"}
                     alt={isDarkMode ? "moon" : "sun"}
                  />
               </span>
            </button>
         </div>

         {/* Navbar */}
         <div className="w-full flex flex-wrap justify-center items-center gap-5 pt-4">
            {[
               { name: "Home", path: "/" },
               { name: "Resume", path: "/Resume" },
               { name: "Works", path: "/Works" },
               { name: "Skill", path: "/Skill" },
               { name: "Post", path: "/Post" },
            ].map((link) => (
               <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium text-xl px-4 py-2 rounded-t-lg transition-all ${pathname === link.path
                     ? "bg-[#333] dark:bg-black text-white"
                     : "text-lightprimaryText dark:text-darkprimaryText"
                     }`}
               >
                  {link.name}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Header;
