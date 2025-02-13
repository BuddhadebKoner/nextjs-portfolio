
import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home | Buddhadeb Koner",
  description: "Home Page",
};

export default function BlogPage() {
  return <Home />;
}

