import { motion } from "motion/react";
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-orange-500/20 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 bg-orange-500 text-black font-bold rounded-xl uppercase tracking-widest">
            Inscreva-se Agora
          </button>
        </motion.div>
      )}
    </nav>
  );
}
