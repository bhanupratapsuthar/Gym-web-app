import React from 'react';
import { Check } from 'lucide-react';

function PricingCard({ title, price, features, isPopular = false, buttonText = "Get Started" }) {
  return (
    <div className={`relative rounded-2xl p-8 ${isPopular ? 'bg-slate-800 text-white shadow-xl scale-105' : 'bg-white '}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-black'}`}>{title}</h3>
        <div className="mb-6">
          <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-black'}`}>{price}</span>
          <span className={`${isPopular ? 'text-slate-300' : 'text-gray-500'}`}>/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${isPopular ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`${isPopular ? 'text-white' : 'text-black'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;
