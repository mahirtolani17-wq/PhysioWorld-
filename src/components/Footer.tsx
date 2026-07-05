import { Phone, MapPin, Mail, Instagram, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal delay={0.1}>
          <img src="https://i.ibb.co/Tq49ZFkT/Screenshot-2026-07-05-at-8-36-31-PM-removebg-preview.png" alt="PhysioWorld Logo" className="h-12 w-auto mx-auto mb-6 opacity-90 drop-shadow-lg" />
          <h2 className="font-serif font-bold text-3xl mb-4">PhysioWorld</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto font-light">Expert physiotherapy care dedicated to treating the root cause of your pain.</p>
          <div className="flex justify-center mb-10">
            <a href="https://www.instagram.com/physioworldclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={0.3} className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-white/80 font-medium">
          <a href="/#about" className="hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-bold">About</a>
          <a href="/services" className="hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-bold">Services</a>
          <a href="/#reviews" className="hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-bold">Patient Stories</a>
          <a href="/#contact" className="hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-bold">Location & Contact</a>
        </Reveal>

        <Reveal delay={0.5} className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} PhysioWorld. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <Heart size={14} className="text-brand-green" /> in India</p>
        </Reveal>
      </div>
    </footer>
  );
}
