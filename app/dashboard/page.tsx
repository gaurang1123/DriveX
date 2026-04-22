'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { User } from 'lucide-react';

export default function DashboardPage() {
  const bookings = [
    {
      id: 1,
      car: 'PORSCHE 911 GT3',
      date: 'Apr 25 - Apr 28, 2024',
      status: 'Active',
      price: '$1,350',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    },
    {
      id: 2,
      car: 'TESLA MODEL S PLAID',
      date: 'May 10 - May 12, 2024',
      status: 'Upcoming',
      price: '$960',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071',
    },
    {
      id: 3,
      car: 'BMW M5 COMPETITION',
      date: 'Mar 15 - Mar 18, 2024',
      status: 'Completed',
      price: '$1,140',
      image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2067',
    },
  ];

  const stats = [
    { label: 'Total Bookings', value: '12', change: '+2' },
    { label: 'Total Spent', value: '$8,450', change: '+$1,200' },
    { label: 'Favorite Brand', value: 'Porsche', change: '' },
    { label: 'Member Since', value: '2023', change: '' },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter mb-2">
              YOUR <span className="text-primary">DASHBOARD</span>
            </h1>
            <p className="text-on-surface-variant">Manage your bookings, preferences, and account.</p>
          </div>
          <Button variant="primary" icon="add">
            New Booking
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-panel rounded-2xl p-6 border border-outline-variant/15"
            >
              <p className="text-on-surface-variant text-sm mb-2">{stat.label}</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-headline font-black text-white">{stat.value}</p>
                {stat.change && (
                  <span className="text-primary text-sm font-bold mb-1">({stat.change})</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bookings Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-headline font-bold text-white">Recent Bookings</h2>
              <Button variant="tertiary" icon="list">
                View All
              </Button>
            </div>

            <div className="space-y-6">
              {bookings.map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 border border-outline-variant/15 flex flex-col md:flex-row gap-6"
                >
                  <div className="w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${booking.image})` }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-headline font-bold text-white mb-1">
                          {booking.car}
                        </h3>
                        <p className="text-on-surface-variant">{booking.date}</p>
                      </div>
                      <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                        booking.status === 'Active'
                          ? 'bg-primary/20 text-primary'
                          : booking.status === 'Upcoming'
                          ? 'bg-tertiary/20 text-tertiary'
                          : 'bg-on-surface-variant/20 text-on-surface-variant'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-on-surface-variant text-sm">Total Cost</p>
                        <p className="text-primary font-headline font-black text-2xl">{booking.price}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="secondary" size="sm">
                          Details
                        </Button>
                        {booking.status === 'Active' && (
                          <Button variant="primary" size="sm">
                            Extend
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="glass-panel rounded-2xl p-6 border border-outline-variant/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="text-primary text-3xl" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-white">Alex Morgan</h3>
                  <p className="text-on-surface-variant">Platinum Member</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button variant="glass" className="w-full justify-start" icon="person">
                  Profile Settings
                </Button>
                <Button variant="glass" className="w-full justify-start" icon="payments">
                  Payment Methods
                </Button>
                <Button variant="glass" className="w-full justify-start" icon="favorite">
                  Wishlist
                </Button>
                <Button variant="glass" className="w-full justify-start" icon="logout">
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-panel rounded-2xl p-6 border border-outline-variant/15">
              <h3 className="text-xl font-headline font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" className="h-24 flex-col" icon="support_agent">
                  Support
                </Button>
                <Button variant="secondary" className="h-24 flex-col" icon="receipt">
                  Invoices
                </Button>
                <Button variant="secondary" className="h-24 flex-col" icon="star">
                  Reviews
                </Button>
                <Button variant="secondary" className="h-24 flex-col" icon="settings">
                  Settings
                </Button>
              </div>
            </div>

            {/* Membership Status */}
            <div className="glass-panel rounded-2xl p-6 border border-outline-variant/15">
              <h3 className="text-xl font-headline font-bold text-white mb-4">Membership Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Platinum Tier</span>
                  <span className="text-primary font-bold">90%</span>
                </div>
                <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full w-9/10 anodized-gradient rounded-full" />
                </div>
                <p className="text-sm text-on-surface-variant">
                  $1,050 more to reach Diamond tier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}