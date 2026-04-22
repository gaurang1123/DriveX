'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen w-full flex overflow-hidden">
      {/* Left Panel: Cinematic Visual */}
      <section className="hidden lg:flex w-7/12 relative items-end p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-surface-container-lowest to-surface-dim" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center grayscale brightness-50 contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent opacity-40" />
        </div>
        <div className="relative z-10 max-w-xl">
          <div className="mb-8">
            <span className="text-primary font-headline tracking-widest text-sm font-bold uppercase block mb-4">
              Precision Engineering
            </span>
            <h1 className="text-7xl font-headline font-black text-white leading-none tracking-tighter">
              THE ART <br />OF THE <br />
              <span className="text-primary">DRIVE.</span>
            </h1>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light max-w-md">
            Access our exclusive fleet of high-performance vehicles. Curated for those who demand more than just transportation.
          </p>
        </div>
        {/* Absolute Brand Logo */}
        <div className="absolute top-12 left-16 z-20">
          <div className="text-3xl font-headline font-black tracking-tighter text-white">DriveX</div>
        </div>
      </section>

      {/* Right Panel: Auth Container */}
      <section className="w-full lg:w-5/12 bg-surface-container-lowest flex flex-col justify-center px-8 sm:px-16 md:px-24 py-12 relative">
        {/* Mobile Brand Header */}
        <div className="lg:hidden absolute top-8 left-8">
          <div className="text-2xl font-headline font-black tracking-tighter text-white">DriveX</div>
        </div>

        <div className="max-w-md w-full mx-auto">
          <header className="mb-10">
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">
              {isLogin ? 'Welcome back' : 'Join DriveX'}
            </h2>
            <p className="text-on-surface-variant">
              {isLogin 
                ? 'Sign in to manage your bookings and fleet access.' 
                : 'Create an account to unlock our exclusive fleet.'
              }
            </p>
          </header>

          {/* Auth Tabs */}
          <nav className="flex gap-8 mb-8 border-b border-outline-variant border-opacity-20">
            <button
              onClick={() => setIsLogin(true)}
              className={`pb-4 font-bold text-sm tracking-wide ${isLogin 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-white transition-colors'
              }`}
            >
              LOG IN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`pb-4 font-medium text-sm tracking-wide ${!isLogin 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-white transition-colors'
              }`}
            >
              SIGN UP
            </button>
          </nav>

          {/* Form Section */}
          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  className="w-full h-14 px-5 bg-surface-container-high border-none rounded-xl text-white placeholder:text-outline focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                className="w-full h-14 px-5 bg-surface-container-high border-none rounded-xl text-white placeholder:text-outline focus:ring-1 focus:ring-primary-container transition-all"
                placeholder="name@luxury.com"
                type="email"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
                  Password
                </label>
                {isLogin && (
                  <a className="text-xs text-primary hover:underline" href="#">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full h-14 px-5 bg-surface-container-high border-none rounded-xl text-white placeholder:text-outline focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest ml-1">
                  Confirm Password
                </label>
                <input
                  className="w-full h-14 px-5 bg-surface-container-high border-none rounded-xl text-white placeholder:text-outline focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            )}

            <Button
              variant="primary"
              className="w-full h-14 text-base tracking-wide"
              icon="arrow_forward"
              type="submit"
            >
              {isLogin ? 'CONTINUE' : 'CREATE ACCOUNT'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-10 flex items-center">
            <div className="flex-grow border-t border-outline-variant opacity-20" />
            <span className="px-4 text-xs font-bold text-outline uppercase tracking-[0.2em]">
              or access via
            </span>
            <div className="flex-grow border-t border-outline-variant opacity-20" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="glass" className="h-14">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Google</span>
            </Button>
            <Button variant="glass" className="h-14">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.002-.156-3.753 1.09-4.99 1.09zM15.53 4.5c.844-1.026 1.404-2.454 1.247-3.87-1.221.051-2.689.818-3.571 1.844-.793.91-1.48 2.364-1.287 3.753 1.363.104 2.766-.701 3.61-1.727z" />
              </svg>
              <span>Apple</span>
            </Button>
          </div>

          <footer className="mt-12 text-center">
            <p className="text-sm text-on-surface-variant">
              By continuing, you agree to our{' '}
              <Link href="/privacy" className="text-white font-medium underline underline-offset-4 hover:text-primary transition-colors">
                Privacy Policy
              </Link>.
            </p>
          </footer>
        </div>

        {/* Footer-style subtle copyright */}
        <div className="absolute bottom-8 left-0 w-full text-center">
          <p className="text-[10px] font-headline tracking-[0.4em] text-outline opacity-40 uppercase">
            DriveX Precision Engineering © 2024
          </p>
        </div>
      </section>
    </main>
  );
}