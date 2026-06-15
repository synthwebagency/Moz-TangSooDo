import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, ExternalLink, Sparkles, AlertCircle } from "lucide-react";

export default function BookPromo() {
  const [coverLoaded, setCoverLoaded] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const googleDriveLink = "https://drive.google.com/file/d/1sPPS9VoqGNKBPwgw0j8afj5jsqWDBgah/view?usp=sharing";

  return (
    <section className="py-24 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <Sparkles className="w-4.5 h-4.5 animate-pulse" />
            Lançamento Exclusivo do Livro
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Comprar <span className="text-orange-500">Agora</span>
          </motion.h2>
        </div>

        {/* 2-Column responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 2 Placeholder Images arranged beautifully */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Book Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              <img
                src="/images/book-cover.jpg"
                alt="ShinGoule Kigong - Capa do Livro"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onLoad={() => setCoverLoaded(true)}
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant Placeholder back-up overlay if cover starts as empty/missing */}
              {!coverLoaded && (
                <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center border-l-4 border-orange-500">
                  <BookOpen className="w-12 h-12 text-orange-500/40 mb-3" />
                  <span className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-1">Capa do Livro</span>
                  <p className="text-[10px] text-zinc-500 leading-tight">Nomeie o arquivo como <code className="text-white">book-cover.jpg</code> na pasta de imagens</p>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>

            {/* Book Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[3/4] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-500/40 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.6)] mt-8 lg:mt-12"
            >
              <img
                src="/images/book-promo.jpg"
                alt="ShinGoule Kigong - Contracapa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onLoad={() => setPreviewLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Elegant Placeholder back-up overlay if preview starts as empty/missing */}
              {!previewLoaded && (
                <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center border-r-4 border-orange-500">
                  <Sparkles className="w-12 h-12 text-orange-500/40 mb-3" />
                  <span className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-1">Contra-Capa</span>
                  <p className="text-[10px] text-zinc-500 leading-tight">Nomeie o arquivo como <code className="text-white">book-promo.jpg</code> na pasta de imagens</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Rich Text Content & Direct Google Drive Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest uppercase">
                <span className="h-[2px] w-8 bg-orange-500 rounded-full" />
                Filosofia e Prática
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                ShinGoule@kigong <br />
                <span className="text-orange-500">A Harmonia com o Infinito</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed">
                <p>
                  Uma nova jornada começa em 4 de julho. Descubra a história e a filosofia do{" "}
                  <strong className="text-white font-bold">ShinGoule@kigong</strong>, um caminho marcial espiritual fundado pelo{" "}
                  Mestre Alex Rodrigues Bacela Goule que une movimento, força interior e harmonia com o infinito.
                </p>
                <p>
                  Mais do que uma arte marcial, este livro é um convite para despertar o poder interior,
                  transcender o físico e conectar-se com o universo através da sabedoria ancestral e da prática moderna.
                </p>
              </div>

              {/* Informative release banner */}
              <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5 animate-pulse" />
                <p className="text-sm text-zinc-400">
                  <strong className="text-orange-500">Disponível em 4 de julho</strong> — inicie sua jornada rumo ao despertar. Faça já a reserva ou consulte o documento do projeto.
                </p>
              </div>

              {/* Responsive container for Button link next to the description */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={googleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_25px_rgba(249,115,22,0.25)] flex items-center justify-center gap-3 group"
                >
                  <span>Link do Google Drive</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="text-xs text-zinc-500 text-center sm:text-left">
                  Visualizar documento no <br className="hidden sm:block" />
                  <span className="text-white font-semibold">Google Drive Workspace</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
