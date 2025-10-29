"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white">
          Contact Us
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-800 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-200 dark:border-neutral-700 space-y-5 transition-colors duration-300"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-black dark:text-white"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-black dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 text-black dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-neutral-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact */}
        <div className="bg-white dark:bg-neutral-800 p-5 sm:p-6 rounded-2xl shadow-md border border-gray-200 dark:border-neutral-700 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-center mb-5 text-black dark:text-white">
            Or Contact Us Directly
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 items-center space-y-3 sm:space-y-0 text-black dark:text-white">
            <a
              href="mailto:soyamtech627@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaEnvelope /> <span>soyamtech627@gmail.com</span>
            </a>
            <a
              href="tel:+918053761134"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaPhone /> <span>+91 80537 61134</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
