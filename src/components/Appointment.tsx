import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Input, Select, Textarea } from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
};

export const Appointment = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', data);
      setStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 -z-10 skew-x-12 translate-x-32 hidden lg:block" />

      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
              Agende sua <br/>
              <span className="italic text-gold-600">avaliação hoje</span>
            </h2>
            <p className="text-lg text-stone-600 font-light mb-8 max-w-md">
              Dê o primeiro passo para o sorriso que você merece. Nossa equipe entrará em contato para confirmar seu horário.
            </p>
            
            <div className="hidden md:block p-6 bg-stone-900 text-white rounded-lg max-w-sm">
              <p className="text-sm uppercase tracking-widest text-gold-400 mb-2">Contato direto</p>
              <p className="text-2xl font-serif mb-1">(11) 99999-9999</p>
              <p className="text-stone-400 text-sm">contato@oralprime.com.br</p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-stone-200 border border-stone-100"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-2">Solicitação enviada</h3>
                  <p className="text-stone-600">
                    Em breve nossa equipe entrará em contato para confirmar sua avaliação.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setStatus('idle')}
                  >
                    Nova solicitação
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input
                    label="Nome completo"
                    placeholder="Seu nome"
                    {...register('fullName', { 
                      required: 'Informe seu nome completo.',
                      validate: value => value.trim().split(' ').length >= 2 || 'Informe seu nome completo.'
                    })}
                    error={errors.fullName?.message}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      label="Telefone / WhatsApp"
                      placeholder="(00) 00000-0000"
                      {...register('phone', { required: 'Informe um telefone válido.' })}
                      error={errors.phone?.message}
                    />
                    <Input
                      label="E-mail"
                      placeholder="seu@email.com"
                      type="email"
                      {...register('email', { 
                        required: 'Informe um e-mail válido.',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Informe um e-mail válido."
                        }
                      })}
                      error={errors.email?.message}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Select
                      label="Tratamento de interesse"
                      placeholder="Selecione..."
                      options={[
                        { value: 'implants', label: 'Implantes dentários' },
                        { value: 'aesthetics', label: 'Estética dental' },
                        { value: 'invisible_ortho', label: 'Ortodontia invisível' },
                        { value: 'evaluation', label: 'Avaliação geral' }
                      ]}
                      {...register('interest', { required: 'Selecione uma opção.' })}
                      error={errors.interest?.message}
                    />
                    <Select
                      label="Preferência de horário"
                      placeholder="Selecione..."
                      options={[
                        { value: 'morning', label: 'Manhã' },
                        { value: 'afternoon', label: 'Tarde' },
                        { value: 'evening', label: 'Noite' }
                      ]}
                      {...register('preferredTime', { required: 'Selecione um período.' })}
                      error={errors.preferredTime?.message}
                    />
                  </div>

                  <Input
                    label="Data preferencial"
                    type="date"
                    placeholder="dd/mm/aaaa"
                    {...register('preferredDate', { required: 'Selecione uma data.' })}
                    error={errors.preferredDate?.message}
                  />

                  <Textarea
                    label="Mensagem (opcional)"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    {...register('message')}
                  />

                  <div className="pt-4 space-y-3">
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg" 
                      isLoading={status === 'loading'}
                    >
                      Enviar solicitação
                    </Button>
                    
                    <a 
                      href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-12 text-stone-600 bg-stone-100 hover:bg-green-50 hover:text-green-700 rounded-sm transition-colors font-medium"
                    >
                      Agendar via WhatsApp
                    </a>
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-sm text-sm">
                      <AlertCircle size={16} />
                      <span>Não foi possível enviar agora. Tente novamente em instantes.</span>
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
