import { Car, Settings, Gem, Eye, Bell } from 'lucide-react';

const valueIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  directions_car: Car,
  precision_manufacturing: Settings,
  diamond: Gem,
  visibility: Eye,
  concierge: Bell,
};

export default function AboutPage() {
  const values = [
    {
      title: 'Precision',
      description: 'Every vehicle is meticulously maintained and presented to factory‑fresh standards.',
      icon: 'precision_manufacturing',
    },
    {
      title: 'Exclusivity',
      description: 'Access to rare, limited‑production models you won’t find anywhere else.',
      icon: 'diamond',
    },
    {
      title: 'Transparency',
      description: 'No hidden fees, no surprises. Just clear terms and straightforward pricing.',
      icon: 'visibility',
    },
    {
      title: 'Service',
      description: 'A dedicated concierge is available 24/7 to ensure your experience is flawless.',
      icon: 'concierge',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            Beyond the Road
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            DriveX was founded on a simple belief: extraordinary vehicles deserve an extraordinary rental experience.
          </p>
        </div>
      </div>

      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-white mb-6">Our Story</h2>
              <p className="text-on-surface-variant mb-6">
                What began as a passion project among automotive enthusiasts has evolved into the premier luxury‑car rental platform. We saw a gap in the market—between impersonal rental agencies and exclusive clubs—and built DriveX to bridge it.
              </p>
              <p className="text-on-surface-variant mb-6">
                Today, we curate a fleet of the world’s most desirable performance and luxury vehicles, each backed by a service experience that matches the caliber of the machine.
              </p>
              <p className="text-on-surface-variant">
                Whether you’re celebrating a milestone, testing a dream car, or simply elevating your daily commute, we’re here to deliver more than just a car—we deliver an experience.
              </p>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                <Car className="text-primary w-24 h-24" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-headline font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const IconComponent = valueIconMap[value.icon];
                return (
                  <div key={value.title} className="bg-surface-container-high p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      {IconComponent && <IconComponent className="text-primary text-3xl" />}
                    </div>
                    <h3 className="text-xl font-headline font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-on-surface-variant">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20">
            <h2 className="text-3xl font-headline font-bold text-white mb-8">The DriveX Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Curated Fleet</h3>
                <p className="text-on-surface-variant">Every vehicle is hand‑selected for performance, condition, and exclusivity.</p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Digital‑First Experience</h3>
                <p className="text-on-surface-variant">Book, manage, and extend your rental entirely through our app.</p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl">
                <h3 className="text-xl font-headline font-bold text-white mb-3">Global Access</h3>
                <p className="text-on-surface-variant">Available in major cities across North America, Europe, and Asia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}