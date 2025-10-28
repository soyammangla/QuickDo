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
    <section className="max-w-[70%] mx-auto py-16 transition-colors duration-300 bg-white dark:bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Our Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {post.date}
            </p>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <button className="text-blue-500 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
