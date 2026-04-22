"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Fuel, Users, Settings } from 'lucide-react';

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: 'PORSCHE 911 GT3',
      series: '911 Series',
      price: 450,
      type: 'Premium',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      features: ['Gas', '2 Seats', 'Auto'],
    },
    {
      id: 2,
      name: 'BMW M5 COMPETITION',
      series: 'M Series',
      price: 380,
      type: 'Sport',
      image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2067',
      features: ['Gas', '5 Seats', 'Auto'],
    },
    {
      id: 3,
      name: 'TESLA MODEL S PLAID',
      series: 'Electric Performance',
      price: 320,
      type: 'Electric',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071',
      features: ['Electric', '5 Seats', 'Auto'],
    },
    {
      id: 4,
      name: 'MERCEDES-AMG GT',
      series: 'AMG Series',
      price: 520,
      type: 'Premium',
      image: 'https://images.unsplash.com/photo-1563720223488-8f2f62a6e71a?q=80&w=2070',
      features: ['Gas', '2 Seats', 'Auto'],
    },
  ];

  const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Gas: Fuel,
    Electric: Fuel,
    '2 Seats': Users,
    '5 Seats': Users,
    Auto: Settings,
  };

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-end">
        <div>
          <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
            The Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter">
            FEATURED MACHINES
          </h2>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="w-12 h-12 p-0! rounded-full">
            <ChevronLeft className="w-5 h-5 text-white" />
          </Button>
          <Button variant="secondary" className="w-12 h-12 p-0! rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto px-8 pb-12 hide-scrollbar snap-x">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[320px] md:min-w-[420px] snap-center group"
          >
            <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${car.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white tracking-widest border border-white/10">
                  {car.type}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
                  {car.name}
                </h4>
                <p className="text-on-surface-variant font-medium">{car.series}</p>
              </div>
              <div className="text-right">
                <span className="text-primary font-headline font-black text-2xl">
                  ${car.price}
                </span>
                <span className="text-on-surface-variant text-sm block">/ Day</span>
              </div>
            </div>
            
            <div className="flex gap-6 border-t border-outline-variant/10 pt-4">
              {car.features.map((feature) => {
                const IconComponent = featureIconMap[feature] || Fuel;
                return (
                  <div key={feature} className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <IconComponent className="w-4 h-4" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
            
            <Button variant="primary" className="w-full mt-6">
              Book Now
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;