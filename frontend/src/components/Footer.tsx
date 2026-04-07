import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#0A1128] py-16 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 items-start">
          
          {/* Logo Section */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-white p-2 rounded-xl shadow-xl shadow-white/5 cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Hostel 15" className="h-[55px] w-auto object-contain" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-heading font-black text-white text-lg tracking-[0.1em] uppercase">Hostel 15</span>
                <span className="text-lisbon-yellow font-heading font-black text-[9px] uppercase tracking-[0.3em]">Refined Lisbon Sanctuary</span>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-4 md:pl-20">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-4 bg-lisbon-yellow" />
                <span className="text-lisbon-yellow font-heading font-black text-[10px] uppercase tracking-[0.3em]">Company</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all">Home</Link></li>
                <li><Link to="/services" className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all">Services</Link></li>
                <li><button className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all text-left">About Us</button></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-4 bg-lisbon-yellow" />
                <span className="text-lisbon-yellow font-heading font-black text-[10px] uppercase tracking-[0.3em]">Support</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li><button className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all text-left">FAQ Center</button></li>
                <li><button className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all text-left">Security</button></li>
                <li><button className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all text-left">Contact</button></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-4 bg-lisbon-yellow" />
                <span className="text-lisbon-yellow font-heading font-black text-[10px] uppercase tracking-[0.3em]">Connect</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all">Instagram</a></li>
                <li><a href="#" className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all">Facebook</a></li>
                <li><a href="#" className="text-white/40 hover:text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] transition-all">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator - Minimalist */}
        <div className="w-full h-px bg-white/5 mb-12" />

        {/* Footer Bottom Area - Compact like screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p className="text-white/20 font-heading font-black text-[9px] uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Hostel 15. All Rights Reserved.
            </p>
            <p className="text-white/5 font-heading font-black text-[8px] uppercase tracking-[0.1em]">
               DESIGNED IN LISBON • PRO MAX ARCHITECTURE V1.1
            </p>
          </div>

          {/* Back Top Button exactly like screenshot 2 */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/5 group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 bg-lisbon-blue rounded-full" />
             </div>
             <span className="text-white/30 font-heading font-black text-[9px] uppercase tracking-[0.3em] group-hover:text-white/60 transition-colors">Back Top</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
