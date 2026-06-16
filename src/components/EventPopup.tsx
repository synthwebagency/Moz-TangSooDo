import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MapPin, Play, Image as ImageIcon, Sparkles, Film } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
}

// Exactly 9 image placeholders (All with Gaza and Inhambane province themes)
const eventMediaItems: MediaItem[] = [
  { id: 1, type: "image", src: "/images/gaza-inhambane-1.jpg", title: "Cerimónia de Abertura" },
  { id: 2, type: "image", src: "/images/gaza-inhambane-2.jpg", title: "Demonstração de Formas (Hyung)" },
  { id: 3, type: "image", src: "/images/gaza-inhambane-3.jpg", title: "Combate / Sparring Gaza" },
  { id: 4, type: "image", src: "/images/gaza-inhambane-4.jpg", title: "Atletas de Inhambane" },
  { id: 5, type: "image", src: "/images/gaza-inhambane-5.jpg", title: "Técnica de Chutos Altos" },
  { id: 6, type: "image", src: "/images/gaza-inhambane-6.jpg", title: "Defesa Pessoal Prática" },
  { id: 7, type: "image", src: "/images/gaza-inhambane-7.jpg", title: "Entrega de Medalhas" },
  { id: 8, type: "image", src: "/images/gaza-inhambane-8.jpg", title: "Graduação de Cintos" },
  { id: 9, type: "image", src: "/images/gaza-inhambane-9.jpg", title: "Foto de Grupo Final" },
];

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({});
  const [mediaErrors, setMediaErrors] = useState<Record<number, boolean>>({});

  // Automatically open the pop-up on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Control body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleVerMais = () => {
    setIsOpen(false);
    const gallerySection = document.getElementById("galeria");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Darkened and blurred background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-4xl bg-[#0a0a0a]/95 border border-orange-500/30 rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.15)] flex flex-col max-h-[85vh] sm:max-h-[90vh]"
          >
            {/* Top orange glowing line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              aria-label="Close pop-up"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Container with iOS support */}
            <div className="overflow-y-auto p-4 md:p-10 scrollbar-thin scrollbar-thumb-orange-500/30 scrollbar-track-transparent flex-1 -webkit-overflow-scrolling-touch touch-pan-y overscroll-contain">
              
              {/* Header / Badging */}
              <div className="text-center mt-6 sm:mt-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.15em] mb-4 text-center justify-center max-w-full"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" />
                  <span>Campeonato de qualificação provínciais de Gaza e Inhambane</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none"
                >
                  Eventos <span className="text-orange-500">Passados</span>
                </motion.h2>

                {/* Date & Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 text-gray-400 text-xs sm:text-sm font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>Sábado, 13 de Junho de 2026</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Moçambique</span>
                  </div>
                </motion.div>
              </div>

              {/* Media Section: Horizontal flow gallery inside popup */}
              <div className="mb-4">
                <h4 className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 animate-pulse" />
                  Galeria de Qualificação Regional (9 Imagens)
                </h4>
                
                {/* Horizontal scroll container suited for mobile touch/swipe */}
                <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-orange-500/40 scrollbar-track-white/5 -webkit-overflow-scrolling-touch touch-pan-x overscroll-x-contain">
                  {eventMediaItems.map((item) => {
                    const hasError = mediaErrors[item.id];
                    const isLoaded = loadedMedia[item.id];

                    return (
                      <div
                        key={item.id}
                        className="flex-none w-[240px] sm:w-[280px] md:w-[300px] snap-start bg-[#121212] border border-white/10 hover:border-orange-500/50 rounded-2xl overflow-hidden group/item relative transition-all duration-300 shadow-lg"
                      >
                        <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
                          
                          {/* Image Badge */}
                          <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-orange-500 flex items-center gap-1">
                            <ImageIcon className="w-2.5 h-2.5" />
                            Foto
                          </div>

                          {/* Skeleton Shimmer loader when image hasn't loaded */}
                          {!isLoaded && !hasError && (
                            <div className="absolute inset-0 bg-[#161616] flex flex-col items-center justify-center p-4 text-center">
                              <div className="w-8 h-8 rounded-full border-2 border-orange-500/30 border-t-orange-500 animate-spin mb-2" />
                              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                A carregar...
                              </span>
                            </div>
                          )}

                          {hasError ? (
                            <div className="absolute inset-0 bg-[#0d0d0d] border border-orange-500/10 rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                              <ImageIcon className="w-7 h-7 text-orange-500/30 mb-1.5" />
                              <p className="text-white font-black text-[11px] uppercase tracking-wide px-1 line-clamp-1">{item.title}</p>
                              <div className="mt-2 w-full px-2">
                                <p className="text-[8.5px] text-gray-500 lowercase">carregar ficheiro como:</p>
                                <code className="block text-[9.5px] text-orange-400 font-mono bg-black/80 px-1.5 py-1 rounded mt-1 border border-white/5 select-all truncate">
                                  {item.src.split('/').pop()}
                                </code>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover/item:scale-105 transition-all duration-500"
                              loading="lazy"
                              onLoad={() => setLoadedMedia(prev => ({ ...prev, [item.id]: true }))}
                              onError={() => {
                                setLoadedMedia(prev => ({ ...prev, [item.id]: true }));
                                setMediaErrors(prev => ({ ...prev, [item.id]: true }));
                              }}
                            />
                          )}

                          {/* Transparent Gradient Protection overlay */}
                          {!hasError && <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Actions and Button */}
            <div className="p-4 sm:p-6 bg-black/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] sm:text-xs text-gray-500 tracking-wider font-semibold text-center sm:text-left">
                MozTangSooDo • Campeonatos & Conquistas de Elite
              </span>
              <button
                onClick={handleVerMais}
                className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-sm rounded-xl tracking-widest transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2"
              >
                <span>Ver Mais Eventos</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
