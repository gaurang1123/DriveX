"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  fullWidth = false,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'font-headline font-bold uppercase tracking-tighter rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'anodized-gradient text-on-primary',
    secondary: 'bg-surface-container-high text-white border border-outline-variant/30 hover:bg-surface-container',
    tertiary: 'bg-transparent text-primary hover:text-primary-container',
    glass: 'glass-panel text-white border border-outline-variant/15 hover:bg-surface-container-high',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;