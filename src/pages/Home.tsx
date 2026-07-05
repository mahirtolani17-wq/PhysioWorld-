import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import LocationContact from '../components/LocationContact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LocationContact />
    </main>
  );
}
