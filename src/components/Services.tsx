import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          </Reveal>
          <TypeReveal
            as="h3"
            text="Comprehensive Care for Every Stage of Life"
            className="text-4xl sm:text-5xl font-serif font-bold text-brand-blue mb-8 leading-[1.1]"
            delay={0.2}
          />
          <Reveal delay={0.4}>
            <p className="text-gray-600 text-xl font-light">We offer a wide range of specialized treatments tailored to your specific condition and recovery goals.</p>
          </Reveal>
        </div>

        <Reveal delay={0.5} className="flex justify-center">
          <Link to="/services" className="inline-flex justify-center items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-xl shadow-brand-blue/20 group">
            Explore All Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
