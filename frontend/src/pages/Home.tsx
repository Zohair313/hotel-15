import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { LucideShieldCheck, LucideClock, LucideMapPin, LucideChevronRight, LucideMonitor, LucideCheckCircle2, LucideAward, LucideLock, LucideGlobe, LucideWifi, LucideCoffee, LucideStar, LucideHelpCircle, LucideX, LucidePlus, LucideMinus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- Main Home Component ---

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  const { t, i18n } = useTranslation();
  const heroTextRef = useRef(null);
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);
  useEffect(() => {
    // Basic reveal for cards (Non-intrusive)
    gsap.from('.marketing-card', {
      scrollTrigger: {
        trigger: '.marketing-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col pt-40 pb-12 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center scale-110">
            <div className="absolute inset-0 bg-cyan-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex-1 flex flex-col">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div ref={heroTextRef} className="space-y-10">
              <div className="flex items-center gap-3 badge-line leading-tight">
                <span className="px-3 py-1.5 bg-lisbon-yellow text-lisbon-blue font-black rounded-lg text-[10px] uppercase tracking-widest">{t('hero.badge')}</span>
                <div className="h-px w-10 bg-white/20"></div>
                <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">{t('hero.subtitle')}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tighter mb-8 italic">
                ARRIVE <span className="text-lisbon-yellow">SERVICE</span> EXPLORE
              </h1>

              <p className="font-body text-xl text-white font-black max-w-lg leading-relaxed border-l-4 border-lisbon-yellow pl-6 drop-shadow-xl py-2 mb-10">
                {t('hero.tagline')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={onBookClick} className="bg-lisbon-yellow text-lisbon-blue px-8 sm:px-12 py-4 sm:py-5 rounded-full font-heading font-black text-lg sm:text-xl shadow-2xl shadow-lisbon-yellow/20 hover:scale-105 transition-all active:scale-95 group">
                  {t('hero.cta')}
                  <LucideChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-2xl text-white border-2 border-white/20 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-heading font-black text-lg sm:text-xl hover:bg-white transition-all hover:text-slate-900">
                  See Rooms
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-500">
              <div className="bg-slate-900/40 backdrop-blur-3xl p-12 rounded-[3.5rem] border-2 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] space-y-12">
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white"><LucideShieldCheck size={32} /></div>
                  <div>
                    <h4 className="text-white text-xl font-black mb-1">CCTV Protected</h4>
                    <p className="text-white/40 text-sm font-bold tracking-wide uppercase">24/7 Security Coverage</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white"><LucideClock size={32} /></div>
                  <div>
                    <h4 className="text-white text-xl font-black mb-1">Flexible Check-in</h4>
                    <p className="text-white/40 text-sm font-bold tracking-wide uppercase">Anytime access in Baixa</p>
                  </div>
                </div>
                <div className="pt-10 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    <span>Locker Availability</span>
                    <span className="text-emerald-400">● 14/20 Free</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
                    <div className="h-full bg-emerald-500 rounded-full w-[70%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted By / Authorities Section Animated */}
      <section className="py-10 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-[100vw]">
          <p className="text-center text-lisbon-yellow font-bold tracking-[0.2em] text-[10px] uppercase mb-8 opacity-60">Official Booking Partners & Local Authority</p>

          <div className="flex items-center opacity-60 overflow-hidden">
            <div className="animate-marquee">
              {/* Set 1 & 2 for continuous loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 md:gap-40 px-6 md:px-12">
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter text-blue-600 shrink-0">Booking.com</span>
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter text-rose-500 italic shrink-0">Airbnb</span>
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 shrink-0">Expedia</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <LucideAward className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                    <span className="text-lg md:text-2xl font-black uppercase tracking-tighter text-slate-900">Turismo De Portugal</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms / Referal Rooms Section */}
      {/* Featured Rooms & Selection Section */}
      <section id="featured-rooms" className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-lisbon-yellow font-black tracking-[0.3em] text-xs uppercase mb-4 block underline decoration-lisbon-yellow/30 underline-offset-8">The Process</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-lisbon-blue leading-tight mb-12">{i18n.language === 'en' ? 'Three Simple Steps' : 'Três Passos Simples'}</h2>

            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 hidden md:block -z-10"></div>
              {[
                {
                  step: "01",
                  title: { en: "Book Instantly", pt: "Reserve Agora" },
                  desc: { en: "Select your room or locker size online in seconds.", pt: "Escolha o seu quarto ou armário online em segundos." },
                  icon: <LucideShieldCheck className="text-lisbon-yellow" size={48} />
                },
                {
                  step: "02",
                  title: { en: "Drop & Secure", pt: "Deixe e Segure" },
                  desc: { en: "Arrive at Rossio and drop your items with digital access.", pt: "Chegue ao Rossio e deixe os seus itens com acesso digital." },
                  icon: <LucideClock className="text-blue-500" size={48} />
                },
                {
                  step: "03",
                  title: { en: "Live Lisbon", pt: "Viva Lisboa" },
                  desc: { en: "Hands-free exploration from the heart of the city.", pt: "Explore a cidade de mãos livres a partir do centro." },
                  icon: <LucideMapPin className="text-emerald-500" size={48} />
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group relative">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border-2 border-slate-100 group-hover:scale-110 group-hover:border-lisbon-yellow transition-all duration-500 bg-gradient-to-br from-white to-slate-50">
                    {item.icon}
                    <span className="absolute -top-4 -right-4 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-black text-slate-900 mb-4">{i18n.language === 'en' ? item.title.en : item.title.pt}</h3>
                  <p className="text-slate-800 font-bold max-w-[250px] leading-relaxed text-sm opacity-100 text-center">{i18n.language === 'en' ? item.desc.en : item.desc.pt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-20">
            <span className="text-lisbon-yellow font-black tracking-[0.3em] text-xs uppercase mb-4 block">{t('selection.header_sub')}</span>
            <h2 className="font-heading text-5xl md:text-6xl font-black text-lisbon-blue leading-tight mb-6">{t('selection.header_main')}</h2>
            <p className="text-slate-900 font-body text-xl max-w-2xl mx-auto font-black">{t('selection.header_desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Shared Dorms */}
            <div className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col border border-slate-100 hover:-translate-y-4">
              <div className="relative h-64 overflow-hidden">
                <img src="dorm.png" alt="Shared Dorm" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">Social & Fun</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-slate-50/30">
                <h3 className="font-heading text-2xl font-black mb-2 text-slate-900 tracking-tight">{t('selection.shared_title')}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed font-bold">{t('selection.shared_desc')}</p>
                <div className="flex gap-4 mb-8 text-slate-400">
                  <div className="flex items-center gap-1.5"><LucideWifi size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Free</span></div>
                  <div className="flex items-center gap-1.5"><LucideLock size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Locker</span></div>
                </div>
                <div className="flex justify-between items-center mb-8 pt-6 border-t border-slate-100">
                  <span className="text-slate-400 font-black uppercase text-[9px] tracking-[0.2em] leading-none">Starting at</span>
                  <span className="font-heading font-black text-3xl text-slate-900 leading-none">€15<span className="text-[10px] font-black text-slate-400 align-top ml-1">NT</span></span>
                </div>
                <button onClick={onBookClick} className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black hover:bg-lisbon-blue transition-all active:scale-95 shadow-xl uppercase text-[10px] tracking-[0.3em]">{t('selection.select_btn')}</button>
              </div>
            </div>

            {/* 2. Private Rooms */}
            <div className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col border border-slate-100 hover:-translate-y-4">
              <div className="relative h-64 overflow-hidden">
                <img src="private.png" alt="Private Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-blue-600/30 backdrop-blur-xl border border-white/20 text-white px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">Quiet & Calm</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-slate-50/30">
                <h3 className="font-heading text-2xl font-black mb-2 text-slate-900 tracking-tight">{t('selection.private_title')}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed font-bold">{t('selection.private_desc')}</p>
                <div className="flex gap-4 mb-8 text-slate-400">
                  <div className="flex items-center gap-1.5"><LucideWifi size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Free</span></div>
                  <div className="flex items-center gap-1.5"><LucideCheckCircle2 size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Suite</span></div>
                </div>
                <div className="flex justify-between items-center mb-8 pt-6 border-t border-slate-100">
                  <span className="text-slate-400 font-black uppercase text-[9px] tracking-[0.2em] leading-none">Starting at</span>
                  <span className="font-heading font-black text-3xl text-slate-900 leading-none">€45<span className="text-[10px] font-black text-slate-400 align-top ml-1">NT</span></span>
                </div>
                <button onClick={onBookClick} className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black hover:bg-lisbon-blue transition-all active:scale-95 shadow-xl uppercase text-[10px] tracking-[0.3em]">{t('selection.select_btn')}</button>
              </div>
            </div>

            {/* 3. Storage */}
            <div className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col border border-slate-100 hover:-translate-y-4">
              <div className="relative h-64 overflow-hidden">
                <img src="storage.png" alt="Luggage Storage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-lisbon-yellow/30 backdrop-blur-xl border border-white/20 text-white px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">Always Secure</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-slate-50/30">
                <h3 className="font-heading text-2xl font-black mb-2 text-slate-900 tracking-tight">{t('selection.storage_title')}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed font-bold">{t('selection.storage_desc')}</p>
                <div className="flex gap-4 mb-8 text-slate-400">
                  <div className="flex items-center gap-1.5"><LucideMonitor size={14} /><span className="text-[10px] uppercase font-black tracking-widest">CCTV</span></div>
                  <div className="flex items-center gap-1.5"><LucideClock size={14} /><span className="text-[10px] uppercase font-black tracking-widest">24/7</span></div>
                </div>
                <div className="flex justify-between items-center mb-8 pt-6 border-t border-slate-100">
                  <span className="text-slate-400 font-black uppercase text-[9px] tracking-[0.2em] leading-none">Starting at</span>
                  <span className="font-heading font-black text-3xl text-slate-900 leading-none">€1<span className="text-[10px] font-black text-slate-400 align-top ml-1">HR</span></span>
                </div>
                <button onClick={onBookClick} className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black hover:bg-lisbon-blue transition-all active:scale-95 shadow-xl uppercase text-[10px] tracking-[0.3em] text-center">{t('selection.select_btn')}</button>
              </div>
            </div>

            {/* 4. Social Lounge */}
            <div className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col border border-slate-100 hover:-translate-y-4">
              <div className="relative h-64 overflow-hidden">
                <img src="lounge.png" alt="Social Lounge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-emerald-600/30 backdrop-blur-xl border border-white/20 text-white px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">Free Access</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-slate-50/30">
                <h3 className="font-heading text-2xl font-black mb-2 text-slate-900 tracking-tight">{t('selection.lounge_title')}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed font-bold">{t('selection.lounge_desc')}</p>
                <div className="flex gap-4 mb-8 text-slate-400">
                  <div className="flex items-center gap-1.5"><LucideWifi size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Free</span></div>
                  <div className="flex items-center gap-1.5"><LucideCoffee size={14} /><span className="text-[10px] uppercase font-black tracking-widest">Bar</span></div>
                </div>
                <div className="flex justify-between items-center mb-8 pt-6 border-t border-slate-100">
                  <span className="text-slate-400 font-black uppercase text-[9px] tracking-[0.2em] leading-none">Condition</span>
                  <span className="font-heading font-black text-2xl text-emerald-600 leading-none tracking-tighter uppercase">Inclusive</span>
                </div>
                <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black uppercase text-[9px] tracking-[0.3em] shadow-xl">{t('selection.included_btn')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Compact & Sharp */}
      <section id="location" className="pt-20 pb-0 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] border-2 border-slate-800 transition-all duration-500 hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.4)] group">
            <div className="p-10 md:p-14 z-20 flex flex-col justify-center space-y-10">
              <div>
                <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-5 block border-l-4 border-lisbon-yellow pl-4">Our Prime Location</span>
                <h3 className="font-heading text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                  Avenida Almirante Reis<br />
                  Nº15 3E, 1150-008 Lisboa
                </h3>
              </div>
              <div className="pt-8 border-t border-white/5">
                <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-4 block border-l-4 border-lisbon-yellow pl-4">Official Contacts</span>
                <div className="flex flex-col gap-1">
                  <p className="font-heading text-xl font-black text-white leading-none tracking-tight">+351 920 229 784</p>
                  <p className="font-body text-white/30 font-bold uppercase tracking-[0.2em] text-[10px]">hostel15@yahoo.com</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/3TJ6YTzB58veQLRb7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-heading font-black border-b border-lisbon-yellow/50 pb-1 hover:text-lisbon-yellow transition-all self-start mt-4 group/btn">
                <span className="tracking-[0.2em] uppercase text-[10px]">Open Google Maps</span> <LucideChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="relative overflow-hidden group/img min-h-[350px] md:min-h-0 bg-slate-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[4000ms]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid inspired by Bounce.com */}
      <section className="pt-12 pb-24 bg-white overflow-hidden border-t-2 border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-8 block border-l-4 border-lisbon-yellow pl-4">Hostel 15 Standard</span>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-lisbon-blue leading-[0.9] tracking-tighter mb-10">
                {i18n.language === 'en' ? 'The Gold Standard of Lisbon Hosting' : 'O Padrão de Ouro de Lisboa'}
              </h2>
              <p className="text-slate-800 text-xl font-bold mb-12 max-w-lg leading-relaxed opacity-100">
                {i18n.language === 'en'
                  ? "We combine high-tech security with the absolute heartbeat of the city center."
                  : "Combinamos segurança de alta tecnologia com o coração absoluto do centro da cidade."}
              </p>
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl">4.9</div>
                <div>
                  <p className="text-slate-900 font-bold leading-tight mb-1">Excellent Rating</p>
                  <p className="text-slate-500 text-sm font-medium">Based on 1.2k traveler reviews</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: { en: "Elite Rossio Hub", pt: "Hub Elite Rossio" }, desc: { en: "10 seconds from Metro & Trains.", pt: "A 10 segundos do Metro e Comboios." }, icon: <LucideMapPin className="text-amber-500" /> },
                { title: { en: "Smart Monitoring", pt: "Monitorização Smart" }, desc: { en: "AI-linked CCTV and digital keys.", pt: "CCTV ligado a IA e chaves digitais." }, icon: <LucideShieldCheck className="text-blue-600" /> },
                { title: { en: "Self-Check In", pt: "Self-Check In" }, desc: { en: "Self-access anytime you arrive.", pt: "Auto-acesso sempre que chegar." }, icon: <LucideClock className="text-emerald-600" /> },
                { title: { en: "Secure Storage", pt: "Cofre Seguro" }, desc: { en: "Insured and reinforced lockers.", pt: "Cofres segurados e protegidos." }, icon: <LucideShieldCheck className="text-indigo-600" /> },
                { title: { en: "Free WiFi n' Coffee", pt: "WiFi e Café Grátis" }, desc: { en: "1Gbps Fiber + Premium Hub.", pt: "Fibra 1Gbps + Hub Premium." }, icon: <LucideWifi className="text-rose-500" /> },
                { title: { en: "24/7 Local Care", pt: "Apoio Local 24/7" }, desc: { en: "WhatsApp support in 2 languages.", pt: "Apoio via WhatsApp em 2 línguas." }, icon: <LucideGlobe className="text-cyan-500" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="shrink-0 w-16 h-16 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:border-lisbon-yellow transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-slate-900 text-lg mb-2">{i18n.language === 'en' ? item.title.en : item.title.pt}</h4>
                    <p className="text-slate-800 font-bold text-sm leading-snug underline-offset-4 decoration-slate-200 underline">{i18n.language === 'en' ? item.desc.en : item.desc.pt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section - Infinite Marquee */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 skew-x-12 translate-x-1/2 -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-6 block border-l-4 border-lisbon-yellow pl-4">Traveler Voice</span>
              <h2 className="font-heading text-5xl md:text-6xl font-black text-lisbon-blue leading-tight tracking-tighter">
                {i18n.language === 'en' ? 'Verified Experiences in Hostel 15' : 'Experiências Verificadas em Lisboa'}
              </h2>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-xl border-2 border-slate-100 mb-2">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden bg-cover bg-center`} style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=${i + 10}')` }}></div>)}
              </div>
              <div className="pl-4">
                <p className="text-slate-900 font-black text-sm">Join 12,000+ Guests</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Happy Travelers Since 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden group">
          <div className="flex py-12 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex gap-8 px-4">
                {[
                  { name: "Søren Jensen", stay: "Stayed in 6-Bed Dorm", text: { en: "Best hostel in Lisbon! The curtains on the beds give so much privacy, and the location in Baixa is unbeatable. 10/10.", pt: "Melhor hostel em Lisboa! As cortinas nas camas dão tanta privacidade, e a localização na Baixa é imbatível." }, rating: 5, img: 11 },
                  { name: "Maria Garcia", stay: "Luggage Storage only", text: { en: "So easy! Dropped my bags for the day. Feels very secure with the cameras and the staff was very kind. Perfect for day-trippers.", pt: "Tão fácil! Deixei as malas para o dia. Sente-se muito seguro com as câmaras e o staff foi muito amável." }, rating: 5, img: 12 },
                  { name: "Alex Chen", stay: "Stayed in 4-Bed Dorm", text: { en: "Very clean, great social vibe but still quiet enough to sleep. The lockers under the bed are huge!", pt: "Muito limpo, ótimo ambiente social mas ainda assim calmo para dormir. Os cacifos debaixo da cama são enormes!" }, rating: 5, img: 13 },
                  { name: "Elena Rossi", stay: "Stayed in Private Room", text: { en: "Beautifully designed space. The Rossio location is central to everything. Highly recommend.", pt: "Espaço lindamente desenhado. A localização no Rossio é central para tudo." }, rating: 5, img: 14 },
                  { name: "Jack Thompson", stay: "Stayed in 4-Bed Dorm", text: { en: "The WiFi is blazing fast. Loved the free coffee and the social lounge vibe. Perfect balance.", pt: "O WiFi é super rápido. Adorei o café grátis e o ambiente do lounge social." }, rating: 5, img: 15 }
                ].map((review, i) => (
                  <div key={i} className="flex-shrink-0 w-[400px] bg-white p-10 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border-2 border-slate-100 hover:border-lisbon-yellow transition-all duration-500 whitespace-normal">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden bg-cover bg-center border-2 border-slate-200" style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=${review.img}')` }}></div>
                      <div>
                        <span className="block text-slate-900 font-black text-lg leading-tight">{review.name}</span>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{review.stay}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-6 text-lisbon-yellow">
                      {[...Array(review.rating)].map((_, i) => <LucideStar key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-800 font-bold italic leading-relaxed text-sm underline decoration-slate-100 underline-offset-4 tracking-tight">
                      "{review.text[i18n.language as 'en' | 'pt']}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Sleek & Compact */}
      <section id="faq" className="py-24 bg-white overflow-hidden relative border-t-2 border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div>
              <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-8 block border-l-4 border-lisbon-yellow pl-4">The FAQ</span>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-lisbon-blue mb-10 leading-[0.9] tracking-tighter">
                {i18n.language === 'en' ? 'Common Questions' : 'Perguntas Frequentes'}
              </h2>
              <p className="text-slate-800 text-xl font-bold mb-12 max-w-sm leading-relaxed opacity-100">
                {i18n.language === 'en'
                  ? "Everything you need to know about your stay or storage at Hostel 15."
                  : "Tudo o que precisa de saber sobre a sua estadia ou armazenamento no Hostel 15."}
              </p>

              <div className="bg-lisbon-blue p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group/hub">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lisbon-yellow/10 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover/hub:bg-lisbon-yellow/20 transition-colors"></div>
                <LucideClock size={40} className="text-lisbon-yellow mb-8" />
                <h4 className="font-heading text-3xl font-black mb-4">24/7 Digital Hub</h4>
                <p className="text-white/60 font-medium leading-relaxed">
                  {i18n.language === 'en'
                    ? "Our facility uses smart keyless access. Once you book, you'll receive your unique entry code via WhatsApp for 24/7 freedom."
                    : "As nossas instalações utilizam acesso inteligente sem chave. Após a reserva, receberá o seu código único via WhatsApp."}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-12 lg:pt-0">
              {[
                { q: { en: "What is the check-in time?", pt: "Qual é a hora do check-in?" }, a: { en: "Guaranteed by 3 PM, but you can drop your bags for free anytime after 10 AM if your bed isn't ready.", pt: "Garantido até às 15:00, mas pode deixar as suas malas gratuitamente após as 10:00." } },
                { q: { en: "Are the lockers safe for laptops?", pt: "Os cacifos são seguros para portáteis?" }, a: { en: "Absolutely. All lockers are reinforced steel and monitored 24/7 via local and cloud-linked CCTV.", pt: "Absolutamente. Todos os cacifos são de aço reforçado e monitorizados 24/7." } },
                { q: { en: "Can I cancel my booking?", pt: "Posso cancelar a minha reserva?" }, a: { en: "Yes! Free cancellation up to 24 hours before your arrival date. No questions asked.", pt: "Sim! Cancelamento gratuito até 24 horas antes da data de chegada." } },
                { q: { en: "Is there a kitchen available?", pt: "Existe uma cozinha disponível?" }, a: { en: "We have a fully equipped social kitchen where guests can cook and share meals. Open 24/7.", pt: "Temos uma cozinha social totalmente equipada onde os hóspedes podem cozinhar." } },
                { q: { en: "How close is the Metro?", pt: "A que distância fica o Metro?" }, a: { en: "We are exactly 10 seconds walk from the Anjos Metro station (Green Line) and bus stops.", pt: "Estamos a exatamente 10 segundos a pé da estação de Metro dos Anjos." } }
              ].map((faq, i) => (
                <div key={i} className={`border-b border-slate-100 transition-all duration-300 ${activeFaq === i ? 'pb-8 pt-4' : 'py-4'}`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className={`font-heading text-lg md:text-xl font-black transition-colors ${activeFaq === i ? 'text-lisbon-yellow' : 'text-slate-900 group-hover:text-lisbon-yellow'}`}>
                      {i18n.language === 'en' ? faq.q.en : faq.q.pt}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-lisbon-yellow text-slate-900 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                      {activeFaq === i ? <LucideMinus size={18} /> : <LucidePlus size={18} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-52 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-600 font-medium leading-relaxed pr-10 border-l-4 border-lisbon-yellow/20 pl-6 py-2">
                      {i18n.language === 'en' ? faq.a.en : faq.a.pt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Premium Project Branding */}
      <section className="py-24 bg-white overflow-hidden relative border-t-2 border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lisbon-blue rounded-[3.5rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 md:gap-20 shadow-[0_40px_100px_rgba(30,58,138,0.2)] relative overflow-hidden group/newsletter">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="w-full lg:w-2/5 relative z-10">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                <img src="lisbon_newsletter_plane.png" alt="Travel Tips" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-lisbon-blue/20 to-transparent"></div>
              </div>
            </div>

            <div className="flex-1 space-y-8 z-10">
              <div>
                <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-6 block border-l-4 border-lisbon-yellow pl-4">Stay Inspired</span>
                <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                  {i18n.language === 'en' ? 'Love discounts and traveling?' : 'Gosta de descontos e viagens?'}
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-bold leading-relaxed max-w-lg">
                  {i18n.language === 'en'
                    ? 'Get insider Lisbon guides and exclusive member-only deals delivered to your inbox.'
                    : 'Receba guias exclusivos de Lisboa e ofertas apenas para membros na sua caixa de entrada.'}
                </p>
              </div>

              <div className="max-w-xl flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl flex flex-col sm:flex-row gap-3 border border-white/20 focus-within:border-lisbon-yellow focus-within:bg-white/20 transition-all duration-500">
                  <input
                    type="email"
                    placeholder={i18n.language === 'en' ? 'Enter your email' : 'Introduza o seu email'}
                    className="flex-1 px-8 py-5 rounded-2xl bg-transparent outline-none font-bold text-white placeholder:text-white/40"
                  />
                  <button className="bg-lisbon-yellow text-lisbon-blue px-12 py-5 rounded-2xl font-black hover:bg-white transition-all active:scale-95 whitespace-nowrap shadow-xl shadow-lisbon-yellow/10">
                    {i18n.language === 'en' ? 'Enroll' : 'Inscrever'}
                  </button>
                </div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest pl-4">
                  {i18n.language === 'en' ? 'No spam. Just value. Unsubscribe anytime.' : 'Sem spam. Apenas valor. Cancele quando quiser.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
