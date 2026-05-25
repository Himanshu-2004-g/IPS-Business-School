import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academics from './components/Academics';
import Careers from './components/Careers';
import FeatureShowcase from './components/FeatureShowcase';
import Eligibility from './components/Eligibility';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Academics />
        <Careers />
        <FeatureShowcase />
        <Eligibility />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
