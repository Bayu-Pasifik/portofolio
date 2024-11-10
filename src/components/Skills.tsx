'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const state = Flip.getState(skillsRef.current!.children);

    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: "top 80%",
      onEnter: () => Flip.from(state, { duration: 1, ease: "power2.out" }),
    });
  }, []);

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP"];

  return (
    <section id="skills" className="px-4 py-16">
      <h2 className="text-4xl font-bold text-center">Keahlian</h2>
      <ul ref={skillsRef} className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 text-center">
        {skills.map((skill, index) => (
          <li key={index} className="p-4 bg-gray-200 shadow rounded">
            <p className=" text-black">{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
