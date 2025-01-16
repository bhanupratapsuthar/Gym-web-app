import React from 'react';
import PricingCard from './PricingCard';

export function MembershipPlans() {
  const plans = [
    {
      title: "Basic",
      price: "₹599",
      features: [
        "Access to gym equipment",
        "Basic fitness assessment",
        "Locker room access",
        "2 group classes per month",
        "Standard gym hours access"
      ]
    },
    {
      title: "Premium",
      price: "₹999",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "1 personal training session/month",
        "Nutrition consultation",
        "24/7 gym access",
        "Access to sauna & spa"
      ],
      isPopular: true
    },
    {
      title: "Elite",
      price: "₹1599",
      features: [
        "All Premium features",
        "4 personal training sessions/month",
        "Quarterly body composition analysis",
        "Monthly massage session",
        "Guest passes (2/month)",
        "Priority class booking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Choose Your Plan</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Select the perfect membership plan that fits your fitness goals and lifestyle.
            Join our community and start your fitness journey today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}