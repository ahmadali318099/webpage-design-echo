import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import ContactFormsSection from '@/components/ContactFormsSection'; // New import
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gh-gray-800 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PricingSection />
        <ContactFormsSection /> {/* Use new section */}
        {/* Other sections like Reviews, TrustedBy will be added here later */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
