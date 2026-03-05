import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Smile, ScanFace, X, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Treatment {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  benefits: string[];
  steps: string[];
}

const treatments: Treatment[] = [
  {
    id: 'implants',
    icon: <ScanFace className="w-8 h-8 stroke-[1.5]" />,
    title: 'Implantes dentários',
    shortDescription: 'Recupere função e estética com planejamento digital e tecnologia de ponta.',
    benefits: [
      'Aparência e sensação naturais',
      'Durabilidade de longo prazo',
      'Preservação da estrutura óssea'
    ],
    steps: [
      'Avaliação 3D e planejamento digital',
      'Instalação do implante (cirurgia guiada)',
      'Confecção e instalação da prótese final'
    ]
  },
  {
    id: 'aesthetics',
    icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />,
    title: 'Estética dental',
    shortDescription: 'Lentes e clareamento para um sorriso mais harmônico, com naturalidade.',
    benefits: [
      'Correção de cor e formato',
      'Resultados rápidos e previsíveis',
      'Desgaste dental mínimo'
    ],
    steps: [
      'Design do sorriso digital',
      'Prova do mock-up (teste do sorriso)',
      'Cimentação das lentes definitivas'
    ]
  },
  {
    id: 'ortho',
    icon: <Smile className="w-8 h-8 stroke-[1.5]" />,
    title: 'Ortodontia invisível',
    shortDescription: 'Alinhadores transparentes para corrigir o sorriso com discrição e conforto.',
    benefits: [
      'Praticamente invisível',
      'Removível para comer e higienizar',
      'Mais conforto que aparelhos fixos'
    ],
    steps: [
      'Escaneamento intraoral',
      'Planejamento virtual da movimentação',
      'Troca sequencial de alinhadores'
    ]
  }
];

export const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const openModal = (treatment: Treatment) => setSelectedTreatment(treatment);
  const closeModal = () => setSelectedTreatment(null);

  const scrollToAppointment = () => {
    closeModal();
    const element = document.getElementById('appointment');
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
    <section id="treatments" className="py-24 bg-white relative">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            Tratamentos <span className="italic text-gold-600">exclusivos</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto font-light">
            Soluções personalizadas para transformar sua saúde e autoestima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(treatment)}
              className="group cursor-pointer bg-stone-50 p-8 rounded-xl border border-transparent hover:border-gold-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="mb-6 text-stone-800 group-hover:text-gold-600 transition-colors">
                {treatment.icon}
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-stone-800">
                {treatment.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                {treatment.shortDescription}
              </p>
              <div className="flex items-center text-sm font-medium text-gold-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold-400 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 m-auto z-50 w-full max-w-2xl h-fit max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gold-50 rounded-full text-gold-600">
                  {selectedTreatment.icon}
                </div>
                <h3 className="text-3xl font-serif text-stone-900">
                  {selectedTreatment.title}
                </h3>
              </div>

              <p className="text-lg text-stone-600 font-light mb-8 leading-relaxed">
                {selectedTreatment.shortDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
                    Benefícios
                  </h4>
                  <ul className="space-y-3">
                    {selectedTreatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600">
                        <Check className="w-5 h-5 text-gold-500 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
                    Como funciona
                  </h4>
                  <ul className="space-y-4">
                    {selectedTreatment.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-stone-100 text-xs font-bold text-stone-500 shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={scrollToAppointment} size="lg" className="w-full md:w-auto">
                  Agendar consulta
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
