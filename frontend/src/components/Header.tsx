import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LucideX, LucideShieldCheck, LucideBedSingle, LucideBaggageClaim, 
  LucideSend, LucideGlobe, LucideMenu, LucideUser, LucidePhone, 
  LucideCalendar, LucideUsers 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Magnetic from './abstract/Magnetic';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<'bunk' | 'locker' | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({ name: '', phone: '', date: '', quantity: '' });

  const handleBooking = async () => {
    if (!formData.name || !formData.phone || !formData.date || !formData.quantity) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] w-full max-w-md relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]"
          >
            {/* Design Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-lisbon-yellow/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />

            <button onClick={onClose} className="absolute top-6 right-6 p-2 text-white/20 hover:text-white transition-colors z-20"><LucideX size={18} /></button>

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 md:p-12 text-center"
              >
                <div className="relative mb-8 inline-block">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                  >
                    <LucideShieldCheck size={32} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-white uppercase tracking-tight">Request Received</h3>
                <p className="text-white/40 font-medium mb-8 leading-relaxed text-[11px]">Our concierge will contact you on WhatsApp within minutes to finalize your Lisbon sanctuary.</p>
                <button onClick={onClose} className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-lisbon-yellow transition-all shadow-xl">Return to Experience</button>
              </motion.div>
            ) : (
              <div className="p-8 md:p-10 relative z-10">
                {/* Progress Indicator */}
                <div className="flex gap-1.5 mb-8">
                  <div className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-lisbon-yellow' : 'bg-white/10'}`} />
                  <div className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-lisbon-yellow' : 'bg-white/10'}`} />
                </div>

                <div className="mb-8">
                  <span className="text-lisbon-yellow font-heading font-black tracking-[0.4em] text-[8px] uppercase mb-1.5 block">Sanctuary Access</span>
                  <h3 className="font-heading text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {step === 1 ? 'Select Your Scene' : 'Guest Information'}
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div 
                      key="step1"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      <motion.button
                        variants={itemVariants}
                        onClick={() => { setBookingType('bunk'); setStep(2); }}
                        className="p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] flex flex-col items-center gap-4 hover:border-lisbon-yellow hover:bg-white/[0.06] transition-all group relative overflow-hidden"
                      >
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-lisbon-yellow transition-all duration-500">
                          <LucideBedSingle className="text-lisbon-yellow group-hover:text-black" size={20} />
                        </div>
                        <div className="text-center">
                          <span className="block font-heading font-bold text-white text-sm uppercase tracking-tight mb-0.5">Hostel Bed</span>
                          <span className="text-[8px] text-white/30 font-black uppercase tracking-widest">From €15 / NT</span>
                        </div>
                      </motion.button>
                      
                      <motion.button
                        variants={itemVariants}
                        onClick={() => { setBookingType('locker'); setStep(2); }}
                        className="p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] flex flex-col items-center gap-4 hover:border-lisbon-yellow hover:bg-white/[0.06] transition-all group relative overflow-hidden"
                      >
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-500">
                          <LucideBaggageClaim className="text-blue-500 group-hover:text-white" size={20} />
                        </div>
                        <div className="text-center">
                          <span className="block font-heading font-bold text-white text-sm uppercase tracking-tight mb-0.5">Locker</span>
                          <span className="text-[8px] text-white/30 font-black uppercase tracking-widest">From €1 / HR</span>
                        </div>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="step2"
                      variants={containerVariants}
                      initial={{ opacity: 0, x: 20 }}
                      animate="visible"
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-3"
                    >
                      <motion.div variants={itemVariants} className="relative group">
                        <LucideUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lisbon-yellow transition-colors" size={16} />
                        <input type="text" placeholder="FULL NAME" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-5 py-4 bg-white/[0.02] border border-white/10 focus:border-lisbon-yellow rounded-xl outline-none transition-all font-heading font-bold text-white uppercase text-[10px] tracking-widest placeholder:text-white/10" />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative group">
                        <LucidePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lisbon-yellow transition-colors" size={16} />
                        <input type="tel" placeholder="WHATSAPP NUMBER" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-12 pr-5 py-4 bg-white/[0.02] border border-white/10 focus:border-lisbon-yellow rounded-xl outline-none transition-all font-heading font-bold text-white uppercase text-[10px] tracking-widest placeholder:text-white/10" />
                      </motion.div>

                      <div className="grid grid-cols-2 gap-3">
                        <motion.div variants={itemVariants} className="relative group">
                          <LucideCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lisbon-yellow transition-colors" size={16} />
                          <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full pl-12 pr-3 py-4 bg-white/[0.02] border border-white/10 focus:border-lisbon-yellow rounded-xl outline-none transition-all font-heading font-bold text-white uppercase text-[9px] tracking-widest" />
                        </motion.div>
                        <motion.div variants={itemVariants} className="relative group">
                          <LucideUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lisbon-yellow transition-colors" size={16} />
                          <input type="number" placeholder="COUNT" value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} className="w-full pl-12 pr-3 py-4 bg-white/[0.02] border border-white/10 focus:border-lisbon-yellow rounded-xl outline-none transition-all font-heading font-bold text-white uppercase text-[10px] tracking-widest placeholder:text-white/10" />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="flex gap-3 pt-4">
                        <button onClick={() => setStep(1)} className="flex-1 py-4 border border-white/10 text-white/40 font-heading font-bold uppercase text-[8px] tracking-widest rounded-xl hover:bg-white/5 active:scale-95 transition-all">Back</button>
                        <button 
                          onClick={handleBooking} 
                          disabled={loading || !formData.name || !formData.phone || !formData.date || !formData.quantity} 
                          className="flex-[2] py-4 bg-lisbon-yellow disabled:bg-white/10 disabled:text-white/20 text-black font-heading font-black uppercase text-[8px] tracking-widest rounded-xl active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,215,0,0.1)] flex items-center justify-center gap-2"
                        >
                          {loading ? <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : <>Request Access <LucideSend size={12} /></>}
                        </button>
                      </motion.div>
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
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Hostel 15" className={`h-[45px] md:h-[55px] w-auto object-contain ${logoBlend}`} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`font-heading font-black text-lg md:text-xl tracking-[0.1em] uppercase ${textColor}`}>Hostel 15</span>
            <span className={`font-heading font-black text-[7px] md:text-[8px] uppercase tracking-[0.3em] opacity-80 ${subTextColor}`}>
              {i18n.language === 'en' ? 'Your Lisbon Base' : 'A sua base em Lisboa'}
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Magnetic strength={0.2}>
            <Link
              to="/services"
              state={{ tab: 'hostel' }}
              className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${textColor} ${navHoverColor}`}
            >
              {t('header.hostel')}
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link
              to="/services"
              state={{ tab: 'luggage' }}
              className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${textColor} ${navHoverColor}`}
            >
              {t('header.luggage')}
            </Link>
          </Magnetic>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 font-heading font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-xl border transition-all ${(!isHome || isScrolled) ? 'border-slate-200 text-slate-500 hover:text-slate-900' : 'border-white/10 text-white/60 hover:text-white'}`}
          >
            <LucideGlobe size={14} /> {i18n.language.toUpperCase()}
          </button>

          <Magnetic strength={0.3}>
            <button onClick={onBookClick} className="bg-lisbon-yellow text-lisbon-blue px-8 py-3 rounded-full font-heading font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-lisbon-yellow/10 hover:shadow-lisbon-yellow/30 transition-all active:scale-95">
              {t('header.book_now')}
            </button>
          </Magnetic>
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
