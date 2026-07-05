import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';
import { TypeReveal } from './TypeReveal';

export default function Testimonials() {
  const reviews = [
    { text: "Friendly staff, professional service, and a very positive environment. I felt completely taken care of during my recovery.", author: "P. Sharma" },
    { text: "Dr. Neha is incredibly warm and highly skilled. She explained my treatment clearly and made sure I was comfortable.", author: "A. Patel" },
    { text: "A genuinely good place for physiotherapy treatment. The clinic is clean, and the team is dedicated to getting results.", author: "R. Desai" }
  ];

  return (
    <section id="reviews" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4">Patient Stories</h2>
            </Reveal>
            <TypeReveal
              as="h3"
              text="Loved by our patients."
              className="text-5xl lg:text-6xl font-serif font-bold text-brand-blue"
              delay={0.2}
            />
          </div>
          <Reveal delay={0.4}>
            <div className="bg-white/40 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue">5.0</div>
                <div className="flex text-yellow-400 my-1 justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Google Reviews</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Based on 110+ reviews</div>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue text-xs font-bold hover:text-brand-green mt-2 inline-block transition-colors uppercase tracking-wider">Read all on Google →</a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Reveal
              key={idx}
              delay={0.2 + idx * 0.1}
              className="bg-[#f8f9fa] p-10 rounded-[2.5rem] shadow-sm relative hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100 transition-all duration-500"
            >
              <Quote className="text-brand-green/20 absolute top-8 right-8" size={64} />
              <div className="flex text-yellow-400 mb-8 relative z-10 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-10 relative z-10 leading-relaxed text-lg font-light">"{review.text}"</p>
              <div className="font-bold text-brand-blue relative z-10 uppercase tracking-widest text-sm">— {review.author}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
