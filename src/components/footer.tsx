import Link from "next/link";
import { businessConfig } from "@/config/business";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-primary-container w-full py-20 border-t border-outline-variant/30 mt-auto">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-headline text-3xl text-[#dec1af]">{businessConfig.brand.name}</h3>
          </div>
          <p className="font-body text-[24px] text-[#dec1af] opacity-80 italic mb-8">Quiet luxury in every pour.</p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-[#dec1af] hover:bg-surface/20 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled aria-label="Instagram Placeholder" title="Social integration pending">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-[#dec1af] hover:bg-surface/20 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled aria-label="Email Placeholder" title="Social integration pending">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-[#dec1af] hover:bg-surface/20 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled aria-label="Share Placeholder" title="Social integration pending">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
          <h4 className="font-body text-[12px] text-[#dec1af] font-bold uppercase tracking-widest mb-2">Explore</h4>
          <Link href="/our-story" className="font-body text-[16px] text-white/70 hover:text-white transition-colors duration-300">Our Story</Link>
          <Link href="/menu" className="font-body text-[16px] text-white/70 hover:text-white transition-colors duration-300">Menu</Link>
          <Link href="/reservations" className="font-body text-[16px] text-white/70 hover:text-white transition-colors duration-300">Reservations</Link>
          <Link href="/moments" className="font-body text-[16px] text-white/70 hover:text-white transition-colors duration-300">Moments</Link>
        </div>

        {/* Visit Info */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-body text-[12px] text-[#dec1af] font-bold uppercase tracking-widest mb-2">Visit</h4>
          <address className="font-body text-[16px] text-white/70 not-italic">
            {businessConfig.location.display}<br />
            {businessConfig.location.conceptLabel}
          </address>
          <div className="font-body text-[14px] text-white/70 mt-2 space-y-1">
            <p>{businessConfig.hours.monThu.display}</p>
            <p>{businessConfig.hours.friSun.display}</p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-body text-[12px] text-[#dec1af] font-bold uppercase tracking-widest mb-2">Legal</h4>
          <Link href="/privacy" className="font-body text-[16px] text-white/70 hover:text-white transition-colors duration-300">
            Privacy
          </Link>
        </div>
      </div>

      {/* Copyright & Disclosure */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] font-bold text-white/50 uppercase tracking-widest">
            © 2026 {businessConfig.brand.name}. All rights reserved.
          </p>
          <p className="font-body text-[10px] font-bold text-[#dec1af] uppercase tracking-widest">
            Designed with care.
          </p>
        </div>
        <p className="font-body text-[12px] text-white/60 text-center">
          {businessConfig.disclosure.footer}
        </p>
      </div>
    </footer>
  );
}
