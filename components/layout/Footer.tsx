import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    { label: 'Browse Fleet', href: '/browse' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-headline font-black tracking-tighter text-white mb-4 inline-block">
              DriveX
            </Link>
            <p className="text-on-surface-variant max-w-md">
              Precision engineering meets absolute freedom. Experience the world's most exclusive fleet on your own terms.
            </p>
          </div>

          <div>
            <h4 className="text-white font-headline font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-headline font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-sm">
            © 2024 DriveX Precision Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined">social_distance</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;