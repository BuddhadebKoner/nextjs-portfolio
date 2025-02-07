"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark/light mode
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

  return (
    <div className="w-screen min-h-screen bg-lightprimaryBg dark:bg-darkprimaryBg">
      {/* hero text */}
      <div className="w-full flex justify-center items-center h-fit py-10 relative">
        <h1 className="font-semibold text-4xl text-lightprimaryText dark:text-darkprimaryText">Buddhadeb Koner</h1>
        {/* mode chnager */}
        <button
          onClick={toggleDarkMode}
          className="w-fit h-fit absolute right-14 flex justify-center items-center text-gray-700 dark:text-gray-300 focus:outline-none transition-transform duration-300 ease-in-out"
        >
          <span className={`text-2xl inline-block transition-transform duration-300 ${isDarkMode ? "rotate-[270deg]" : "rotate-[90deg]"}`}>
            <Image
              width={40}
              height={40}
              src={isDarkMode ? "/icons/dark_mode.svg" : "/icons/light_mode.svg"}
              alt={isDarkMode ? "moon" : "sun"}
            />
          </span>
        </button>
      </div>

      {/* navbar */}
      <div className="w-full flex justify-center items-center gap-5 py-4">
        <Link 
        className="text-lightprimaryText dark:text-darkprimaryText font-medium text-xl"
        href="/">
          Home
        </Link>
        <Link 
        className="text-lightprimaryText dark:text-darkprimaryText font-medium text-xl"
        href="/Resume">
          Resume
        </Link>
        <Link 
        className="text-lightprimaryText dark:text-darkprimaryText font-medium text-xl"
        href="/Works">
          Works
        </Link>
        <Link 
        className="text-lightprimaryText dark:text-darkprimaryText font-medium text-xl"
        href="/Skill">
          Skill
        </Link>
      </div>
    </div>
  )
}

export default page