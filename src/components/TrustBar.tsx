import { Users, Star, Award, HeartPulse } from 'lucide-react';
import { Reveal } from './Reveal';
import { NumberTicker } from './NumberTicker';

export default function TrustBar() {
  const stats = [
    { icon: <Star className="text-yellow-400 drop-shadow-md" size={32} />, value: 5.0, decimal: 1, suffix: "", label: "Google Rating" },
    { icon: <Users className="text-brand-blue drop-shadow-md" size={32} />, value: 110, decimal: 0, suffix: "+", label: "Happy Patients" },
    { icon: <Award className="text-brand-green drop-shadow-md" size={32} />, value: 10, decimal: 0, suffix: "+", label: "Years Experience" },
    { icon: <HeartPulse className="text-brand-blue drop-shadow-md" size={32} />, value: 100, decimal: 0, suffix: "%", label: "Personal Care" },
  ];

  return (
    <div className="relative mt-4 sm:mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2.5rem] py-10 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-8">
            {stats.map((stat, idx) => (
              <Reveal 
                key={idx}
                delay={idx * 0.1}
                className={`flex flex-col items-center text-center ${idx !== 0 ? 'lg:border-l lg:border-gray-200/50' : ''} ${idx % 2 === 1 ? 'border-l border-gray-200/50' : ''}`}
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-blue mb-1">
                  <NumberTicker value={stat.value} decimalPlaces={stat.decimal} delay={0.2 + idx * 0.1} />
                  {stat.suffix}
                </h3>
                <p className="text-xs text-gray-600 font-bold tracking-widest uppercase">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
