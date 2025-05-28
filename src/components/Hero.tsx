
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gh-gray-900 leading-tight">
          Hire with <span className="text-gh-blue">confidence</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gh-gray-600">
          Ready to see how your hiring team can spot AI-enhanced candidates - instantly? Sign Up Now
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-base rounded-lg px-8 py-3 w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-gh-blue border-gh-blue hover:bg-gh-blue/10 font-semibold text-base rounded-lg px-8 py-3 w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
