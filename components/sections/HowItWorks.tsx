"use client";

import { motion } from 'framer-motion';
import { Car, CalendarCheck, Gauge } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      Icon: Car,
      title: 'Choose Car',
      description: 'Select from our curated collection of luxury sedans, exotic supercars, and high-performance SUVs.',
    },
    {
      Icon: CalendarCheck,
      title: 'Book Instantly',
      description: 'Seamless digital verification and instant confirmation. No paperwork, no queues, no delays.',
    },
    {
      Icon: Gauge,
      title: 'Hit the Road',
      description: 'Pick up your vehicle or have it delivered to your doorstep. The road is yours to command.',
    },
  ];

  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter leading-none">
              ENGINEERED FOR EASE
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm mb-2">
            Three simple steps to unlock the pinnacle of automotive performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-16 h-16 bg-surface-container-highest rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                <step.Icon className="text-primary text-3xl group-hover:text-on-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;