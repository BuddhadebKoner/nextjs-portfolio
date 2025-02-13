
import { Metadata } from "next";
import Works from "./Works";

export const metadata: Metadata = {
  title: "Works | Buddhadeb Koner",
  description: "My works",
};

export default function BlogPage() {
  return <Works />;
}

