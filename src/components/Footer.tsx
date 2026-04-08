import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { ACADEMY_NAME, CONTACT_INFO } from "../constants/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: "https://share.google/Y30mYOfU5P0rKXWR7" },
    { Icon: Facebook, href: "https://share.google/5fLuznNz4OghmykCK" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                {ACADEMY_NAME}
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevando o espírito humano através da disciplina e excelência nas artes marciais. Junte-se à elite em Maputo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Links Rápidos</h4>
            <ul className="space-y-4">
              {["Início", "Sobre", "Programas", "Crianças", "Galeria", "Contacto"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-orange-500 transition-colors text-sm uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Programas</h4>
            <ul className="space-y-4">
              {["Tang Soo Do", "ShinGoule", "Fisioterapia", "Check-up Geral"].map((link) => (
                <li key={link}>
                  <Link to={`/programas/${link.toLowerCase().replace(/ /g, "-")}`} className="text-gray-500 hover:text-orange-500 transition-colors text-sm uppercase tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} {ACADEMY_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-[0.2em] hover:text-orange-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-[0.2em] hover:text-orange-500 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
