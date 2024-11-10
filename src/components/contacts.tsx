"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    Observer.create({
      target: formRef.current,
      //   onEnter: () => {
      //     gsap.fromTo(
      //       formRef.current,
      //       { opacity: 0, scale: 0.9 },
      //       { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
      //     );
      //   },
    });
  }, []);

  return (
    <section id="contact" className="px-6 py-20 text-center bg-blue-50">
      <h2 className="text-4xl font-bold text-gray-800">Hubungi Saya</h2>
      <form
        ref={formRef}
        className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
};

export default Contact;
