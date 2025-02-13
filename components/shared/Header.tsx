"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
   const [theme, setTheme] = useState("system");
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [systemPrefersDark, setSystemPrefersDark] = useState(false);

   useEffect(() => {
      const storedTheme = localStorage.getItem("theme") || "system";
      setTheme(storedTheme);
      applyTheme(storedTheme);
   }, []);

   useEffect(() => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      setSystemPrefersDark(mq.matches);

      const handleChange = (e: MediaQueryListEvent) => {
         setSystemPrefersDark(e.matches);
      };
      mq.addEventListener("change", handleChange);

      return () => {
         mq.removeEventListener("change", handleChange);
      };
   }, []);

   // Automatically re-apply theme if user selected "system"
   useEffect(() => {
      if (theme === "system") {
         applyTheme(theme);
      }
   }, [systemPrefersDark, theme]);

   const applyTheme = (selectedTheme: string) => {
      if (selectedTheme === "dark") {
         document.documentElement.classList.add("dark");
         document.documentElement.classList.remove("light");
      } else if (selectedTheme === "light") {
         document.documentElement.classList.add("light");
         document.documentElement.classList.remove("dark");
      } else {
         // System mode - sync with OS theme
         const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
         setSystemPrefersDark(prefersDark);
         document.documentElement.classList.toggle("dark", prefersDark);
         document.documentElement.classList.toggle("light", !prefersDark);
      }
   };

   const changeTheme = (selectedTheme: string) => {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
      applyTheme(selectedTheme);
      setIsDropdownOpen(false);
   };

   // Correct icon selection
   const getThemeIcon = () => {
      if (theme === "dark") return "/icons/white_moon.svg"; // Dark mode → White moon
      if (theme === "light") return "/icons/black_sun.svg"; // Light mode → Black sun
      return systemPrefersDark ? "/icons/white_pc.svg" : "/icons/black_pc.svg"; // System mode
   };

   // New helper function for the dropdown icons:
   function getDropdownIcon(mode: string, theme: string, systemPrefersDark: boolean) {
      if (theme === "dark") {
         // In dark theme, make all icons white
         if (mode === "dark") return "/icons/white_moon.svg";
         if (mode === "light") return "/icons/white_sun.svg";
         return "/icons/white_pc.svg"; // system
      } else if (theme === "light") {
         // In light theme, make all icons black
         if (mode === "dark") return "/icons/black_moon.svg";
         if (mode === "light") return "/icons/black_sun.svg";
         return "/icons/black_pc.svg"; // system
      } else {
         const isDark = systemPrefersDark;
         if (mode === "dark") return isDark ? "/icons/white_moon.svg" : "/icons/black_moon.svg";
         if (mode === "light") return isDark ? "/icons/white_sun.svg" : "/icons/black_sun.svg";
         return isDark ? "/icons/white_pc.svg" : "/icons/black_pc.svg";
      }
   }

   const pathname = usePathname();

   return (
      <div className="w-screen min-h-fit bg-lightprimaryBg dark:bg-darkprimaryBg relative">
         <div className="w-full flex justify-center items-center h-fit py-6 sm:py-8 md:py-10 relative">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-lightprimaryText dark:text-darkprimaryText">
               Buddhadeb Koner
            </h1>

            {/* Theme Selector Dropdown */}
            <div className="absolute right-10 top-6 sm:top-8 md:top-10">
               <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md focus:outline-none"
               >
                  <Image width={24} height={24} src={getThemeIcon()} alt="theme icon" />
                  <span className="capitalize hidden lg:block">{theme}</span>
               </button>

               {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-fit bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                     {["light", "dark", "system"].map((mode) => (
                        <button
                           key={mode}
                           onClick={() => changeTheme(mode)}
                           className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-800 ${theme === mode ? "font-bold" : ""
                              }`}
                        >
                           <Image
                              width={20}
                              height={20}
                              src={getDropdownIcon(mode, theme, systemPrefersDark)}
                              alt={mode}
                           />
                           <span className="capitalize hidden lg:block">{mode}</span>
                        </button>
                     ))}
                  </div>
               )}
            </div>
         </div>

         {/* Navbar */}
         <div className="w-full flex flex-wrap justify-center items-center gap-5 pt-4">
            {[
               { name: "Home", path: "/" },
               { name: "Resume", path: "/resume" },
               { name: "Works", path: "/works" },
               { name: "Skills", path: "/skills" },
               { name: "Posts", path: "/posts" },
            ].map((link) => (
               <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium text-base sm:text-lg md:text-xl px-4 py-2 rounded-t-lg transition-all ${pathname === link.path
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
