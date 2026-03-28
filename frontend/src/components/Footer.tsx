import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-16">

          {/* Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src="logo.png" alt="Hostel 15" className="h-[60px] w-auto object-contain" />
              <span className="font-heading font-black text-2xl tracking-tighter text-lisbon-blue">Hostel 15</span>
            </div>
            <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-xs block opacity-80">
              The original Rossio boutique hostel experience. Secure storage, premium dorms, and the heartbeat of Lisbon at your door.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase border-l-4 border-lisbon-yellow pl-4">Company</span>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/services" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><a href="#featured-rooms" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              <li><a href="#faq" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Quick Support */}
          <div className="space-y-8">
            <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase border-l-4 border-lisbon-yellow pl-4">Quick Help</span>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">FAQ Center</a></li>
              <li><a href="#location" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Locker Security</a></li>
              <li><a href="#location" className="text-slate-900 font-bold text-sm hover:text-lisbon-blue hover:translate-x-1 transition-all inline-block">Check-in Info</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase border-l-4 border-lisbon-yellow pl-4">Contact US</span>
            <div className="space-y-4">
              <p className="text-slate-900 font-black text-sm block">Avenida Almirante Reis,<br />Nº15 3E, 1150-008 Lisboa</p>
              <p className="text-lisbon-blue font-black text-lg block">+351 920 229 784</p>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">hostel15@yahoo.com</p>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Hostel 15 Lisbon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-slate-900 text-[10px] font-black uppercase tracking-widest italic">
              Digital Phase 1 Live — Secure Booking System Online
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
