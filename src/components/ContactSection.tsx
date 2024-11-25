"use client";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
          id="contact"
          className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
            Contact Me
          </h1>

          {/* Form Kontak */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="relative w-full max-w-lg bg-white p-6 shadow-lg rounded-lg space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>

          {/* Kontak Sosial Media */}
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-green-500 text-4xl transform transition duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <img
                src="/images/icons/whatsapp.png"
                alt="whatsapp"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-blue-400 text-4xl transform transition duration-300 hover:scale-110"
              title="Telegram"
            >
              <img
                src="/images/icons/telegram.png"
                alt="telegram"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-pink-500 text-4xl transform transition duration-300 hover:scale-110"
              title="Instagram"
            >
              <img
                src="/images/icons/instagram.png"
                alt="instagram"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://discord.com/users/your-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-indigo-500 text-4xl transform transition duration-300 hover:scale-110"
              title="Discord"
            >
              <img
                src="/images/icons/discord.png"
                alt="Discord"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
          </div>
        </section>
  );
};

export default ContactSection;
