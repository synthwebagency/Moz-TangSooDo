import { motion } from "motion/react";
import { ArrowUpRight, Trophy, Heart, Activity, Stethoscope, Pill, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { PROGRAMS } from "../constants/content";

const iconMap = {
  "tang-soo-do": <Trophy className="w-6 h-6" />,
  "shingoule": <Activity className="w-6 h-6" />,
  "manutencao-fisica": <Heart className="w-6 h-6" />,
  "fisioterapia": <Stethoscope className="w-6 h-6" />,
  "suplementacao-natural": <Pill className="w-6 h-6" />,
  "check-up-geral": <CheckCircle className="w-6 h-6" />,
};

export default function Programs() {
  return (
    <section id="programas" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4"
          >
            Nossos Programas
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Treino de <span className="text-orange-500">Elite</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, i) => {
            const isSmaller = program.id === "check-up-geral";
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:border-orange-500/50"
              >
                <div className={`aspect-[4/3] overflow-hidden flex items-center justify-center ${isSmaller ? 'p-12' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ${isSmaller ? 'object-contain' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </div>

                <div className="p-8 relative">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                    {iconMap[program.id as keyof typeof iconMap]}
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                    {program.description}
                  </p>
                  <Link
                    to={`/programas/${program.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest group/btn"
                  >
                    Ver Detalhes
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
