"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is QuickDo?",
      answer:
        "QuickDo is a simple and powerful task manager that helps you organize your day, track your goals, and stay productive across all devices.",
    },
    {
      question: "Is QuickDo free to use?",
      answer:
        "Yes, QuickDo offers a free version with essential features. A premium plan is also available with advanced features like team collaboration and priority support.",
    },
    {
      question: "Can I use QuickDo on mobile?",
      answer:
        "Absolutely! QuickDo is fully optimized for mobile and works seamlessly with offline sync across all your devices.",
    },
    {
      question: "Is my data safe on QuickDo?",
      answer:
        "Yes. We use end-to-end encryption to make sure your tasks, notes, and projects remain private and secure.",
    },
    {
      question: "Can I collaborate with my team on QuickDo?",
      answer:
        "Yes! QuickDo allows you to share tasks, assign responsibilities, and collaborate with your team in real-time for better productivity.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto py-12 sm:py-16 transition-colors duration-300 text-black dark:text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <span className="text-xl sm:text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-black dark:text-white text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
