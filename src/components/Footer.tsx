import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-white mb-4">OralPrime Clinic</h3>
            <p className="text-sm leading-relaxed mb-6">
              Odontologia premium com tecnologia e precisão. Transformando sorrisos com excelência e cuidado humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Links rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Sobre</a></li>
              <li><a href="#treatments" className="hover:text-gold-400 transition-colors">Tratamentos</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Depoimentos</a></li>
              <li><a href="#appointment" className="hover:text-gold-400 transition-colors">Agendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Tratamentos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Implantes dentários</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Estética dental</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Ortodontia invisível</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>Av. Paulista, 1000 — Bela Vista</li>
              <li>São Paulo — SP</li>
              <li className="pt-2 text-white">(11) 99999-9999</li>
              <li>contato@oralprime.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} OralPrime Clinic. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
