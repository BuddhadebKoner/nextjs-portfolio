
import { Metadata } from "next";
import Resume from "./Resume";

export const metadata: Metadata = {
  title: "Resume | Buddhadeb Koner",
  description: "Resume Page",
};

export default function BlogPage() {
  return <Resume />;
}

