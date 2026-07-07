import { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

const locations = [
  {
    id: 'bhat',
    name: 'Bhat Clinic',
    address: 'Karnavati Infinity Living, Bhat, Ahmedabad, Gujarat 382428',
    link: 'https://maps.app.goo.gl/XcTovdp4Fsyg4Vjm9?g_st=ic',
    embedUrl: 'https://maps.google.com/maps?q=Karnavati%20Infinity%20Living,%20Bhat,%20Ahmedabad,%20Gujarat%20382428&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'nana-chiloda',
    name: 'Nana Chiloda Clinic',
    address: '4, Rashmi Antilia, opp. Ved Bunglows, Nana Chiloda, Ahmedabad, Gujarat 382340',
    link: 'https://maps.app.goo.gl/ZSCGyayVmpqqHZjA9?g_st=ic',
    embedUrl: 'https://maps.google.com/maps?q=4,%20Rashmi%20Antilia,%20opp.%20Ved%20Bunglows,%20Nana%20Chiloda,%20Ahmedabad,%20Gujarat%20382340&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export default function LocationContact() {
  const [activeTab, setActiveTab] = useState(locations[0].id);
  const activeLocation = locations.find(loc => loc.id === activeTab) || locations[0];

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
              className="text-5xl lg:text-6xl font-serif font-bold text-brand-blue mb-8 leading-tight"
              delay={0.2}
            />

            <Reveal delay={0.25} className="mb-10">
              <div className="inline-flex bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/50 shadow-sm">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveTab(loc.id)}
                    className={`px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                      activeTab === loc.id
                        ? 'bg-brand-blue text-white shadow-md'
                        : 'text-gray-600 hover:text-brand-blue hover:bg-white/40'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </Reveal>
            
            <div className="space-y-8 mb-12">
              <Reveal delay={0.3} className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 text-brand-green shadow-sm border border-white/50">
                  <MapPin size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-xl mb-2">Clinic Address</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-3">
                     {activeLocation.address.split(', ').map((line, i, arr) => (
                       <span key={i}>
                         {line}{i < arr.length - 1 ? ', ' : ''}
                         {i === 1 && <br />}
                       </span>
                     ))}
                  </p>
                  <a href={activeLocation.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-blue font-bold text-sm uppercase tracking-wider hover:text-brand-green transition-colors">
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
                   key={activeLocation.id}
                   title={`PhysioWorld Location - ${activeLocation.name}`}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   loading="lazy" 
                   allowFullScreen 
                   src={activeLocation.embedUrl}>
                 </iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
