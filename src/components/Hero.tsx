import { motion } from 'motion/react';
import { Star, ArrowRight, Phone } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

const images = [
  "https://i.ibb.co/HTyRYfZN/Screenshot-2026-07-07-at-11-42-53-AM.png",
  "https://i.ibb.co/fY4jqGYg/Screenshot-2026-07-07-at-11-43-39-AM.png",
  "https://i.ibb.co/s9tFNnTp/Screenshot-2026-07-07-at-11-43-57-AM.png",
  "https://i.ibb.co/q39BjFgt/Screenshot-2026-07-07-at-11-44-14-AM.png"
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-[#f8f9fa]">
      {/* Liquid background blobs */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-brand-green/20 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/3 translate-x-1/3 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-blue/10 rounded-full blur-[80px] sm:blur-[100px] -translate-x-1/3 mix-blend-multiply"></div>
      
      {/* Watermark Logo */}
      <div className="absolute top-[60%] lg:top-[70%] left-[20%] sm:left-[30%] lg:left-[40%] w-[250px] sm:w-[350px] opacity-[0.04] pointer-events-none blur-[2px] -translate-y-1/2 -rotate-12 z-0">
        <img src="https://i.ibb.co/20TbjFC2/Screenshot-2026-07-05-at-8-36-31-PM-removebg-preview.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-xl border border-white/60 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] mb-6 sm:mb-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-brand-blue">5.0 Google Rating</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:inline">(110+ Reviews)</span>
              </div>
            </Reveal>

            <TypeReveal
              as="h1"
              text="Move freely, live fully again."
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif font-bold text-brand-blue leading-[1.1] sm:leading-[1.05] tracking-tight mb-6 sm:mb-8"
              delay={0.2}
            />
            
            <Reveal delay={0.6}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-xl leading-relaxed font-light">
                Expert physiotherapy in Ahmedabad designed to treat the root cause of your pain, not just the symptoms.
              </p>
            </Reveal>

            <Reveal delay={0.8} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="/#contact" className="inline-flex justify-center items-center gap-3 bg-brand-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all group shadow-xl shadow-brand-blue/20 text-sm sm:text-base">
                Book an Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:09824074480" className="inline-flex justify-center items-center gap-3 bg-white/40 backdrop-blur-xl border border-white/60 text-brand-blue px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white/60 transition-all shadow-sm text-sm sm:text-base">
                <Phone size={20} />
                Call 098240 74480
              </a>
            </Reveal>
          </div>

          <div className="relative block mt-8 lg:mt-0">
            <Reveal delay={0.5}>
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_32px_64px_rgba(0,0,0,0.05)] p-4 sm:p-6">
                 <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden flex gap-4">
                    {/* Column 1 - Moving Up */}
                    <div className="w-1/2 flex flex-col gap-4 overflow-hidden relative">
                      <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                        className="flex flex-col gap-4 min-h-[200%]"
                      >
                        <img src={images[0]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        <img src={images[1]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        {/* Duplicates for infinite scroll */}
                        <img src={images[0]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        <img src={images[1]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                      </motion.div>
                    </div>
                    {/* Column 2 - Moving Down */}
                    <div className="w-1/2 flex flex-col gap-4 overflow-hidden relative">
                      <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                        className="flex flex-col gap-4 min-h-[200%]"
                      >
                        <img src={images[2]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        <img src={images[3]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        {/* Duplicates for infinite scroll */}
                        <img src={images[2]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                        <img src={images[3]} alt="Physiotherapy Visual" className="w-full object-cover rounded-xl sm:rounded-2xl shadow-sm" />
                      </motion.div>
                    </div>
                 </div>
              </div>
            </Reveal>
            
            {/* Floating glass card */}
            <Reveal delay={0.9} className="absolute -bottom-4 left-2 sm:bottom-10 sm:-left-16 z-20">
              <div className="bg-white/70 backdrop-blur-3xl border border-white/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.1)] max-w-[240px] sm:max-w-xs">
                <div className="flex gap-1.5 sm:gap-2 text-yellow-400 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />)}
                </div>
                <p className="text-gray-800 text-xs sm:text-sm font-medium mb-1">"Friendly staff, professional service."</p>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">— Recent Patient</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
