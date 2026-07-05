import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

export default function LocationContact() {
  return (
    <section id="contact" className="py-32 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">Location & Contact</h2>
            </Reveal>
            <TypeReveal
              as="h3"
              text="Find us in Ahmedabad"
              className="text-5xl lg:text-6xl font-serif font-bold text-brand-blue mb-12 leading-tight"
              delay={0.2}
            />
            
            <div className="space-y-8 mb-12">
              <Reveal delay={0.3} className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-brand-green shadow-sm border border-white/50">
                  <MapPin size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-xl mb-2">Clinic Address</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-3">
                     Karnavati Infinity Living, Bhat,<br />
                     Ahmedabad, Gujarat 382428
                  </p>
                  <a href="https://maps.app.goo.gl/XcTovdp4Fsyg4Vjm9?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-blue font-bold text-sm uppercase tracking-wider hover:text-brand-green transition-colors">
                    Get Directions <ExternalLink size={16} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4} className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-brand-green shadow-sm border border-white/50">
                  <Phone size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-xl mb-2">Call Us</h4>
                  <a href="tel:09824074480" className="text-gray-600 text-lg hover:text-brand-green transition-colors">098240 74480</a>
                </div>
              </Reveal>

              <Reveal delay={0.5} className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-brand-green shadow-sm border border-white/50">
                  <Clock size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-xl mb-2">Opening Hours</h4>
                  <table className="w-full text-gray-600 max-w-sm text-lg">
                    <tbody>
                      <tr><td className="py-1">Mon - Sat</td><td className="font-medium text-right">8:00 AM - 8:00 PM</td></tr>
                      <tr><td className="py-1 text-gray-400">Sunday</td><td className="font-medium text-right text-gray-400">Closed</td></tr>
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.6}>
            <div className="aspect-square lg:aspect-[4/5] w-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_32px_64px_rgba(0,0,0,0.05)] rounded-[3rem] overflow-hidden p-4">
              <div className="w-full h-full rounded-[2.5rem] bg-gray-200 overflow-hidden relative">
                 <iframe 
                   title="PhysioWorld Location"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   loading="lazy" 
                   allowFullScreen 
                   src="https://maps.google.com/maps?q=Karnavati%20Infinity%20Living,%20Bhat,%20Ahmedabad,%20Gujarat%20382428&t=&z=15&ie=UTF8&iwloc=&output=embed">
                 </iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
