import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "O atendimento foi impecável. Meu sorriso mudou completamente.",
    author: "Mariana S.",
    role: "Paciente • Estética dental"
  },
  {
    id: 2,
    text: "Profissionais de altíssimo nível e uma estrutura impecável. Recomendo com total confiança.",
    author: "Carlos E.",
    role: "Paciente • Implantes dentários"
  },
  {
    id: 3,
    text: "A tecnologia do tratamento me trouxe muita segurança. Resultado natural e exatamente como eu esperava.",
    author: "Fernanda L.",
    role: "Paciente • Ortodontia invisível"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">
            Histórias de <span className="italic text-gold-600">transformação</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-stone-600 font-light italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-serif text-lg text-stone-900">{item.author}</h4>
                <span className="text-xs text-stone-400 uppercase tracking-wider">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
