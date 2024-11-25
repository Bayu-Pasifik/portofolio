import { useEffect } from "react";
import {
  introAnimation,
  aboutAnimations,
  skillsIconsAnimation,
  projectCardsAnimation,
  contactFormAnimation,
} from "./Animations";

const useAnimations = () => {
  useEffect(() => {
    introAnimation();
    aboutAnimations();
    skillsIconsAnimation();
    projectCardsAnimation();
    contactFormAnimation();
  }, []);
};

export default useAnimations;
