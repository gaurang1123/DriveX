import HowItWorks from '@/components/sections/HowItWorks';
import HeroSection from '@/components/sections/HeroSection';

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            How It Works
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            Discover the seamless process of renting luxury vehicles with DriveX. From selection to delivery, we ensure a premium experience.
          </p>
        </div>
      </div>
      <HowItWorks />
      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-high p-6 rounded-2xl">
              <h3 className="text-xl font-headline font-bold text-white mb-3">What documents do I need?</h3>
              <p className="text-on-surface-variant">A valid driver's license, proof of insurance, and a credit card are required for all rentals.</p>
            </div>
            <div className="bg-surface-container-high p-6 rounded-2xl">
              <h3 className="text-xl font-headline font-bold text-white mb-3">Can I extend my rental?</h3>
              <p className="text-on-surface-variant">Yes, extensions are subject to availability and can be requested through your dashboard.</p>
            </div>
            <div className="bg-surface-container-high p-6 rounded-2xl">
              <h3 className="text-xl font-headline font-bold text-white mb-3">Is delivery available?</h3>
              <p className="text-on-surface-variant">We offer doorstep delivery within select metropolitan areas for an additional fee.</p>
            </div>
            <div className="bg-surface-container-high p-6 rounded-2xl">
              <h3 className="text-xl font-headline font-bold text-white mb-3">What's the cancellation policy?</h3>
              <p className="text-on-surface-variant">Cancel up to 24 hours before your scheduled pickup for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}