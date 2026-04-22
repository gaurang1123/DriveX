import { CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/day',
      description: 'For the everyday luxury seeker',
      features: [
        'Sedans & Luxury SUVs',
        'Basic insurance coverage',
        '24/7 roadside assistance',
        '200 miles included',
        'Standard delivery',
      ],
      cta: 'Book Now',
      popular: false,
    },
    {
      name: 'Performance',
      price: '$399',
      period: '/day',
      description: 'High‑performance sports & supercars',
      features: [
        'Sports cars & supercars',
        'Premium insurance coverage',
        'Concierge service',
        'Unlimited mileage',
        'Priority delivery',
        'Track day access',
      ],
      cta: 'Book Now',
      popular: true,
    },
    {
      name: 'Elite',
      price: '$899',
      period: '/day',
      description: 'Ultimate exclusivity & bespoke service',
      features: [
        'Limited‑edition hypercars',
        'Full comprehensive insurance',
        'Dedicated concierge',
        'Unlimited mileage',
        'White‑glove delivery',
        'Helicopter transfer option',
        'Custom itinerary planning',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            Transparent Pricing
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            Choose the plan that matches your ambition. Every tier includes our signature DriveX service.
          </p>
        </div>
      </div>

      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-surface-container-high p-8 rounded-2xl border-2 ${plan.popular ? 'border-primary' : 'border-transparent'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="inline-block bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full self-start mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-headline font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-on-surface-variant mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-headline font-black text-white">{plan.price}</span>
                  <span className="text-on-surface-variant ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="text-primary mr-3 w-5 h-5" />
                      <span className="text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-headline font-bold tracking-tighter uppercase ${plan.popular ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-white'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20">
            <h2 className="text-3xl font-headline font-bold text-white mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Insurance Add‑ons</h3>
                <p className="text-on-surface-variant">Upgrade to zero‑deductible or track‑day coverage.</p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Delivery & Pickup</h3>
                <p className="text-on-surface-variant">White‑glove delivery starts at $99 within 50 miles.</p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Chauffeur Service</h3>
                <p className="text-on-surface-variant">Professional driver available at $75/hour.</p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Extended Rental</h3>
                <p className="text-on-surface-variant">Weekly and monthly discounts up to 30%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}