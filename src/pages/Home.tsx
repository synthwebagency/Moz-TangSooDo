import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Benefits from "../components/Benefits";
import Kids from "../components/Kids";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black"
    >
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Kids />
      <Gallery />
      <Contact />
    </motion.main>
  );
}
