import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Star, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT_INFO, PARTNERS } from "../constants/content";
import { getLocationInfo } from "../lib/gemini";

export default function Contact() {
  const [locationInfo, setLocationInfo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocationInfo = async () => {
    setIsLoading(true);
    const info = await getLocationInfo();
    setLocationInfo(info);
    setIsLoading(false);
  };

  return (
    <section id="contacto" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Localização & Contactos</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
              Venha <span className="text-orange-500">Treinar</span> Connosco
            </h3>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-orange-500 rounded-2xl text-black group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Endereço</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{CONTACT_INFO.address}</p>
                  <button 
                    onClick={fetchLocationInfo}
                    disabled={isLoading}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest hover:text-orange-400 transition-colors disabled:opacity-50"
                  >
                    <Info className="w-4 h-4" />
                    {isLoading ? "A carregar..." : "Ver detalhes da localização (AI)"}
                  </button>
                  {locationInfo && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-6 bg-white/5 border border-orange-500/20 rounded-2xl text-sm text-gray-300 leading-relaxed"
                    >
                      {locationInfo}
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-orange-500 rounded-2xl text-black group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Telefones</h4>
                  {CONTACT_INFO.phones.map((phone) => (
                    <p key={phone} className="text-gray-400 text-lg leading-relaxed">{phone}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-orange-500 rounded-2xl text-black group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Email</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-[40px]">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
                <span className="ml-2 text-white font-black uppercase text-sm tracking-widest">5 Estrelas</span>
              </div>
              <p className="text-gray-400 italic text-lg leading-relaxed">
                "A melhor academia de artes marciais em Moçambique. Disciplina e excelência em cada treino."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="bg-white/5 border border-white/10 p-10 rounded-[60px]">
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-500" />
                Horário de Funcionamento
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Segunda a Sexta</span>
                  <span className="text-white font-black">08:00 – 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Sábado</span>
                  <span className="text-white font-black">08:00 – 12:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Domingo</span>
                  <span className="text-orange-500 font-black uppercase">Fechado</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-8 text-center">Nossos Parceiros</h4>
              <div className="flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                {PARTNERS.map((partner) => (
                  <span key={partner} className="text-3xl font-black text-white tracking-tighter uppercase">
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.65487654321!2d32.6100!3d-25.8900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6900000000000%3A0x0!2zTW96VGFuZ1Nvb0Rv!5e0!3m2!1spt-PT!2smz!4v1712580000000!5m2!1spt-PT!2smz"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20 rounded-[40px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
