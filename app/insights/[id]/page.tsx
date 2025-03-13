"use client";

import Image from "next/image";
import { use } from "react";

// Define the BlogPost type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
}

// Sample blog posts data (replace with API fetch in production)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Investment in Tanzania",
    excerpt: "Exploring trends shaping the investment landscape in 2025.",
    content: "This is the full content of the blog post about investment trends in Tanzania...",
    category: "Investment",
    image: "/images/insights-investment.jpg",
    date: "March 10, 2025",
  },
  {
    id: "2",
    title: "Modern Technology in Education: TSI’s Approach",
    excerpt: "How Modern Technology is transforming learning at TSI.",
    content: "Full details about TSI's innovative educational technology...",
    category: "Education",
    image: "/images/insights-tech.jpg",
    date: "March 5, 2025",
  },
  // Add other posts...
];

// Define props for the page
interface PostDetailsProps {
  params: Promise<{ id: string }>; // Update type to reflect that params is a Promise
}

export default function PostDetails({ params }: PostDetailsProps) {
  const resolvedParams = use(params); // Unwrap the params Promise
  const { id } = resolvedParams; // Now safely destructure id
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-white">Post not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative h-96 mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
            quality={100}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">
          {post.date} | {post.category}
        </p>
        <p className="text-gray-300">{post.excerpt}</p>
        <p className="text-white mt-6">{post.content}</p>
      </div>
    </div>
  );
}