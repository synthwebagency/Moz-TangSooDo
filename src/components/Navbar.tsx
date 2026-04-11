import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ACADEMY_NAME } from "../constants/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Programas", href: "/#programas" },
    { name: "Crianças", href: "/#criancas" },
    { name: "Galeria", href: "/#galeria" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-20 h-20
           flex items-center justify-center group-hover:scale-110 transition-transform">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white uppercase">
              {ACADEMY_NAME}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest">
              Inscreva-se
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 bg-white/5 rounded-full text-orange-500 hover:bg-white/10 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white hover:text-orange-500 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length }}
                className="mt-8 w-full py-6 bg-orange-500 text-black font-black rounded-2xl uppercase tracking-[0.2em] text-sm shadow-[0_0_50px_rgba(249,115,22,0.3)]"
              >
                Inscreva-se Agora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
