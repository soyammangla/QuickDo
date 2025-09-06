"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-[50%] mx-auto py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Direct Contact Options */}
      <div className="mt-12 bg-gray-900 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Or Contact Us Directly
        </h3>
        <div className="flex flex-col items-center space-y-4 text-gray-300">
          <a
            href="mailto:soyam@example.com"
            className="flex items-center space-x-3 hover:text-white"
          >
            <FaEnvelope className="text-lg" />
            <span>soyamtech627@gmail.com</span>
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center space-x-3 hover:text-white"
          >
            <FaPhone className="text-lg" />
            <span>+91 80537 61134</span>
          </a>
        </div>
      </div>
    </section>
  );
}
