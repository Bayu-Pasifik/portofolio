import About from "@/components/About";
import Contact from "@/components/contacts";
import Greet from "@/components/Greet";
import Portfolio from "@/components/Porto";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Greet />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
