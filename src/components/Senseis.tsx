import { motion } from "motion/react";
import { SENSEIS } from "../constants/content";

export default function Senseis() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4"
          >
            Nossa Liderança
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Conheça os Nossos <span className="text-orange-500">Senseis</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {SENSEIS.map((sensei, i) => (
            <motion.div
              key={sensei.name}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[600px] md:h-[700px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_50px_rgba(249,115,22,0.2)]">
                <img
                  src={sensei.image}
                  alt={sensei.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-transform duration-500">
                  <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                      {sensei.name}
                    </h4>
                    <p className="text-orange-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                      {sensei.role}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {sensei.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
