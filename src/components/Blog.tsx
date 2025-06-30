
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  size: 'large' | 'small';
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The future of AI in digital forensics",
    author: "DONALD RAFAEL",
    date: "APRIL 8, 2024",
    image: "/lovable-uploads/e540ef49-6d5c-4ae4-9b7e-e5eba814e2e0.png",
    size: 'large'
  },
  {
    id: 2,
    title: "Detecting deepfakes in real-time investigations",
    author: "DONALD RAFAEL",
    date: "FEBRUARY 14, 2024",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    size: 'small'
  },
  {
    id: 3,
    title: "Advanced evidence management techniques",
    author: "DONALD RAFAEL",
    date: "MARCH 22, 2024",
    image: "/lovable-uploads/c6c44a47-9cd6-4bc7-bed9-0f0378e9bc84.png",
    size: 'small'
  },
  {
    id: 4,
    title: "Machine learning transforms cybersecurity protocols",
    author: "DONALD RAFAEL",
    date: "JANUARY 15, 2024",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    size: 'small'
  },
  {
    id: 5,
    title: "Next-generation threat detection systems",
    author: "DONALD RAFAEL",
    date: "OCTOBER 30, 2023",
    image: "/lovable-uploads/ddcc5ea3-82f4-43a4-81fc-349521291ed2.png",
    size: 'large'
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  const isLarge = post.size === 'large';
  
  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant-hover overflow-hidden ${
        isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
      }`}
    >
      <CardContent className="p-0 relative h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${post.image})`,
          }}
        />
        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-3 text-xs opacity-80">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">DR</span>
            </div>
            <span className="uppercase tracking-wider">Written by {post.author}</span>
            <span>•</span>
            <span className="uppercase tracking-wider">{post.date}</span>
          </div>
          <h3 className={`font-bold leading-tight ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
          }`}>
            {post.title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

const Blog = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50" id="blog">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in AI, cybersecurity, and digital forensics
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[200px] md:auto-rows-[250px]">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
