"use client";
import About from "@/components/About";
import Contact from "@/components/contacts";
import Greet from "@/components/Greet";
import Portfolio from "@/components/Porto";
import Skills from "@/components/Skills";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import Typewriter from "typewriter-effect";

// export default function Home() {
//   return (
//     <div>
//       <Greet />
//       <About />
//       <Skills />
//       {/* <Portfolio /> */}
//       <Contact />
//     </div>
//   );
// }
gsap.registerPlugin(Observer);
const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Observer for parallax effect on scroll
    Observer.create({
      target: window,
      type: "scroll",
      onChange: (self) => {
        gsap.to(titleRef.current, {
          y: self.deltaY * 0.5,
          ease: "power3.out",
        });
      },
    });

    // Animasi panah scroll down
    gsap.to(arrowRef.current, {
      y: 10, // Bergerak 10px ke bawah
      repeat: -1, // Animasi berulang
      yoyo: true, // Bergerak bolak-balik
      duration: 0.8, // Durasi animasi
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div>
      <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50 text-center px-4">
        <h1
          ref={titleRef}
          className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight sm:text-7xl"
        >
          Halo👋 , Saya{" "}
          <span className="inline-block text-blue-600">
            <Typewriter
              options={{
                strings: ["Bayu Pasifik"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <div className="mt-4 text-xl text-gray-600 max-w-xl">
          <span>
            Seorang{" "}
            <span className="font-semibold text-blue-600">
              <Typewriter
                options={{
                  strings: ["Website Developer", "Mobile Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>{" "}
            yang berfokus pada
          </span>
          <span className="text-xl font-semibold text-blue-600">
            pengembangan website & aplikasi mobile.
          </span>
        </div>

        {/* Scroll Down */}
        <span
          ref={arrowRef}
          className="scroll-down absolute bottom-8 text-gray-600 text-lg flex flex-col items-center"
        >
          Scroll Down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </main>
    </div>
  );
};

export default Home;
