import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Senseis from "../components/Senseis";
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
      
      {/* Nota Importante Section */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/5 border-2 border-orange-500/30 rounded-[40px] text-center relative overflow-hidden group hover:border-orange-500/60 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
            <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed italic">
              <span className="text-orange-500 font-black uppercase not-italic mr-2">Nota:</span>
              A Academia movimenta as artes marciais Tang Soo Do tradicional e a minha Arte espiritual a <span className="text-white font-bold not-italic">ShinGoule®kigong</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Programs />
      <Senseis />
      <Benefits />
      <Kids />
      <Gallery />
      <Contact />
    </motion.main>
  );
}
