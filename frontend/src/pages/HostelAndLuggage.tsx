import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  LucideWifi, LucideShieldCheck, LucideCheckCircle2,
  LucideArrowRight, LucideBaggageClaim, LucideBedSingle, LucideMaximize2, LucideClock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HOSTEL_RATES, LUGGAGE_RATES } from '../constants/services';
import MaskedText from '../components/abstract/MaskedText';
import GlassCard from '../components/abstract/GlassCard';

const HostelAndLuggage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'hostel' | 'luggage'>('hostel');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: false, phone: false });

  useEffect(() => {
    if (location.state && (location.state as any).tab) {
      setActiveTab((location.state as any).tab);
    }
  }, [location.state]);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const nameValid = formData.name.trim().length > 2;
    const phoneValid = /^\+?[0-9\s-]{8,20}$/.test(formData.phone);

    if (!nameValid || !phoneValid) {
      setErrors({ name: !nameValid, phone: !phoneValid });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-lisbon-yellow/30 font-body overflow-x-hidden">

      {/* 1. CINEMATIC FULL SCREEN HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center p-0 overflow-hidden bg-slate-950">

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}lisbon_cityscape.png`}
              alt="Background"
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-[1]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <MaskedText as="span" className="text-lisbon-yellow font-heading font-black tracking-[0.6em] text-[8px] md:text-[10px] uppercase mb-4 block opacity-60">
            {activeTab === 'hostel' ? 'The Stay' : 'The Storage'}
          </MaskedText>
          <MaskedText as="h1" className="font-serif italic text-5xl md:text-8xl text-white leading-none tracking-tight mb-8">
            {activeTab === 'hostel' ? 'Hostel Rooms' : 'Luggage Space'}
          </MaskedText>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white/60">Explore Rates</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-lisbon-yellow via-lisbon-yellow to-transparent"
          />
        </motion.div>
      </section>


      <nav className="border-b border-white/5 sticky top-[72px] md:top-[88px] z-40 bg-slate-950/90 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10 md:gap-20">
          <button onClick={() => setActiveTab('hostel')} className={`group py-6 font-heading font-black text-[9px] uppercase tracking-[0.4em] transition-all relative ${activeTab === 'hostel' ? 'text-lisbon-yellow' : 'text-white/30 hover:text-white'}`}>
            <span className="flex items-center gap-2">
              <LucideBedSingle size={12} />
              {t('services.tab_hostel')}
            </span>
            {activeTab === 'hostel' && <motion.div layoutId="service-tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-lisbon-yellow" />}
          </button>
          <button onClick={() => setActiveTab('luggage')} className={`group py-6 font-heading font-black text-[9px] uppercase tracking-[0.4em] transition-all relative ${activeTab === 'luggage' ? 'text-lisbon-yellow' : 'text-white/30 hover:text-white'}`}>
            <span className="flex items-center gap-2">
              <LucideBaggageClaim size={12} />
              {t('services.tab_luggage')}
            </span>
            {activeTab === 'luggage' && <motion.div layoutId="service-tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-lisbon-yellow" />}
          </button>
        </div>
      </nav>

      {/* 3. MAIN SHOWCASE - Dark Mode Editorial */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className="space-y-24 md:space-y-32">
            {activeTab === 'hostel' ? (
              <div className="space-y-24 md:space-y-32">
                {HOSTEL_RATES.map((rate, i) => (
                  <div key={rate.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <motion.div variants={itemVariants} className={`aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-white/5 ${i % 2 !== 0 ? 'md:order-2 md:translate-y-8' : 'md:-translate-y-8'}`}>
                      <img src={rate.id === 'bunk' ? `${import.meta.env.BASE_URL}hostel_dorm.png` : `${import.meta.env.BASE_URL}high_res_royal_suite.png`} alt={rate.name.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                        <span className="text-lisbon-yellow font-heading font-black text-[9px] uppercase tracking-[0.3em] flex items-center gap-2 opacity-60">
                          <LucideMaximize2 size={14} /> Detail View
                        </span>
                      </div>
                    </motion.div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-lisbon-blue bg-lisbon-yellow px-4 py-1 rounded-xl font-black text-[8px] uppercase tracking-[0.3em] inline-block shadow-xl shadow-lisbon-yellow/10">{t('services.experience_badge')}</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <MaskedText as="h2" className="font-serif italic text-4xl md:text-6xl text-white/90 leading-[0.9] tracking-tight uppercase whitespace-normal">{i18n.language === 'en' ? rate.name.en : rate.name.pt}</MaskedText>
                      <p className="text-white/30 font-medium font-body text-sm leading-relaxed max-w-md uppercase tracking-wider opacity-60">{i18n.language === 'en' ? rate.description.en : rate.description.pt}</p>
                      <div className="pt-6 flex items-center gap-10">
                        <div className="flex flex-col">
                          <span className="text-white/20 font-black text-[8px] uppercase tracking-[0.4em] mb-1">Investment</span>
                          <span className="text-white/90 font-heading font-black text-4xl tracking-tighter">{rate.price}<span className="text-xs opacity-20 tracking-[0.2em] ml-1 uppercase">{rate.unit}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-[8px] font-black uppercase text-lisbon-yellow bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                          <LucideWifi size={12} /> Fiber wifi
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div variants={itemVariants} className="aspect-square rounded-[3rem] bg-white/5 border border-white/5 flex items-center justify-center p-16 relative shadow-3xl overflow-hidden group">
                  <LucideBaggageClaim size={200} className="text-white/5 absolute" />
                  <img src={`${import.meta.env.BASE_URL}storage.png`} alt="Storage" className="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 opacity-80" />
                </motion.div>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <span className="text-lisbon-blue bg-lisbon-yellow px-4 py-1 rounded-xl font-black text-[8px] uppercase tracking-[0.3em] inline-block shadow-xl shadow-lisbon-yellow/10">{t('services.security_badge')}</span>
                    <MaskedText as="h2" className="font-serif italic text-4xl md:text-6xl text-white/90 leading-[0.9] tracking-tight uppercase">{t('services.luggage_liberty')}</MaskedText>
                  </div>
                  <div className="space-y-4">
                    {LUGGAGE_RATES.map((locker) => (
                      <GlassCard key={locker.id} className="flex justify-between items-center group py-4 px-6 border-white/5">
                        <div className="space-y-1">
                          <h4 className="font-serif italic text-xl text-white/80 group-hover:text-lisbon-yellow transition-colors uppercase tracking-tight">{i18n.language === 'en' ? locker.name.en : locker.name.pt}</h4>
                          <p className="text-[9px] uppercase font-black text-white/20 tracking-[0.2em] transition-colors">{i18n.language === 'en' ? locker.description.en : locker.description.pt}</p>
                        </div>
                        <span className="font-heading font-black text-3xl text-white/90 group-hover:scale-105 transition-transform">{locker.price}<span className="text-[10px] opacity-20 ml-1 tracking-widest">{locker.unit}</span></span>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. FINAL CTA - Refined Scaling */}
      <section className="bg-slate-950 py-20 px-6 relative overflow-hidden border-t border-white/5">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="w-10 h-10 bg-lisbon-yellow rounded-lg flex items-center justify-center text-lisbon-blue mb-8 shadow-2xl shadow-lisbon-yellow/20"><LucideShieldCheck size={20} /></motion.div>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white/90 leading-tight tracking-tight mb-10">
            {t('services.finalize_header')}<br /><span className="text-lisbon-yellow">{t('services.now_header')}</span>
          </h2>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <GlassCard className="p-10 text-center w-full border-white/5">
                <LucideCheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="font-serif italic text-2xl text-white/90 mb-2 tracking-tight">{t('services.submitted')}</h3>
                <button onClick={() => setIsSuccess(false)} className="text-lisbon-yellow font-black text-[9px] uppercase tracking-[0.4em] border-b border-lisbon-yellow pb-1 px-4 mt-4">New Request</button>
              </GlassCard>
            ) : (
              <motion.form variants={containerVariants} initial="hidden" whileInView="visible" onSubmit={handleRequest} className="w-full space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="text" placeholder={t('services.form_name')} value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: false }); }} className="w-full py-3 bg-transparent border-b border-white/10 outline-none font-serif italic text-lg transition-all placeholder:text-white/10 text-white focus:border-lisbon-yellow" />
                  <input required type="tel" placeholder={t('services.form_phone')} value={formData.phone} onChange={e => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: false }); }} className="w-full py-3 bg-transparent border-b border-white/10 outline-none font-serif italic text-lg transition-all placeholder:text-white/10 text-white focus:border-lisbon-yellow" />
                </div>
                <motion.button disabled={isLoading} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-xl font-heading font-black uppercase tracking-[0.4em] text-[10px] shadow-xl flex items-center justify-center gap-3 group hover:bg-white transition-all duration-300">
                  {isLoading ? 'ESTABLISHING...' : t('services.inquire_btn')}
                  <LucideArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default HostelAndLuggage;
