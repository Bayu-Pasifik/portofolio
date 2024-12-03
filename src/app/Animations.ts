// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// export const introAnimation = () => {
//   if (typeof document !== "undefined") {
//     const introElement = document.querySelector("#intro");
//     if (introElement) {
//       gsap.fromTo(
//         introElement,
//         { opacity: 0, y: -50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: introElement,
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }
// };

// export const aboutAnimations = () => {
//   if (typeof document !== "undefined") {
//     const aboutImage = document.querySelector("#about-image");
//     if (aboutImage) {
//       gsap.fromTo(
//         aboutImage,
//         { opacity: 0, x: -100 },
//         {
//           opacity: 1,
//           x: 0,
//           scrollTrigger: {
//             trigger: aboutImage,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     const paragraphs = gsap.utils.toArray<HTMLParagraphElement>("#about-text h2");
//     paragraphs.forEach((p) => {
//       gsap.fromTo(
//         p,
//         { opacity: 0, x: 100 },
//         {
//           opacity: 1,
//           x: 0,
//           scrollTrigger: {
//             trigger: p,
//             start: "top 90%",
//             end: "top 60%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }
// };

// export const skillsIconsAnimation = () => {
//   if (typeof document !== "undefined") {
//     const skillsIcons = document.querySelectorAll("#skills-icons img");
//     if (skillsIcons.length > 0) {
//       gsap.fromTo(
//         skillsIcons,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: "#skills-icons",
//             start: "top 90%",
//             end: "top 70%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }
// };

// export const projectCardsAnimation = () => {
//   if (typeof document !== "undefined") {
//     const projectCards = gsap.utils.toArray<HTMLDivElement>(".projects-card");
//     projectCards.forEach((card, index) => {
//       let animationConfig;

//       if (index >= 0 && index <= 2) {
//         animationConfig = { opacity: 1, y: 0 };
//       } else if (index >= 3 && index <= 5) {
//         animationConfig = { opacity: 1, x: 0 };
//       } else {
//         animationConfig = { opacity: 1, x: 0 };
//       }

//       gsap.fromTo(
//         card,
//         { opacity: 0, ...(index <= 2 ? { y: 50 } : index <= 5 ? { x: 50 } : { x: -50 }) },
//         {
//           ...animationConfig,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%",
//             end: "top 70%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }
// };

// export const contactFormAnimation = () => {
//   if (typeof document !== "undefined") {
//     const contactForm = document.querySelector("#contact form");
//     if (contactForm) {
//       gsap.fromTo(
//         contactForm,
//         { opacity: 0, scale: 0.5, rotate: -15, backgroundColor: "#ffffff" },
//         {
//           opacity: 1,
//           scale: 1,
//           rotate: 0,
//           backgroundColor: "#f0f8ff",
//           duration: 1.5,
//           ease: "elastic.out(1, 0.5)",
//           scrollTrigger: {
//             trigger: "#contact",
//             start: "top 80%",
//             end: "top 60%",
//             scrub: false,
//             toggleActions: "restart none none none",
//           },
//         }
//       );
//     }

//     const socialIcons = document.querySelectorAll("#contact a");
//     if (socialIcons.length > 0) {
//       gsap.fromTo(
//         socialIcons,
//         { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotate: 0,
//           stagger: 0.2,
//           duration: 0.5,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: "#contact a",
//             start: "top 90%",
//             end: "top 70%",
//             scrub: false,
//             toggleActions: "restart none none none",
//           },
//         }
//       );
//     }
//   }
// };





import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import  { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Intro Animation
export const useIntroAnimation = () => {
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(typeof document !== "undefined") {
    const introElement = introRef.current;
    if (introElement) {
      gsap.fromTo(
        introElement,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: introElement,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
    }
  });

  return introRef;
};

// About Animation
export const useAboutAnimations = () => {
  const aboutImageRef = useRef<HTMLImageElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(typeof document !== "undefined") {
      const aboutImage = aboutImageRef.current;
    if (aboutImage) {
      gsap.fromTo(
        aboutImage,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: aboutImage,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
    }
    if(typeof document !== "undefined") {
      const paragraphs = aboutTextRef.current?.querySelectorAll<HTMLHeadingElement>("h2") || [];
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
  }
    }
    );

  return { aboutImageRef, aboutTextRef };
};

// Skills Animation
export const useSkillsIconsAnimation = () => {
  const skillsIconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(typeof document !== "undefined") {
      const skillsIcons = skillsIconsRef.current?.querySelectorAll<HTMLImageElement>("img") || [];
    if (skillsIcons.length > 0) {
      gsap.fromTo(
        skillsIcons,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: skillsIconsRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    }
    }
  });

  return skillsIconsRef;
};

// Projects Animation
export const useProjectCardsAnimation = () => {
  const projectCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(typeof document !== "undefined") {
      const projectCards = projectCardsRef.current?.querySelectorAll<HTMLDivElement>(".projects-card") || [];
      projectCards.forEach((card, index) => {
        // Scroll-trigger animation
        let animationConfig;
  
        if (index >= 0 && index <= 2) {
          animationConfig = { opacity: 1, y: 0 };
        } else if (index >= 3 && index <= 5) {
          animationConfig = { opacity: 1, x: 0 };
        } else {
          animationConfig = { opacity: 1, x: 0 };
        }
  
  
        gsap.fromTo(
          card,
          { opacity: 0, ...(index <= 2 ? { y: 50 } : { x: 50 }) },
          {
            ...animationConfig,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 70%",
              scrub: true,
            },
          }
        );
  
        // Hover effect
        const hoverIn = () => {
          gsap.to(card, {
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power3.out",
          });
        };
  
        const hoverOut = () => {
          gsap.to(card, {
            scale: 1,
            rotate: 0,
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power3.inOut",
          });
        };
  
        card.addEventListener("mouseenter", hoverIn);
        card.addEventListener("mouseleave", hoverOut);
      });
    }
    
  });

  return projectCardsRef;
};


// Contact Animation
export const useContactFormAnimation = () => {
  const contactRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if(typeof document !== "undefined") {
      const contactForm = contactRef.current?.querySelector<HTMLFormElement>("form");
    if (contactForm) {
      gsap.fromTo(
        contactForm,
        { opacity: 0, scale: 0.5, rotate: -15, backgroundColor: "#ffffff" },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          backgroundColor: "#f0f8ff",
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: contactForm,
            start: "top 80%",
            end: "top 60%",
            scrub: false,
            toggleActions: "restart none none none",
          },
        }
      );
    }
    }
    

    if(typeof document !== "undefined") {
      const socialIcons = contactRef.current?.querySelectorAll<HTMLAnchorElement>("a") || [];
    if (socialIcons.length > 0) {
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
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactRef.current?.querySelector("a"),
            start: "top 90%",
            end: "top 70%",
            scrub: false,
            toggleActions: "restart none none none",
          },
        }
      );
    }
    }
  });

  return contactRef;
};


