import { motion } from "motion/react";
import { Star, Shield, Heart, Trophy, CheckCircle2 } from "lucide-react";
import { KIDS_BENEFITS } from "../constants/content";

const iconMap = [
  <Shield className="w-6 h-6" />,
  <Heart className="w-6 h-6" />,
  <Star className="w-6 h-6" />,
  <Trophy className="w-6 h-6" />,
];

export default function Kids() {
  return (
    <section id="criancas" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-orange-500/20 shadow-[0_0_50px_rgba(249,115,22,0.1)]">
              <img
                src="/images/kids-section.jpg"
                alt="Treino Infantil"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-10 -right-10 bg-orange-500 p-8 rounded-full shadow-2xl animate-pulse">
              <Trophy className="w-12 h-12 text-black" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Desenvolvimento Infantil</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Formando os <br />
              <span className="text-orange-500">Líderes de Amanhã</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              O nosso programa infantil é desenhado para incutir valores fundamentais enquanto as crianças se divertem e se mantêm ativas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {KIDS_BENEFITS.map((benefit, i) => (
                <div key={benefit.title} className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                    {iconMap[i]}
                  </div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-12 px-10 py-5 bg-orange-500 text-black font-black rounded-xl hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center gap-3">
              Inscreva o seu filho
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
