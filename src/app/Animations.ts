import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const introAnimation = () => {
  gsap.fromTo(
    "#intro",
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#intro",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    }
  );
};

export const aboutAnimations = () => {
  // Animasi gambar di about
  gsap.fromTo(
    "#about-image",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    }
  );

  // Animasi text paragraphs di about
  const paragraphs = gsap.utils.toArray<HTMLParagraphElement>("#about-text h2");
  paragraphs.forEach((p) => {
    gsap.fromTo(
      p,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: p,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });
};

export const skillsIconsAnimation = () => {
  gsap.fromTo(
    "#skills-icons img",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills-icons",
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
    }
  );
};

export const projectCardsAnimation = () => {
  const projectCards = gsap.utils.toArray<HTMLDivElement>(".projects-card");

  projectCards.forEach((card, index) => {
    let animationConfig;

    if (index >= 0 && index <= 2) {
      // Animasi untuk index 0 - 2 (opacity dan y)
      animationConfig = { opacity: 1, y: 0 };
    } else if (index >= 3 && index <= 5) {
      // Animasi untuk index 3 - 5 (opacity dan x dari kanan ke kiri)
      animationConfig = { opacity: 1, x: 0 };
    } else {
      // Animasi untuk index 6 ke atas (opacity dan x dari kiri ke kanan)
      animationConfig = { opacity: 1, x: 0 };
    }

    gsap.fromTo(
      card,
      // Properti awal
      { opacity: 0, ...(index <= 2 ? { y: 50 } : index <= 5 ? { x: 50 } : { x: -50 }) },
      // Properti akhir
      {
        ...animationConfig,
        delay: index * 0.2, // Delay incremental
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      }
    );
  });
};



export const contactFormAnimation = () => {
  gsap.fromTo(
    "#contact form",
    { opacity: 0, scale: 0.5, rotate: -15, backgroundColor: "#ffffff" },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      backgroundColor: "#f0f8ff",
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "top 60%",
        scrub: false,
        toggleActions: "restart none none none",
      },
    }
  );

  const socialIcons = gsap.utils.toArray<HTMLDivElement>("#contact a");
    gsap.fromTo(
      socialIcons,
      { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power4.out", // Efek smooth
        scrollTrigger: {
          trigger: "#contact a",
          start: "top 90%",
          end: "top 70%",
          scrub: false,
          toggleActions: "restart none none none",
        },
      }
    );
};
