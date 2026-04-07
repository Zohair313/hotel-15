import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideX, LucideShieldCheck, LucideBedSingle, LucideBaggageClaim, LucideSend, LucideGlobe, LucideMenu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<'bunk' | 'locker' | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({ name: '', phone: '', date: '', quantity: '' });

  const handleBooking = async () => {
    if (!formData.name || !formData.phone || !formData.date || !formData.quantity) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Mock booking logic
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl w-full max-w-lg relative overflow-hidden shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"><LucideX size={20} /></button>

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LucideShieldCheck size={40} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Booking Requested!</h3>
                <p className="text-slate-500 mb-8">Success! We'll confirm your arrival time via WhatsApp shortly. Payment is on premises.</p>
                <button onClick={onClose} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold">Back to Site</button>
              </motion.div>
            ) : (
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-6">Advance Booking</h3>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <button
                        onClick={() => { setBookingType('bunk'); setStep(2); }}
                        className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center gap-4 hover:border-lisbon-yellow hover:bg-lisbon-yellow/5 transition-all text-center"
                      >
                        <LucideBedSingle className="text-lisbon-blue" size={32} />
                        <div>
                          <span className="block font-bold">Hostel Bed</span>
                          <span className="text-xs text-slate-400 font-medium tracking-tight">From €15 / night</span>
                        </div>
                      </button>
                      <button
                        onClick={() => { setBookingType('locker'); setStep(2); }}
                        className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center gap-4 hover:border-lisbon-yellow hover:bg-lisbon-yellow/5 transition-all text-center"
                      >
                        <LucideBaggageClaim className="text-lisbon-tile" size={32} />
                        <div>
                          <span className="block font-bold">Secure Locker</span>
                          <span className="text-xs text-slate-400 font-medium tracking-tight">From €1 / hour</span>
                        </div>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="space-y-4">
                        <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 bg-slate-50 border-transparent border-2 focus:border-lisbon-yellow focus:bg-white rounded-xl outline-none transition-all font-body" />
                        <input type="tel" placeholder="WhatsApp / Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full p-4 bg-slate-50 border-transparent border-2 focus:border-lisbon-yellow focus:bg-white rounded-xl outline-none transition-all font-body" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="date" placeholder="Date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full p-4 bg-slate-50 border-transparent border-2 focus:border-lisbon-yellow focus:bg-white rounded-xl outline-none transition-all font-body" />
                          <input type="number" placeholder="Guests/Bags" value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} className="w-full p-4 bg-slate-50 border-transparent border-2 focus:border-lisbon-yellow focus:bg-white rounded-xl outline-none transition-all font-body" />
                        </div>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <button onClick={() => setStep(1)} className="flex-1 py-4 border-2 border-slate-100 text-slate-600 font-bold rounded-xl active:scale-95 transition-all">Back</button>
                        <button onClick={handleBooking} disabled={loading} className="flex-[2] py-4 bg-lisbon-blue text-white font-bold rounded-xl active:scale-95 transition-all shadow-xl shadow-lisbon-blue/20 flex items-center justify-center gap-2">
                          {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Request Booking <LucideSend size={18} /></>}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Header = ({ onBookClick }: { onBookClick: () => void }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const isHeroLight = (location.pathname === '/' || location.pathname === '/services') && !isScrolled;
  const textColor = isHeroLight ? 'text-white' : 'text-lisbon-blue';
  const subTextColor = isHeroLight ? 'text-lisbon-yellow' : 'text-lisbon-blue';
  const navHoverColor = isHeroLight ? 'hover:text-white' : 'hover:text-lisbon-blue';
  const logoBlend = isHeroLight ? 'mix-blend-screen' : 'mix-blend-multiply';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-2 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer no-underline">
          <div className="flex items-center justify-center bg-transparent">
            <img src="/logo.png" alt="Hostel 15" className={`h-[45px] md:h-[55px] w-auto object-contain ${logoBlend}`} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`font-heading font-black text-lg md:text-xl tracking-[0.1em] uppercase ${textColor}`}>Hostel 15</span>
            <span className={`font-heading font-black text-[7px] md:text-[8px] uppercase tracking-[0.3em] opacity-80 ${subTextColor}`}>
              {i18n.language === 'en' ? 'Your Lisbon Base' : 'A sua base em Lisboa'}
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/services"
            state={{ tab: 'hostel' }}
            className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${textColor} ${navHoverColor}`}
          >
            {t('header.hostel')}
          </Link>
          <Link
            to="/services"
            state={{ tab: 'luggage' }}
            className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${textColor} ${navHoverColor}`}
          >
            {t('header.luggage')}
          </Link>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 font-heading font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-xl border transition-all ${(!isHome || isScrolled) ? 'border-slate-200 text-slate-500 hover:text-slate-900' : 'border-white/10 text-white/60 hover:text-white'}`}
          >
            <LucideGlobe size={14} /> {i18n.language.toUpperCase()}
          </button>

          <button onClick={onBookClick} className="bg-lisbon-yellow text-lisbon-blue px-8 py-3 rounded-full font-heading font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-lisbon-yellow/10 hover:shadow-lisbon-yellow/30 transition-all active:scale-95">
            {t('header.book_now')}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`p-2.5 rounded-xl transition-all border ${isScrolled ? 'border-slate-100 bg-slate-50 text-slate-500' : 'border-white/10 bg-white/5 text-white/60'}`}
          >
            <LucideGlobe size={18} />
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2.5 rounded-xl transition-all ${isScrolled ? 'bg-lisbon-blue text-white shadow-lg' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}
          >
            <LucideMenu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar - Exact Match to Reference Image */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-[#1E3A8A] md:hidden flex flex-col"
            style={{ backgroundColor: '#1E3A8A' }}
          >
            {/* Header branding exactly like pic 2 */}
            <div className="p-10 pt-16 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center text-[#1E3A8A] font-black text-2xl shadow-lg">
                  15
                </div>
                <div className="flex flex-col">
                  <h2 className="font-heading font-black text-3xl text-white tracking-tight leading-none mb-1">HOSTEL MENU</h2>
                  <p className="text-[11px] font-black uppercase text-[#FFD700] tracking-[0.25em]">PREMIUM ACCESS</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all outline-none"
              >
                <LucideX size={28} />
              </button>
            </div>

            {/* Menu items exactly like pic 2: Vertical with Icon boxes */}
            <nav className="flex-1 px-10 flex flex-col justify-center gap-10">
              <Link
                to="/services"
                state={{ tab: 'hostel' }}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                  <LucideBedSingle size={32} className="text-[#FFD700] group-hover:text-[#1E3A8A]" />
                </div>
                <span className="font-heading font-black text-3xl text-white tracking-tight group-hover:translate-x-2 transition-transform">Hostel Rooms</span>
              </Link>

              <Link
                to="/services"
                state={{ tab: 'luggage' }}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                  <LucideBaggageClaim size={32} className="text-[#FFD700] group-hover:text-[#1E3A8A]" />
                </div>
                <span className="font-heading font-black text-3xl text-white tracking-tight group-hover:translate-x-2 transition-transform">Luggage Storage</span>
              </Link>

              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FFD700] transition-all duration-300">
                  <LucideGlobe size={32} className="text-[#FFD700] group-hover:text-[#1E3A8A]" />
                </div>
                <span className="font-heading font-black text-3xl text-white tracking-tight group-hover:translate-x-2 transition-transform">Lisbon Guide</span>
              </Link>
            </nav>

            {/* Bottom Exactly like pic 2: Big Yellow button & footer row */}
            <div className="p-10 pb-16 flex flex-col gap-10">
              <button
                onClick={() => { onBookClick(); setIsMenuOpen(false); }}
                className="w-full bg-[#FFD700] text-[#1E3A8A] py-6 rounded-[2rem] font-heading font-extrabold text-xl uppercase tracking-widest shadow-2xl shadow-[#FFD700]/20 flex items-center justify-center gap-4 active:scale-95 transition-all"
              >
                BOOK NOW <LucideSend size={24} />
              </button>

              <div className="flex justify-center items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
                <button onClick={toggleLanguage} className="hover:text-white transition-colors">{i18n.language.toUpperCase()}</button>
                <div className="h-4 w-px bg-white/10" />
                <span className="hover:text-white cursor-pointer transition-colors">INSTAGRAM</span>
                <span className="hover:text-white cursor-pointer transition-colors">WHATSAPP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
