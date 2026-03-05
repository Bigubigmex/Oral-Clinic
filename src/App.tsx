import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Treatments } from '@/components/Treatments';
import { Differentials } from '@/components/Differentials';
import { Testimonials } from '@/components/Testimonials';
import { Appointment } from '@/components/Appointment';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-gold-200 selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
