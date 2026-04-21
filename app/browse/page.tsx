"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const BrowseFleetPage = () => {
  const cars = [
    {
      id: 1,
      name: 'PORSCHE 911 GT3',
      category: 'Sports Car',
      price: 450,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
      features: ['Gas', '2 Seats', 'Auto'],
    },
    {
      id: 2,
      name: 'BMW M5 COMPETITION',
      category: 'Luxury Sedan',
      price: 380,
      image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2067',
      features: ['Gas', '5 Seats', 'Auto'],
    },
    {
      id: 3,
      name: 'TESLA MODEL S PLAID',
      category: 'Electric',
      price: 320,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071',
      features: ['Electric', '5 Seats', 'Auto'],
    },
    {
      id: 4,
      name: 'MERCEDES-AMG GT',
      category: 'Sports Car',
      price: 520,
      image: 'https://images.unsplash.com/photo-1563720223488-8f2f62a6e71a?q=80&w=2070',
      features: ['Gas', '2 Seats', 'Auto'],
    },
    {
      id: 5,
      name: 'AUDI R8',
      category: 'Supercar',
      price: 580,
      image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2070',
      features: ['Gas', '2 Seats', 'Auto'],
    },
    {
      id: 6,
      name: 'LAMBORGHINI HURACAN',
      category: 'Supercar',
      price: 850,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2074',
      features: ['Gas', '2 Seats', 'Auto'],
    },
  ];

  const categories = ['All', 'Sports Car', 'Luxury Sedan', 'SUV', 'Electric', 'Supercar'];

  return (
    <div className="min-h-screen bg-background pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter mb-4">
            BROWSE <span className="text-primary">THE FLEET</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Select from our curated collection of luxury sedans, exotic supercars, and high-performance SUVs.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="glass-panel rounded-2xl p-6 mb-12 border border-outline-variant/15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-headline font-bold tracking-tight transition-all ${
                    category === 'All'
                      ? 'anodized-gradient text-on-primary'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">sort</span>
                <select className="bg-surface-container-high text-white rounded-xl px-4 py-3 border-none focus:ring-1 focus:ring-primary-container">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
              <Button variant="secondary" icon="tune">
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${car.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase text-white tracking-widest border border-white/10">
                    {car.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-white tracking-tight">
                      {car.name}
                    </h3>
                    <p className="text-on-surface-variant">{car.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-headline font-black text-2xl">
                      ${car.price}
                    </span>
                    <span className="text-on-surface-variant text-sm block">/ Day</span>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6">
                  {car.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-lg">check</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="primary" className="w-full" icon="directions_car">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <Button variant="secondary" className="w-12 h-12 p-0 rounded-full">
            <span className="material-symbols-outlined">chevron_left</span>
          </Button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`w-12 h-12 rounded-full font-headline font-bold ${
                num === 1
                  ? 'anodized-gradient text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {num}
            </button>
          ))}
          <Button variant="secondary" className="w-12 h-12 p-0 rounded-full">
            <span className="material-symbols-outlined">chevron_right</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseFleetPage;