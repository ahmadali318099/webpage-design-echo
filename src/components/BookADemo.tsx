
import React from 'react';
import { Button } from '@/components/ui/button';

const BookADemo = () => {
  return (
    <section className="bg-gh-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gh-gray-800 mb-6">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-lg text-gh-gray-600 max-w-2xl mx-auto mb-10">
          Book a personalized demo to see GenuineHire in action or talk to our sales team to find the perfect plan for your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-base rounded-lg px-8 py-3 w-full sm:w-auto">
            Book a Demo
          </Button>
          <Button variant="outline" size="lg" className="text-gh-blue border-gh-blue hover:bg-gh-blue/10 font-semibold text-base rounded-lg px-8 py-3 w-full sm:w-auto">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookADemo;
