
import { Metadata } from "next";
import Posts from "./Posts";

export const metadata: Metadata = {
  title: "Posts | Buddhadeb Koner",
  description: "My Posts",
};

export default function BlogPage() {
  return <Posts />;
}

