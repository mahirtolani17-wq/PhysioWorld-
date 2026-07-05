import { Activity, Bone, Brain, Baby, ActivitySquare, Home, PersonStanding, Sparkles } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { TypeReveal } from '../components/TypeReveal';
import LocationContact from '../components/LocationContact';

export default function ServicesPage() {
  const services = [
    { title: 'Sports Injury Rehab', icon: <Activity size={32} />, desc: 'Specialized care to get athletes back in the game safely and quickly.' },
    { title: 'Post-Surgery Physio', icon: <Bone size={32} />, desc: 'Structured rehabilitation to restore mobility and strength after operations.' },
    { title: 'Back & Neck Pain', icon: <PersonStanding size={32} />, desc: 'Targeted therapies to relieve chronic pain and correct spinal alignment.' },
    { title: 'Neurological Physio', icon: <Brain size={32} />, desc: 'Treatment for conditions like stroke, Parkinson’s, and nerve injuries.' },
    { title: 'Pediatric Physio', icon: <Baby size={32} />, desc: 'Gentle, engaging therapies to support children’s physical development.' },
    { title: 'Geriatric Care', icon: <ActivitySquare size={32} />, desc: 'Improving balance, joint mobility, and quality of life for seniors.' },
    { title: 'Posture Correction', icon: <Sparkles size={32} />, desc: 'Ergonomic assessments and exercises to fix poor postural habits.' },
    { title: 'Home Visits', icon: <Home size={32} />, desc: 'Professional physiotherapy delivered in the comfort of your own home.' },
  ];

  return (
    <main>
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -translate-x-1/3 mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <Reveal delay={0.1}>
              <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">What We Do</h2>
            </Reveal>
            <TypeReveal
              as="h1"
              text="Our Specialized Services"
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-brand-blue mb-8 leading-[1.1]"
              delay={0.2}
            />
            <Reveal delay={0.4}>
              <p className="text-gray-600 text-xl font-light">
                Discover our comprehensive range of treatments designed to help you move better, feel better, and live fully.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, idx) => (
              <Reveal
                key={idx}
                delay={0.1 + (idx * 0.05)}
                className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/60 shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:bg-white transition-all duration-500 flex flex-col items-start"
              >
                <div className="bg-brand-blue text-white w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-md">
                  {svc.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-brand-blue">{svc.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{svc.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      <LocationContact />
    </main>
  );
}
