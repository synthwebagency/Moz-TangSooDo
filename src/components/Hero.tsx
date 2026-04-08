import { motion } from "motion/react";
import { Trophy, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Martial Arts Training"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-8 backdrop-blur-sm"
        >
          <Trophy className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">
            🏆 14 Medalhas de Ouro no Campeonato Mundial
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8"
        >
          Descubra o Seu <br />
          <span className="text-orange-500 inline-block transform -skew-x-6">Potencial</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-medium tracking-tight"
        >
          Quebre a barreira de negação. Afirme: <span className="text-white font-bold italic">Eu Sou Capaz!</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-orange-500 text-black font-black rounded-xl hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            Começar Agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-10 py-5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-widest flex items-center gap-3">
            <Play className="w-5 h-5 fill-current" />
            Ver Programas
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-t from-orange-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">Scroll</span>
      </div>
    </section>
  );
}
