import { useEffect } from "react";
import {
  introAnimation,
  aboutAnimations,
  skillsIconsAnimation,
  projectCardsAnimation,
  contactFormAnimation,
} from "../Animations";

const useAnimations = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Pastikan berjalan di sisi klien
      introAnimation();
      aboutAnimations();
      skillsIconsAnimation();
      projectCardsAnimation();
      contactFormAnimation();
    }
  }, []);
};

export default useAnimations;
