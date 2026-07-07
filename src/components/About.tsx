import { CheckCircle2, Star } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <Reveal delay={0.2}>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-[0_32px_64px_rgba(0,0,0,0.05)] p-4 bg-white/40 backdrop-blur-xl border border-gray-100">
                <div className="w-full h-full rounded-[2.5rem] bg-[#f8f9fa] flex items-center justify-center overflow-hidden relative">
                  <img src="https://i.ibb.co/HDTw9LXW/unnamed-13.jpg" alt="PhysioWorld Clinic" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.5} className="absolute -bottom-8 right-2 sm:-bottom-10 sm:-right-4 lg:-right-12 z-20">
              <div className="bg-white/70 backdrop-blur-3xl p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white max-w-[280px] sm:max-w-sm">
                <div className="flex gap-1 text-yellow-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="sm:w-5 sm:h-5" fill="currentColor" />)}
                </div>
                <p className="italic text-gray-800 text-sm sm:text-lg mb-3 sm:mb-4 leading-relaxed">"Good place for physiotherapy treatment. Very friendly and professional."</p>
                <p className="font-bold text-brand-blue text-[10px] sm:text-xs uppercase tracking-widest">— Recent Patient</p>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.1}>
              <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">About PhysioWorld</h2>
            </Reveal>
            <TypeReveal
              as="h3"
              text="Healing through movement, driven by compassion."
              className="text-5xl lg:text-6xl font-serif font-bold text-brand-blue leading-[1.1] mb-8"
              delay={0.2}
            />
            <Reveal delay={0.3}>
              <p className="text-gray-600 mb-6 text-xl leading-relaxed font-light">
                At PhysioWorld Physiotherapy Clinic, we believe that effective treatment requires more than just clinical expertise—it requires a positive environment and a dedicated partnership with your physiotherapist.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-600 mb-10 text-xl leading-relaxed font-light">
                Our clinic is known in Ahmedabad for its friendly staff, professional service, and unwavering commitment to helping patients return to their active lives pain-free.
              </p>
            </Reveal>
            
            <div className="space-y-5">
              {['Evidence-based treatment plans', 'Warm, welcoming environment', 'One-on-one focused attention', 'Modern rehabilitation techniques'].map((item, i) => (
                <Reveal key={i} delay={0.5 + i * 0.1} className="flex items-center gap-4">
                  <div className="bg-brand-green/20 rounded-full p-1.5">
                    <CheckCircle2 className="text-brand-green" size={24} />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
