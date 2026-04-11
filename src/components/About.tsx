import { motion } from "motion/react";
import { CheckCircle2, Users, Shield, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Award className="w-6 h-6" />, title: "30+ Anos", desc: "De experiência e tradição" },
    { icon: <Users className="w-6 h-6" />, title: "Instrutores", desc: "Certificados internacionalmente" },
    { icon: <Shield className="w-6 h-6" />, title: "Ambiente", desc: "Seguro, amigável e inclusivo" },
  ];

  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-orange-500/20 shadow-[0_0_50px_rgba(249,115,22,0.1)] relative group">
              <img
                src="/images/about-academy.jpg"
                alt="Mester Alex Goule"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 left-0 p-8">
                <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Mester Alex Goule</p>
                <p className="text-black text-[10px] font-bold uppercase tracking-[0.3em]">Fundador & Grão-Mestre</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 right-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i }}
                  className="bg-black/90 backdrop-blur-xl border border-orange-500/30 p-6 rounded-2xl shadow-2xl"
                >
                  <div className="text-orange-500 mb-3">{stat.icon}</div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">{stat.title}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Sobre a Academia</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Excelência em <br />
              <span className="text-orange-500">Artes Marciais</span>
            </h3>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Na MozTangSooDo, não ensinamos apenas a lutar. Ensinamos a viver com propósito, disciplina e respeito. Com mais de três décadas de história em Maputo, somos referência mundial em Tang Soo Do.
            </p>

            <div className="space-y-6">
              {[
                "Treino adaptado às necessidades individuais",
                "Foco no crescimento físico, mental e emocional",
                "Aberto a todas as idades, géneros e etnias",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
