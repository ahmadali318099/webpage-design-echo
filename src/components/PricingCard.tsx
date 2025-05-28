
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  planName: string;
  description: string;
  priceMonthly: string;
  priceAnnually: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean; // Not used in this iteration based on image's initial cards
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  description,
  priceMonthly,
  priceAnnually,
  features,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col h-full border border-gh-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gh-gray-800">{planName}</h3>
      <p className="text-sm text-gh-gray-500 mt-1">{description}</p>
      
      <div className="my-6">
        <span className="text-5xl font-extrabold text-gh-gray-900">${priceMonthly}</span>
        <span className="text-gh-gray-500">/month</span>
      </div>
      <p className="text-sm text-gh-gray-500">
        or ${priceAnnually} annually
      </p>

      <ul className="space-y-3 mt-8 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="text-gh-blue h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gh-gray-600 text-sm">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button className="w-full bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-base rounded-lg py-3 mt-auto">
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
