import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Trophy, Clock, Users, Quote } from "lucide-react";
import { PROGRAMS, SHINGOULE_TEXT } from "../constants/content";
import { useEffect } from "react";

export default function ProgramDetail() {
  const { id } = useParams();
  const program = PROGRAMS.find((p) => p.id === id);
  const isShinGoule = id === "shingoule";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Programa Não Encontrado</h1>
          <Link to="/" className="px-8 py-4 bg-orange-500 text-black font-bold rounded-xl uppercase tracking-widest">
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest mb-12 hover:text-orange-400 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Início
        </Link>

        {isShinGoule ? (
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-orange-500 font-bold uppercase tracking-[0.3em] mb-4">{SHINGOULE_TEXT.intro}</h2>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                {SHINGOULE_TEXT.title}
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 border border-white/10 rounded-[40px] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-medium relative z-10">
                  {SHINGOULE_TEXT.content1}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 bg-orange-500/5 border border-orange-500/20 rounded-[40px]"
              >
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed italic">
                  {SHINGOULE_TEXT.content2}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative py-20 px-10 text-center"
              >
                <Quote className="w-20 h-20 text-orange-500/20 absolute top-0 left-1/2 -translate-x-1/2" />
                <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8 relative z-10">
                  {SHINGOULE_TEXT.quote}
                </p>
                <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm">
                  — {SHINGOULE_TEXT.author}
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                {program.title}
              </h1>
              <p className="text-2xl text-gray-400 mb-12 leading-relaxed font-medium">
                {program.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <Clock className="w-6 h-6 text-orange-500 mb-4" />
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Duração</h4>
                  <p className="text-gray-500 text-sm">60-90 minutos por sessão</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <Users className="w-6 h-6 text-orange-500 mb-4" />
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Nível</h4>
                  <p className="text-gray-500 text-sm">Todos os níveis (Iniciante a Avançado)</p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Benefícios Específicos</h3>
              <div className="space-y-4 mb-12">
                {program.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-auto px-12 py-6 bg-orange-500 text-black font-black rounded-2xl hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                Inscreva-se Agora
                <Trophy className="w-6 h-6" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className={`aspect-[4/5] rounded-[60px] overflow-hidden border border-orange-500/20 shadow-[0_0_50px_rgba(249,115,22,0.1)] flex items-center justify-center ${program.id === 'check-up-geral' ? 'p-16' : ''}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className={`w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ${program.id === 'check-up-geral' ? 'object-contain' : 'object-cover'}`}
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -bottom-10 -left-10 bg-black/90 backdrop-blur-xl border border-orange-500/30 p-10 rounded-[40px] shadow-2xl max-w-[280px]">
                <p className="text-orange-500 font-black uppercase text-xs tracking-widest mb-4">Destaque</p>
                <p className="text-white text-lg font-medium leading-tight">
                  "O treino de {program.title} mudou a minha vida em Maputo."
                </p>
                <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest">— Aluno de Elite</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  );
}
