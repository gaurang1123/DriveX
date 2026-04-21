import HeroSection from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import FeaturedCars from '@/components/sections/FeaturedCars';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowItWorks />
      <FeaturedCars />
      {/* Additional sections can be added here */}
    </div>
  );
}
