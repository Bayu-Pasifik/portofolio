"use client";
import { useContactFormAnimation } from "@/app/Animations";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const contactRef = useContactFormAnimation();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Membuat URL mailto dengan hanya pesan
    const mailtoLink = `mailto:pasifik.bayu19@gmail.com?body=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke link mailto
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-blue-50 to-blue-50 text-gray-800 mb-40 h-full"
      ref={contactRef}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
        Contact Me
      </h1>

      {/* Form Kontak */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-lg bg-white p-6 shadow-lg rounded-lg space-y-4"
      >
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
          href="https://wa.me/+6281358995401"
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
          href="https://t.me/Bayu_Psfx"
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
          href="https://instagram.com/bayu_pasifik1"
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
        {/* <a
          href="discord://discord.com/users/565549988541759534" 
          title="Send a Discord Message"
          className="flex justify-center items-center text-indigo-500 text-4xl transform transition duration-300 hover:scale-110"
        >
          <img
            src="/images/icons/discord.png"
            alt="Discord"
            className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
          />
        </a> */}
      </div>
    </section>
  );
};

export default ContactSection;
