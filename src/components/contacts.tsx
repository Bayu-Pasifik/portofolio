'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Observer effect on form to pop up
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
    <section id="contact" className="px-4 py-16 text-center ">
      <h2 className="text-4xl font-bold">Hubungi Saya</h2>
      <form ref={formRef} className="mt-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-3 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
