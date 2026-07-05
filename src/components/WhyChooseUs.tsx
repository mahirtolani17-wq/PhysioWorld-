import { Target, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <Target size={32} />, title: 'Root Cause Approach', desc: 'We don\'t just treat symptoms; we identify and address the underlying biomechanical issues.' },
    { icon: <Clock size={32} />, title: 'No Rushed Sessions', desc: 'Every patient gets dedicated 1-on-1 time with the physiotherapist. Your recovery is our priority.' },
    { icon: <ShieldCheck size={32} />, title: 'Evidence-Based', desc: 'Our treatment protocols are backed by the latest clinical research and proven medical practices.' },
    { icon: <HeartPulse size={32} />, title: 'Compassionate Care', desc: 'A warm, encouraging environment that makes your rehabilitation journey positive and stress-free.' },
  ];

  return (
    <section className="py-32 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal delay={0.1}>
            <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">The PhysioWorld Difference</h2>
          </Reveal>
          <TypeReveal
            as="h3"
            text="Why Patients Choose Us"
            className="text-5xl font-serif font-bold mb-8"
            delay={0.2}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <Reveal
              key={idx}
              delay={0.2 + idx * 0.1}
              className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors duration-500"
            >
              <div className="bg-brand-green text-brand-blue w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-inner">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{reason.title}</h4>
              <p className="text-white/70 text-base leading-relaxed font-light">{reason.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
