"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { label: 'Browse', href: '/browse', active: true },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'My Bookings', href: '/dashboard' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-surface-container-low/80 backdrop-blur-md"
    >
      <Link href="/" className="text-2xl font-black tracking-tighter text-white font-headline">
        DriveX
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${item.active
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-white transition-colors'
            } font-headline tracking-tighter uppercase font-bold`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:text-white transition-colors font-headline tracking-tighter uppercase font-bold">
          Sign In
        </button>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
};

export default Navigation;