"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Sliders,
  Car,
  Search,
  Plus,
  List,
  User,
  CreditCard,
  Heart,
  LogOut,
  Headphones,
  Receipt,
  Star,
  Settings,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Menu,
  Check,
  CheckCircle,
  Eye,
  EyeOff,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CalendarDays,
  Fuel,
  Users,
  MessageCircle,
  Gem,
  Bell,
  Clock,
  Map,
} from 'lucide-react';

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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tune: Sliders,
  directions_car: Car,
  search: Search,
  add: Plus,
  list: List,
  person: User,
  payments: CreditCard,
  favorite: Heart,
  logout: LogOut,
  support_agent: Headphones,
  receipt: Receipt,
  star: Star,
  settings: Settings,
  event_available: CalendarCheck,
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  menu: Menu,
  check: Check,
  check_circle: CheckCircle,
  visibility: Eye,
  visibility_off: EyeOff,
  warning: AlertTriangle,
  phone: Phone,
  mail: Mail,
  location_on: MapPin,
  calendar_today: Calendar,
  calendar_month: CalendarDays,
  local_gas_station: Fuel,
  social_distance: Users,
  chat: MessageCircle,
  alternate_email: Mail,
  precision_manufacturing: Settings,
  diamond: Gem,
  concierge: Bell,
  schedule: Clock,
  map: Map,
};

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

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

export default Button;