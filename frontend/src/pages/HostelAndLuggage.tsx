import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  LucideWifi, LucideShieldCheck, LucideCheckCircle2,
  LucideArrowRight, LucideBaggageClaim, LucideBedSingle, LucideMaximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HOSTEL_RATES, LUGGAGE_RATES } from '../constants/services';

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
    <div className="relative min-h-screen bg-[#0A1128] text-white selection:bg-lisbon-yellow/30 font-body overflow-x-hidden">

      {/* 1. CINEMATIC FULL SCREEN HERO - Pure Image & Hotel 15 (No Black Overlay) */}
      <section className="relative h-screen flex flex-col items-center justify-center p-0 overflow-hidden bg-lisbon-blue">

        {/* The "Blushing" Photo Layer - PURE & FULL COLOR */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
              filter: ['brightness(0.8)', 'brightness(1.1)', 'brightness(0.8)']
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src="lisbon_cityscape.png"
              alt="Background Blush Pure"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>

          {/* Minimalist vignetting for depth, removing heavy black/navy blocks */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A1128]/40 z-[1]" />

          {/* Interactive Accent Glow - Simplified to not block the pic */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-lisbon-yellow/30 rounded-full blur-[150px] z-[2]"
          />

          {/* Subtle Tech Grid */}
          <div className="absolute inset-0 opacity-[0.03] z-[3]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Scroll Indicator - Final Polish */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-lisbon-yellow via-lisbon-yellow to-transparent"
          />
        </motion.div>


        <motion.div
          className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

        </motion.div>
      </section>


      <nav className="border-b border-white/5 sticky top-[72px] md:top-[88px] z-40 bg-[#0A1128]/90 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 md:gap-24">
          <button onClick={() => setActiveTab('hostel')} className={`group py-8 font-heading font-black text-[11px] uppercase tracking-[0.3em] transition-all relative ${activeTab === 'hostel' ? 'text-lisbon-yellow' : 'text-white/40 hover:text-white'}`}>
            <span className="flex items-center gap-3">
              <LucideBedSingle size={14} />
              {t('services.tab_hostel')}
            </span>
            {activeTab === 'hostel' && <motion.div layoutId="service-tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-lisbon-yellow shadow-[0_0_20px_rgba(255,193,7,0.5)]" />}
          </button>
          <button onClick={() => setActiveTab('luggage')} className={`group py-8 font-heading font-black text-[11px] uppercase tracking-[0.3em] transition-all relative ${activeTab === 'luggage' ? 'text-lisbon-yellow' : 'text-white/40 hover:text-white'}`}>
            <span className="flex items-center gap-3">
              <LucideBaggageClaim size={14} />
              {t('services.tab_luggage')}
            </span>
            {activeTab === 'luggage' && <motion.div layoutId="service-tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-lisbon-yellow shadow-[0_0_20px_rgba(255,193,7,0.5)]" />}
          </button>
        </div>
      </nav>

      {/* 3. MAIN SHOWCASE - Dark Mode Editorial */}
      <main className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className="space-y-40 md:space-y-64">
            {activeTab === 'hostel' ? (
              <div className="space-y-40 md:space-y-64">
                {HOSTEL_RATES.map((rate, i) => (
                  <div key={rate.id} className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <motion.div variants={itemVariants} className={`aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl relative group border-2 border-white/5 ${i % 2 !== 0 ? 'md:order-2 md:translate-y-12' : 'md:-translate-y-12'}`}>
                      <img src={rate.id === 'bunk' ? "hostel_dorm.png" : "high_res_royal_suite.png"} alt={rate.name.en} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 to-transparent flex items-end p-10">
                        <span className="text-lisbon-yellow font-heading font-black text-xs uppercase tracking-widest flex items-center gap-3">
                          <LucideMaximize2 size={16} /> Detail View
                        </span>
                      </div>
                    </motion.div>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <span className="text-lisbon-blue bg-lisbon-yellow px-6 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest inline-block shadow-2xl shadow-lisbon-yellow/20">{t('services.experience_badge')}</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <h2 className="font-heading text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase whitespace-normal">{i18n.language === 'en' ? rate.name.en : rate.name.pt}</h2>
                      <p className="text-white/40 font-bold font-heading text-xl leading-relaxed max-w-lg">{i18n.language === 'en' ? rate.description.en : rate.description.pt}</p>
                      <div className="pt-8 flex items-center gap-12">
                        <div className="flex flex-col">
                          <span className="text-white/20 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Investment</span>
                          <span className="text-white font-heading font-black text-5xl tracking-tighter">{rate.price}<span className="text-sm opacity-30 tracking-widest">{rate.unit}</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase text-lisbon-yellow bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                          <LucideWifi size={14} /> Full Fiber
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-40 items-center">
                <motion.div variants={itemVariants} className="aspect-square rounded-[4rem] bg-white/5 border-8 border-white/5 flex items-center justify-center p-24 relative shadow-3xl overflow-hidden group">
                  <LucideBaggageClaim size={300} className="text-white/5 absolute" />
                  <img src="storage.png" alt="Storage" className="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <div className="space-y-16">
                  <div className="space-y-6">
                    <span className="text-lisbon-blue bg-lisbon-yellow px-6 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest inline-block shadow-2xl shadow-lisbon-yellow/20">{t('services.security_badge')}</span>
                    <h2 className="font-heading text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase">{t('services.luggage_liberty')}</h2>
                  </div>
                  <div className="space-y-6">
                    {LUGGAGE_RATES.map((locker) => (
                      <motion.div key={locker.id} whileHover={{ x: 10 }} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 shadow-3xl flex justify-between items-center group transition-all">
                        <div className="space-y-2">
                          <h4 className="font-heading font-black text-3xl text-white group-hover:text-lisbon-yellow transition-colors uppercase tracking-tight">{i18n.language === 'en' ? locker.name.en : locker.name.pt}</h4>
                          <p className="text-[11px] uppercase font-black text-white/30 tracking-[0.15em] transition-colors">{i18n.language === 'en' ? locker.description.en : locker.description.pt}</p>
                        </div>
                        <span className="font-heading font-black text-5xl text-white group-hover:scale-110 transition-transform">{locker.price}<span className="text-sm opacity-20">{locker.unit}</span></span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. FINAL CTA - Refined Scaling */}
      <section className="bg-[#080E21] py-20 md:py-24 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lisbon-yellow/5 rounded-full blur-[200px]" />
        <div className="max-w-xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="w-12 h-12 bg-lisbon-yellow rounded-[1rem] flex items-center justify-center text-lisbon-blue mb-10 shadow-2xl shadow-lisbon-yellow/20"><LucideShieldCheck size={24} /></motion.div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-12">
            {t('services.finalize_header')}<br /><span className="text-lisbon-yellow">{t('services.now_header')}</span>
          </h2>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div key="success-f" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-12 bg-[#0A1128] rounded-[2.5rem] shadow-3xl text-center w-full border-2 border-white/5">
                <LucideCheckCircle2 size={48} className="text-emerald-500 mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-black text-white mb-3 uppercase tracking-tighter">{t('services.submitted')}</h3>
                <button onClick={() => setIsSuccess(false)} className="text-lisbon-yellow font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-lisbon-yellow pb-1 px-4 mt-6">New Request</button>
              </motion.div>
            ) : (
              <motion.form variants={containerVariants} initial="hidden" whileInView="visible" onSubmit={handleRequest} className="w-full space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input required type="text" placeholder={t('services.form_name')} value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: false }); }} className="w-full py-4 bg-transparent border-b-2 border-white/5 outline-none font-heading font-black text-lg transition-all placeholder:text-white/10 text-white focus:border-lisbon-yellow" />
                  <input required type="tel" placeholder={t('services.form_phone')} value={formData.phone} onChange={e => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: false }); }} className="w-full py-4 bg-transparent border-b-2 border-white/5 outline-none font-heading font-black text-lg transition-all placeholder:text-white/10 text-white focus:border-lisbon-yellow" />
                </div>
                <motion.button disabled={isLoading} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-2xl font-heading font-black uppercase tracking-[0.4em] text-[10px] shadow-xl flex items-center justify-center gap-4 group">
                  {isLoading ? 'ESTABLISHING...' : t('services.inquire_btn')}
                  <LucideArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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
