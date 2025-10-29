"use client";

import Link from "next/link";

interface HelpTopic {
  id: number;
  title: string;
  description: string;
  href?: string;
}

const helpTopics: HelpTopic[] = [
  {
    id: 1,
    title: "Getting Started with QuickDo",
    description:
      "Learn how to set up your account, create tasks, and get started quickly.",
    href: "/blog",
  },
  {
    id: 2,
    title: "Managing Tasks Efficiently",
    description:
      "Tips and tricks to organize, prioritize, and complete your tasks on time.",
  },
  {
    id: 3,
    title: "Team Collaboration",
    description:
      "How to share tasks and collaborate with your team in real-time.",
  },
  {
    id: 4,
    title: "Account & Security",
    description:
      "Learn how to update your profile, manage settings, and keep your data secure.",
  },
  {
    id: 5,
    title: "Billing & Subscription",
    description:
      "Information about free vs premium plans, payments, and subscriptions.",
  },
];

export default function Page() {
  return (
    <section className="max-w-[70%] mx-auto py-16 transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Help Center</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {helpTopics.map((topic) => (
          <div
            key={topic.id}
            className="p-6 rounded-xl shadow-md border border-gray-200 dark:border-neutral-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-neutral-100 dark:bg-neutral-800"
          >
            <h3 className="text-2xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {topic.description}
            </p>
            {topic.href && (
              <Link
                href={topic.href}
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
