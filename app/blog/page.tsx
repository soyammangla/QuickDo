"use client";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with QuickDo",
    description:
      "Learn how to make the most out of QuickDo to organize your tasks, boost productivity, and achieve your goals faster.",
    date: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "5 Productivity Hacks for Students",
    description:
      "Discover practical strategies and tools that students can use to manage time effectively and excel academically.",
    date: "Aug 20, 2025",
  },
  {
    id: 3,
    title: "Team Collaboration Made Easy",
    description:
      "Explore how QuickDo simplifies team task sharing and improves collaboration with real-time updates.",
    date: "Aug 1, 2025",
  },
];

export default function Page() {
  return (
    <section className="w-[90%] sm:w-[85%] md:w-[70%] mx-auto py-12 sm:py-16 transition-colors duration-300 bg-white dark:bg-black text-center sm:text-left">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-black dark:text-white">
        Our Blog
      </h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-5 sm:p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
          >
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">
              {post.date}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-black dark:text-white">
              {post.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <button className="text-blue-500 font-semibold hover:underline text-sm sm:text-base">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
