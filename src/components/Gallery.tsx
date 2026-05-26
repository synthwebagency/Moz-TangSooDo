import { motion } from "motion/react";

interface GalleryItem {
  type: "image" | "video";
  src: string;
}

const galleryItems: GalleryItem[] = [
  { type: "video", src: "/images/gal-video.mp4" },
  { type: "image", src: "/images/gal-1.jpg" },
  { type: "image", src: "/images/gal-2.jpg" },
  { type: "image", src: "/images/gal-3.jpg" },
  { type: "image", src: "/images/gal-4.jpg" },
  { type: "image", src: "/images/gal-5.jpg" },
  { type: "image", src: "/images/gal-6.jpg" },
  { type: "image", src: "/images/gal-7.jpg" },
  { type: "image", src: "/images/gal-8.jpg" },
  { type: "image", src: "/images/gal-9.jpg" },
  { type: "image", src: "/images/gal-10.jpg" },
  { type: "image", src: "/images/gal-11.jpg" },
  { type: "image", src: "/images/gal-12.jpg" },
  { type: "image", src: "/images/gal-13.jpg" },
  { type: "image", src: "/images/gal-14.jpg" },
  { type: "image", src: "/images/gal-15.jpg" },
  { type: "image", src: "/images/gal-16.jpg" },
  { type: "image", src: "/images/gal-17.jpg" },
  { type: "video", src: "/images/event-video-1.mp4" },
  { type: "image", src: "/images/event-1.jpg" },
  { type: "image", src: "/images/event-2.jpg" },
  { type: "video", src: "/images/event-video-2.mp4" },
  { type: "image", src: "/images/event-3.jpg" },
  { type: "image", src: "/images/event-4.jpg" },
  { type: "image", src: "/images/event-5.jpg" },
  { type: "video", src: "/images/event-video-3.mp4" },
  { type: "image", src: "/images/event-6.jpg" },
  { type: "image", src: "/images/event-7.jpg" },
  { type: "image", src: "/images/event-8.jpg" },
  { type: "image", src: "/images/event-9.jpg" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4"
          >
            Galeria de Elite
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
          >
            A Nossa <span className="text-orange-500">Jornada</span>
          </motion.h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 break-inside-avoid shadow-2xl"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold uppercase text-[10px] tracking-[0.3em]">
                  {item.type === "video" ? "MozTangSooDo em Ação" : "MozTangSooDo Elite"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
