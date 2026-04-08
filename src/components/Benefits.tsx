import { motion } from "motion/react";
import { Heart, Brain, Users, Sparkles, Shield, Zap } from "lucide-react";
import { BENEFITS } from "../constants/content";

const iconMap = [
  <Heart className="w-8 h-8" />,
  <Brain className="w-8 h-8" />,
  <Users className="w-8 h-8" />,
  <Sparkles className="w-8 h-8" />,
  <Shield className="w-8 h-8" />,
  <Zap className="w-8 h-8" />,
];

export default function Benefits() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4"
          >
            Benefícios do Treino
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Transformação <span className="text-orange-500">Total</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="group p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-orange-500 transition-all duration-500 hover:scale-105 active:scale-95 cursor-default"
            >
              <div className="text-orange-500 mb-8 group-hover:text-black transition-colors">
                {iconMap[i]}
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-black transition-colors">
                {benefit.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
