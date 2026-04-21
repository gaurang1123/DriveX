'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useParams } from 'next/navigation';

export default function CarDetailPage() {
  const params = useParams();
  const carId = params.id;

  const car = {
    id: carId,
    name: 'PORSCHE 911 GT3',
    series: '911 Series',
    price: 450,
    type: 'Premium',
    description: 'The Porsche 911 GT3 is a high-performance sports car that combines track-ready capabilities with everyday usability. Featuring a naturally aspirated 4.0-liter flat-six engine producing 502 horsepower, it delivers an exhilarating driving experience.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    features: [
      { icon: 'local_gas_station', label: 'Gas', value: 'Premium Unleaded' },
      { icon: 'airline_seat_recline_extra', label: 'Seats', value: '2' },
      { icon: 'settings_input_component', label: 'Transmission', value: '7-Speed PDK' },
      { icon: 'speed', label: '0-60 mph', value: '3.2s' },
      { icon: 'directions_car', label: 'Top Speed', value: '197 mph' },
      { icon: 'oil_barrel', label: 'Engine', value: '4.0L Flat-6' },
    ],
    specifications: [
      { label: 'Horsepower', value: '502 hp' },
      { label: 'Torque', value: '346 lb-ft' },
      { label: 'Weight', value: '3,153 lbs' },
      { label: 'Fuel Economy', value: '15 city / 20 highway' },
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-on-surface-variant">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="material-symbols-outlined text-sm">chevron_right</li>
            <li>
              <a href="/browse" className="hover:text-white transition-colors">Browse</a>
            </li>
            <li className="material-symbols-outlined text-sm">chevron_right</li>
            <li className="text-primary">{car.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${car.image})` }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold uppercase text-white tracking-widest border border-white/10">
                  {car.type}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-xl overflow-hidden bg-surface-container-high cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${car.image})` }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter mb-4">
                {car.name}
              </h1>
              <p className="text-on-surface-variant text-lg">{car.series}</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-outline-variant/15">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-primary font-headline font-black text-4xl">
                    ${car.price}
                  </span>
                  <span className="text-on-surface-variant text-lg block">/ Day</span>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant text-sm">Minimum rental: 2 days</p>
                  <p className="text-on-surface-variant text-sm">Security deposit: $2,500</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="primary" className="w-full h-16 text-lg" icon="event_available">
                  Book Now
                </Button>
                <Button variant="secondary" className="w-full h-16 text-lg" icon="favorite">
                  Add to Wishlist
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">Overview</h3>
              <p className="text-on-surface-variant leading-relaxed">{car.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-primary">
                      {feature.icon}
                    </span>
                    <div>
                      <p className="text-sm text-on-surface-variant">{feature.label}</p>
                      <p className="text-white font-bold">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-white mb-6">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {car.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-surface-container-high rounded-xl p-4 text-center"
                  >
                    <p className="text-primary font-headline font-black text-2xl">{spec.value}</p>
                    <p className="text-on-surface-variant text-sm">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}