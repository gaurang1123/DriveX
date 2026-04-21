"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-surface-container-lowest to-surface-dim" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-headline text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]"
        >
          Your Drive.<br />
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary"
          >
            Your Rules.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Precision engineering meets absolute freedom. Experience the world's most exclusive fleet on your own terms.
        </motion.p>

        {/* Search/Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel p-2 md:p-4 rounded-xl max-w-4xl mx-auto w-full border border-outline-variant/15"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="flex flex-col items-start px-4 py-3 bg-surface-container-high rounded-lg text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Location
              </span>
              <div className="flex items-center gap-2 w-full">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <input 
                  className="bg-transparent border-none p-0 focus:ring-0 text-white w-full placeholder:text-surface-variant"
                  placeholder="Search City"
                  type="text"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-start px-4 py-3 bg-surface-container-high rounded-lg text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Pick-up
              </span>
              <div className="flex items-center gap-2 w-full">
                <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                <input 
                  className="bg-transparent border-none p-0 focus:ring-0 text-white w-full placeholder:text-surface-variant"
                  placeholder="Select Date"
                  type="text"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-start px-4 py-3 bg-surface-container-high rounded-lg text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Drop-off
              </span>
              <div className="flex items-center gap-2 w-full">
                <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                <input 
                  className="bg-transparent border-none p-0 focus:ring-0 text-white w-full placeholder:text-surface-variant"
                  placeholder="Select Date"
                  type="text"
                />
              </div>
            </div>
            
            <Button 
              variant="primary" 
              size="lg"
              icon="search"
              className="h-full py-4 md:py-0"
              fullWidth
            >
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;