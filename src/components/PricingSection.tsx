
import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    planName: 'Starter',
    description: 'For Solo recruiters / Early Startups',
    priceMonthly: '14,9',
    priceAnnually: '149',
    features: [
      { text: '1 Seat', included: true },
      { text: 'Up to 30 AI Analytics (Monthly)', included: true },
      { text: 'Add seat for $4', included: true },
      { text: 'Seat + 30 interview for $7,50', included: true },
      { text: 'Overage Per Interview $1', included: true },
    ],
  },
  {
    planName: 'Growth',
    description: 'Startup teams / Boutique agencies',
    priceMonthly: '49,9',
    priceAnnually: '499',
    features: [
      { text: '3 Seats', included: true },
      { text: 'Up to 150 AI Analytics (Monthly)', included: true },
      { text: 'Add seat for $5', included: true },
      { text: 'Seat + 50 interview for $9', included: true },
      { text: 'Overage Per Interview $0,8', included: true },
    ],
  },
  {
    planName: 'Scale',
    description: 'High-volume hiring / Lean teams',
    priceMonthly: '119,9',
    priceAnnually: '1,199',
    features: [
      { text: '5 Seats', included: true },
      { text: 'Up to 500 AI Analytics (Monthly)', included: true },
      { text: 'Add seat for $6', included: true },
      { text: 'Seat + 100 interview for $10', included: true },
      { text: 'Overage Per Interview $0,5', included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gh-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gh-gray-800">Flexible Pricing for Teams of All Sizes</h2>
          <p className="mt-4 text-lg text-gh-gray-600 max-w-2xl mx-auto">
            Choose the plan that’s right for you. No hidden fees, cancel anytime.
          </p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
