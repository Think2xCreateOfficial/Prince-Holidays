'use client';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar onPlanTrip={() => {}} />

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

          <a
            href="https://wa.me/919715057769?text=Hello%20Prince%20Holidays%2C%20I%20would%20like%20to%20plan%20a%20trip."
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
