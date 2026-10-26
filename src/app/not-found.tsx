import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../data/business';
import { GoBackButton } from '../components/ui/GoBackButton';

export const metadata = {
  title: 'Page Not Found',
  description:
    'The page you are looking for could not be found. Head back to the Prince Holidays homepage to plan your next journey.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      {/* No onPlanTrip prop: Navbar safely no-ops when the enquiry section
          (which only exists on the homepage) is not in the DOM. */}
      <Navbar />

      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[#231A10]">
          Page Not Found
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#6B6A63] leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Start from the homepage or plan your next journey with us.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#231A10] text-[#fcfcfc] font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#FD6703] transition-colors"
          >
            Back to Home
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <GoBackButton />

          <a
            href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9D1C3] text-[#231A10] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#FD6703] hover:text-[#FD6703] transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
