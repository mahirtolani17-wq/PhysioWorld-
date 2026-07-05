import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 flex justify-between items-center transition-all">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://i.ibb.co/Tq49ZFkT/Screenshot-2026-07-05-at-8-36-31-PM-removebg-preview.png" alt="PhysioWorld Logo" className="h-8 sm:h-10 w-auto" />
            <span className="font-serif font-bold text-brand-blue text-base sm:text-xl leading-tight flex flex-col justify-center">
              PhysioWorld
              <span className="text-[10px] sm:text-xs font-sans font-medium text-gray-600 hidden sm:block">Physiotherapy Clinic</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-brand-blue hover:text-brand-green font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="tel:09824074480" className="flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-md">
              <Phone size={16} />
              <span>098240 74480</span>
            </a>
          </div>

          <button className="md:hidden text-brand-blue p-2 bg-white/50 rounded-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-[90px] left-4 right-4 bg-white/80 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-brand-blue font-medium text-lg border-b border-white/40 pb-3"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
