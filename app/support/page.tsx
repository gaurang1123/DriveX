import { MessageCircle, Phone, CalendarCheck, Car, Shield, Receipt, AlertTriangle } from 'lucide-react';

const supportIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  chat: MessageCircle,
  phone: Phone,
  event_available: CalendarCheck,
  directions_car: Car,
  security: Shield,
  receipt: Receipt,
  warning: AlertTriangle,
};

export default function SupportPage() {
  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You’ll need a valid driver’s license, a major credit card in your name, and proof of insurance. International renters may require a passport and an International Driving Permit.',
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 24 hours before the scheduled pickup time free of charge. Changes within 24 hours may incur a fee.',
    },
    {
      question: 'Is there a mileage limit?',
      answer: 'Mileage limits vary by plan. The Essential plan includes 200 miles per day; Performance and Elite plans offer unlimited mileage. Additional miles are charged at $0.75/mile.',
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns are subject to additional daily rates. We offer a 1‑hour grace period; after that, a full day’s charge may apply. Please contact us if you anticipate a delay.',
    },
    {
      question: 'Do you offer one‑way rentals?',
      answer: 'One‑way rentals are available between select locations for an additional fee. Please contact our support team to arrange a one‑way booking.',
    },
    {
      question: 'What is your fuel policy?',
      answer: 'Vehicles are provided with a full tank and must be returned with a full tank. If returned less than full, a refueling fee of $9.99/gallon plus a $25 service charge will apply.',
    },
  ];

  const supportTopics = [
    {
      title: 'Booking Help',
      icon: 'event_available',
      items: ['How to book', 'Payment options', 'Booking confirmation'],
    },
    {
      title: 'Vehicle Info',
      icon: 'directions_car',
      items: ['Fleet details', 'Vehicle specs', 'Features & amenities'],
    },
    {
      title: 'Insurance & Safety',
      icon: 'security',
      items: ['Coverage options', 'Accident procedures', 'Roadside assistance'],
    },
    {
      title: 'Billing',
      icon: 'receipt',
      items: ['Understanding charges', 'Invoices & receipts', 'Refund policy'],
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            Support Center
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            Find answers, guides, and direct help for everything DriveX.
          </p>
        </div>
      </div>

      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-headline font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-surface-container-high p-6 rounded-2xl">
                    <h3 className="text-xl font-headline font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-on-surface-variant">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-headline font-bold text-white mb-8">Still need help?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-high p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <MessageCircle className="text-primary text-3xl" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-white mb-4">Live Chat</h3>
                    <p className="text-on-surface-variant mb-6">Connect with a support agent instantly. Available 24/7.</p>
                    <button className="bg-primary text-on-primary font-headline font-bold tracking-tighter uppercase py-3 px-6 rounded-xl">
                      Start Chat
                    </button>
                  </div>
                  <div className="bg-surface-container-high p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Phone className="text-primary text-3xl" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-white mb-4">Call Us</h3>
                    <p className="text-on-surface-variant mb-2">+1 (555) 123‑4567</p>
                    <p className="text-on-surface-variant text-sm mb-6">Mon‑Fri 9am‑6pm EST</p>
                    <button className="bg-surface-container-highest text-white font-headline font-bold tracking-tighter uppercase py-3 px-6 rounded-xl">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <h3 className="text-2xl font-headline font-bold text-white mb-6">Support Topics</h3>
                <div className="space-y-6">
                  {supportTopics.map((topic) => {
                    const IconComponent = supportIconMap[topic.icon];
                    return (
                      <div key={topic.title} className="bg-surface-container-high p-6 rounded-2xl">
                        <div className="flex items-center mb-4">
                          {IconComponent && <IconComponent className="text-primary mr-3 w-5 h-5" />}
                          <h4 className="text-white font-headline font-bold">{topic.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {topic.items.map((item) => (
                            <li key={item}>
                              <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm block py-1">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-surface-container-high p-6 rounded-2xl">
                  <h4 className="text-white font-headline font-bold mb-4">Emergency Roadside</h4>
                  <p className="text-on-surface-variant text-sm mb-4">If you're experiencing a vehicle emergency, call our 24/7 line immediately.</p>
                  <div className="flex items-center">
                    <AlertTriangle className="text-primary mr-3 w-5 h-5" />
                    <span className="text-white font-bold">+1 (555) 987‑6543</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20">
            <h2 className="text-3xl font-headline font-bold text-white mb-8">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Download the App</h3>
                <p className="text-on-surface-variant mb-4">Manage bookings, access digital keys, and contact support on the go.</p>
                <div className="flex gap-4">
                  <button className="bg-surface-container-highest text-white py-2 px-4 rounded-lg text-sm">App Store</button>
                  <button className="bg-surface-container-highest text-white py-2 px-4 rounded-lg text-sm">Google Play</button>
                </div>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Video Guides</h3>
                <p className="text-on-surface-variant mb-4">Watch step‑by‑step tutorials on booking, vehicle features, and more.</p>
                <button className="bg-primary text-on-primary font-headline font-bold tracking-tighter uppercase py-2 px-4 rounded-lg text-sm">
                  Watch Now
                </button>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Community Forum</h3>
                <p className="text-on-surface-variant mb-4">Connect with other DriveX members, share experiences, and get tips.</p>
                <button className="bg-surface-container-highest text-white font-headline font-bold tracking-tighter uppercase py-2 px-4 rounded-lg text-sm">
                  Join Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}