import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { LucideX, LucideShieldCheck, LucideBedSingle, LucideBaggageClaim, LucideSend, LucideGlobe, LucideMenu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<'bunk' | 'locker' | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', phone: '', date: '', quantity: '' });

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' });
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div ref={modalRef} className="bg-white rounded-3xl w-full max-w-lg relative overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"><LucideX size={20} /></button>

        {success ? (
          <div className="p-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <LucideShieldCheck size={40} />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Booking Requested!</h3>
            <p className="text-slate-500 mb-8">Success! We'll confirm your arrival time via WhatsApp shortly. Payment is on premises.</p>
            <button onClick={onClose} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold">Back to Site</button>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="font-heading text-2xl font-bold mb-6">Advance Booking</h3>

            {step === 1 && (
              <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-right duration-300">
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
                  className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center gap-4 hover:border-lisbon-tile hover:bg-lisbon-tile/5 transition-all text-center"
                >
                  <LucideBaggageClaim className="text-lisbon-tile" size={32} />
                  <div>
                    <span className="block font-bold">Secure Locker</span>
                    <span className="text-xs text-slate-400 font-medium tracking-tight">From €1 / hour</span>
                  </div>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in slide-in-from-right duration-300">
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
              </div>
            )}
          </div>
        )}
      </div>
    </div>
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer no-underline">
          <div className="flex items-center justify-center">
            <img src="logo.png" alt="Hostel 15" className="h-[75px] w-auto object-contain" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`font-heading font-black text-2xl tracking-[0.1em] uppercase ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>Hostel 15</span>
            <span className={`font-heading font-black text-[9px] uppercase tracking-[0.3em] opacity-80 ${isScrolled || !isHome ? 'text-slate-500' : 'text-lisbon-yellow'}`}>
              {i18n.language === 'en' ? 'Your Lisbon Base' : 'A sua base em Lisboa'}
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/services"
            state={{ tab: 'hostel' }}
            className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${isScrolled || !isHome ? 'text-slate-600 hover:text-lisbon-blue' : 'text-slate-100 hover:text-white'}`}
          >
            {t('header.hostel')}
          </Link>
          <Link
            to="/services"
            state={{ tab: 'luggage' }}
            className={`font-heading font-black text-[10px] uppercase tracking-widest transition-colors ${isScrolled || !isHome ? 'text-slate-600 hover:text-lisbon-blue' : 'text-slate-100 hover:text-white'}`}
          >
            {t('header.luggage')}
          </Link>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 font-heading font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-xl border ${isScrolled || !isHome ? 'border-slate-100 text-slate-400 hover:text-lisbon-blue' : 'border-white/10 text-white/60 hover:text-white'} transition-all`}
          >
            <LucideGlobe size={14} /> {i18n.language.toUpperCase()}
          </button>

          <button onClick={onBookClick} className="bg-lisbon-yellow text-lisbon-blue px-8 py-3 rounded-full font-heading font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-lisbon-yellow/10 hover:shadow-lisbon-yellow/30 transition-all active:scale-95">
            {t('header.book_now')}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className={`p-3 rounded-2xl transition-all ${isScrolled || !isHome ? 'bg-slate-50 text-slate-400' : 'bg-white/10 text-white/60'}`}
          >
            <LucideGlobe size={20} />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-3 rounded-2xl transition-all ${isScrolled || !isHome ? 'bg-slate-50 text-slate-900' : 'bg-white/10 text-white'}`}
          >
            {isMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[70] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="absolute top-0 right-0 p-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-slate-900 bg-slate-100 p-4 rounded-full">
            <LucideX size={32} />
          </button>
        </div>

        <div className="h-full flex flex-col justify-center items-center px-10 gap-16 text-center">
          <div className="flex flex-col gap-10">
            <Link
              to="/services"
              state={{ tab: 'hostel' }}
              onClick={() => setIsMenuOpen(false)}
              className="block font-heading text-5xl font-black italic uppercase tracking-tighter text-lisbon-blue"
            >
              {t('header.hostel')}
            </Link>
            <Link
              to="/services"
              state={{ tab: 'luggage' }}
              onClick={() => setIsMenuOpen(false)}
              className="block font-heading text-5xl font-black italic uppercase tracking-tighter text-lisbon-blue"
            >
              {t('header.luggage')}
            </Link>
          </div>

          <div className="w-16 h-1 bg-slate-100 rounded-full" />

          <button
            onClick={() => { onBookClick(); setIsMenuOpen(false); }}
            className="w-full max-w-sm bg-lisbon-yellow text-lisbon-blue py-6 rounded-full font-heading font-black italic uppercase text-2xl shadow-2xl shadow-lisbon-yellow/20 active:scale-95 transition-all"
          >
            {t('header.book_now')}
          </button>
        </div>
      </div>
    </header>
  );
};
