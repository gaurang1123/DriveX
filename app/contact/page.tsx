"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Map } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  phone: Phone,
  mail: Mail,
  location_on: MapPin,
  schedule: Clock,
  check_circle: CheckCircle,
  map: Map,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Phone',
      details: '+1 (555) 123‑4567',
      subtitle: 'Mon‑Fri, 9am‑6pm EST',
    },
    {
      icon: 'mail',
      title: 'Email',
      details: 'support@drivex.com',
      subtitle: 'Response within 24 hours',
    },
    {
      icon: 'location_on',
      title: 'Headquarters',
      details: '123 Luxury Avenue, Suite 1000',
      subtitle: 'Beverly Hills, CA 90210',
    },
    {
      icon: 'schedule',
      title: 'Concierge',
      details: '24/7 Emergency Line',
      subtitle: '+1 (555) 987‑6543',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            Get in Touch
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            Our team is ready to assist with bookings, questions, or custom requests.
          </p>
        </div>
      </div>

      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-surface-container-high p-8 rounded-2xl">
                <h2 className="text-2xl font-headline font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-on-surface-variant mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a topic</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="corporate">Corporate Rental</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 text-white placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-headline font-bold tracking-tighter uppercase py-3 rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method) => {
                    const IconComponent = iconMap[method.icon];
                    return (
                      <div key={method.title} className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                          {IconComponent && <IconComponent className="text-primary w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="text-white font-headline font-bold">{method.title}</h4>
                          <p className="text-on-surface-variant">{method.details}</p>
                          <p className="text-on-surface-variant text-sm">{method.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h4 className="text-white font-headline font-bold mb-4">Frequently Asked</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-on-surface-variant text-sm mb-1">How quickly can I get a car?</p>
                    <p className="text-white text-sm">Same‑day bookings are available with 2‑hour notice in most cities.</p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant text-sm mb-1">Do you offer international rentals?</p>
                    <p className="text-white text-sm">Yes, we operate in over 20 countries. Contact us for cross‑border arrangements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20">
            <h2 className="text-3xl font-headline font-bold text-white mb-8">Visit Our Showroom</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant mb-6">
                  Our flagship showroom in Beverly Hills is open by appointment. Experience the fleet in person, meet our team, and enjoy a complimentary consultation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-3 w-5 h-5" />
                    <span className="text-on-surface-variant">Private viewings available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-3 w-5 h-5" />
                    <span className="text-on-surface-variant">Test drives arranged upon request</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-3 w-5 h-5" />
                    <span className="text-on-surface-variant">Valet parking provided</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-high rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                  <Map className="text-primary w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}