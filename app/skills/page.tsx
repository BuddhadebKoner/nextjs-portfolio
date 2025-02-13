
import { Metadata } from "next";
import Skills from "./Skills";

export const metadata: Metadata = {
  title: "Skills | Buddhadeb Koner",
  description: "Skills Page",
};

export default function BlogPage() {
  return <Skills />;
}

