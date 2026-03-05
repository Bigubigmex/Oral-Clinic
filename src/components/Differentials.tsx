import React from 'react';
import { motion } from 'motion/react';
import { Box, UserCheck, Award, Gem } from 'lucide-react';

const differentials = [
  {
    icon: <Box className="w-6 h-6" />,
    text: "Tecnologia 3D"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    text: "Atendimento personalizado"
  },
  {
    icon: <Award className="w-6 h-6" />,
    text: "Especialistas certificados"
  },
  {
    icon: <Gem className="w-6 h-6" />,
    text: "Ambiente premium"
  }
];

export const Differentials = () => {
  return (
    <section id="differentials" className="py-20 bg-stone-900 text-white">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-4">
            Diferenciais OralPrime
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full border border-white/10 group-hover:border-gold-400/50 group-hover:bg-gold-400/10 transition-all duration-500">
                <div className="text-gold-400 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium tracking-wide text-stone-100">
                {item.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
