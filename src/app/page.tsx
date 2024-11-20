"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Typewriter from 'typewriter-effect';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomePage: React.FC = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>("#panels-container .panel");
    const panelsContainer = document.querySelector(
      "#panels-container"
    ) as HTMLElement;

    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => `+=${panelsContainer.offsetWidth - window.innerWidth}`,
      },
    });

    const anchors = document.querySelectorAll<HTMLAnchorElement>(".anchor");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = anchor.getAttribute("href")!;
        const targetElem = document.querySelector(href) as HTMLElement;

        let y = targetElem;

        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          const totalScroll =
            tween.scrollTrigger!.end - tween.scrollTrigger!.start;
          const totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          y = Math.round(
            tween.scrollTrigger!.start +
              (targetElem.offsetLeft / totalMovement) * totalScroll
          ) as any;
        }

        gsap.to(window, {
          scrollTo: { y, autoKill: false },
          duration: 3,
        });
      });
    });
  }, []);

  return (
    <div id="page" className="site">
      <div id="feather" className="feather"></div>

      {/* Header */}
      <header id="masthead" className="site-header fixed z-[9999] flex">
        <nav className="anchor-nav flex space-x-4">
          {["#intro", "#panel-1", "#panel-3", "#panel-5", "#map"].map(
            (link, index) => (
              <a key={index} href={link} className="anchor px-4 py-2">
                {link.replace("#", "").toUpperCase()}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="site-content">
        {/* Intro Section */}
        <section
          id="intro"
          className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50"
        >
          <h1
            // ref={titleRef}
            className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight sm:text-7xl"
          >
            Halo, Saya
              <Typewriter
                options={{
                  strings: ["Bayu Pasifik"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "inline-block text-blue-600",
                }}
              />

          </h1>
          <h1 className="mt-4 text-xl text-gray-600 max-w-xl">
            Seorang{" "}
            <span className="font-semibold text-blue-600 inline-block">
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
          </h1>
          <span className="text-xl font-semibold text-blue-600">
            pengembangan website & aplikasi mobile.
          </span>
        </section>

        {/* Panels Section */}
        <section id="panels">
          <div
            id="panels-container"
            className="flex w-[500%] h-screen overflow-hidden"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <article
                key={i}
                id={`panel-${i + 1}`}
                className={`panel full-screen ${
                  i % 2 === 0 ? "bg-green-500" : "bg-blue-500"
                } flex`}
              >
                <div className="container mx-auto flex items-center justify-between px-10">
                  <div className="w-1/2">
                    <img src="" alt={`Panel ${i + 1}`} />
                  </div>
                  <div className="w-1/2 flex flex-col space-y-4">
                    <h2>Panel {i + 1}</h2>
                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="panels-navigation flex space-x-2">
                      {i > 0 && (
                        <a
                          href={`#panel-${i}`}
                          className="nav-panel anchor px-4 py-2"
                        >
                          Prev
                        </a>
                      )}
                      {i < 4 && (
                        <a
                          href={`#panel-${i + 2}`}
                          className="nav-panel anchor px-4 py-2"
                        >
                          Next
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section
          id="map"
          className="h-screen bg-gradient-to-r from-orange-400 to-orange-600"
        ></section>
      </main>
    </div>
  );
};

export default HomePage;
