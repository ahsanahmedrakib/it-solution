import { MessageSquare, User } from "lucide-react"; // npm install lucide-react
import Image from "next/image";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  day: string;
  month: string;
  author: string;
  commentsCount: number;
  isFirst: boolean;
}

const blogData: BlogCardProps[] = [
  {
    image: "/images/home/blog/blog-01.jpg",
    category: "CLOUD",
    title: "Cloud solutions for scalable IT infrastructure.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
    isFirst: true,
  },
  {
    image: "/images/home/blog/blog-02.jpg",
    category: "SOFTWARE",
    title: "Innovative software solutions for businesses.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
    isFirst: false,
  },
  {
    image: "/images/home/blog/blog-03.jpg",
    category: "CYBERSAFE",
    title: "Practical tips for secure it systems checklist.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
    isFirst: false,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xl font-bold tracking-widest text-brand-blue uppercase">
            OUR BLOG
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-3 leading-tight">
            Innovations shaping the digital world
          </h2>
        </div>

        {/* Grid Setup - strictly same height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          {blogData.map((post, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col h-full bg-white rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(21,124,193,0.15)] hover:-translate-y-1 outline-none overflow-hidden border border-gray-100 hover:border-brand-blue/30"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority={post.isFirst}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date Badge - Overlaid on image */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-col items-center justify-center bg-brand-secondary text-white w-16 h-16 rounded-xl shadow-lg">
                  <span className="text-lg font-black tracking-tight leading-none">
                    {post.day}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase mt-0.5">
                    {post.month}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 pt-8">
                {/* Category tag */}
                <span className="text-xs font-bold text-brand-secondary tracking-wider uppercase mb-3">
                  {post.category}
                </span>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug tracking-tight hover:text-brand-blue transition-colors cursor-pointer mb-6">
                  {post.title}
                </h3>

                {/* Footer Metadata - Pushed down evenly with mt-auto */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 font-medium">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-brand-blue/60" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-brand-blue/60" />
                    <span>{post.commentsCount}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
