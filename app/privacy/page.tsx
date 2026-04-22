export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-12 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none mb-6">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant text-xl max-w-3xl">
            Last updated: April 22, 2024
          </p>
        </div>
      </div>

      <div className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-on-surface-variant mb-8">
              At DriveX, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-on-surface-variant mb-4">
              We collect information you provide directly to us, such as when you create an account, make a booking, or contact customer support. This may include:
            </p>
            <ul className="text-on-surface-variant list-disc pl-6 mb-6 space-y-2">
              <li>Personal identification information (name, email address, phone number, date of birth)</li>
              <li>Driver’s license and insurance details</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Vehicle preferences and rental history</li>
              <li>Communications with our team</li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-on-surface-variant mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-on-surface-variant list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Verify your identity and driver eligibility</li>
              <li>Communicate with you about bookings, updates, and promotional offers</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">3. Sharing of Information</h2>
            <p className="text-on-surface-variant mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="text-on-surface-variant list-disc pl-6 mb-6 space-y-2">
              <li>With service providers who assist in operating our business (e.g., payment processors, insurance partners)</li>
              <li>When required by law, regulation, or legal process</li>
              <li>In connection with a merger, sale, or acquisition of all or part of our company</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">4. Data Security</h2>
            <p className="text-on-surface-variant mb-6">
              We implement industry‑standard technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">5. Your Rights</h2>
            <p className="text-on-surface-variant mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="text-on-surface-variant list-disc pl-6 mb-6 space-y-2">
              <li>Access to the personal information we hold about you</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal information under certain conditions</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
            </ul>
            <p className="text-on-surface-variant mb-6">
              To exercise these rights, please contact us at privacy@drivex.com.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-on-surface-variant mb-6">
              We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">7. Third‑Party Links</h2>
            <p className="text-on-surface-variant mb-6">
              Our services may contain links to third‑party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">8. Children’s Privacy</h2>
            <p className="text-on-surface-variant mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">9. Changes to This Policy</h2>
            <p className="text-on-surface-variant mb-6">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised “Last updated” date.
            </p>

            <h2 className="text-2xl font-headline font-bold text-white mt-10 mb-4">10. Contact Us</h2>
            <p className="text-on-surface-variant mb-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-on-surface-variant">
              DriveX Privacy Team<br />
              123 Luxury Avenue, Suite 1000<br />
              Beverly Hills, CA 90210<br />
              privacy@drivex.com<br />
              +1 (555) 123‑4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}