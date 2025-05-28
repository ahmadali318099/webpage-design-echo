import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gh-gray-800 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PricingSection />
        {/* Other sections like Contact, Reviews, TrustedBy will be added here later */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
