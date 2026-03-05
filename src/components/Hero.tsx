import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Consultório odontológico moderno"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:via-white/50" />
      </div>

      <div className="luxury-container relative z-10 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-sm font-medium tracking-widest text-gold-600 uppercase mb-4">
            Consultório odontológico moderno
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-6">
            Sorriso perfeito começa com <span className="italic text-gold-600">precisão</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-light">
            Tratamentos odontológicos avançados com tecnologia digital e atendimento humanizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('appointment')}
              className="shadow-lg shadow-stone-900/10"
            >
              Agendar consulta
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('treatments')}
              className="bg-white/50 backdrop-blur-sm border-stone-800 hover:bg-white"
            >
              Ver tratamentos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
