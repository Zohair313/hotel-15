import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LucideBedSingle, LucideBaggageClaim, LucideShieldCheck, LucideClock, LucideWifi, LucideCoffee, LucideLock, LucideMonitor, LucideCheckCircle2, LucideMapPin, LucideChevronRight, LucideAward, LucideMessageSquare, LucideHelpCircle, LucideListChecks, LucideStar, LucidePlus, LucideMinus } from 'lucide-react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

const HostelAndLuggage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'hostel' | 'luggage'>('hostel');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (location.state && (location.state as any).tab) {
      setActiveTab((location.state as any).tab);
    }
  }, [location.state]);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      gsap.from('.success-icon', { scale: 0, rotate: -45, duration: 0.8, ease: 'back.out(2)' });
    }, 1500);
  };

  useEffect(() => {
    gsap.fromTo('.tab-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
  }, [activeTab]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-lisbon-blue mb-4 uppercase tracking-tighter italic">
            {t('services.title')}
          </h1>
          <p className="text-slate-500 font-bold text-lg sm:text-xl max-w-2xl mx-auto border-l-4 border-slate-100 pl-6">
            {i18n.language === 'en'
              ? 'Everything you need for a comfortable stay and secure storage in the heart of Lisbon.'
              : 'Tudo o que precisa para uma estadia confortável e armazenamento seguro no coração de Lisboa.'}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main Info */}
          <div className="md:col-span-7 space-y-12 tab-content">
            {activeTab === 'hostel' ? (
              <div key="hostel">
                <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="font-heading text-3xl font-black mb-6 uppercase italic tracking-tight">
                        {i18n.language === 'en' ? 'Stay in Baixa' : 'Ficar na Baixa'}
                      </h2>
                      <p className="text-slate-800 font-bold text-lg leading-relaxed mb-8 opacity-70 underline decoration-slate-100 underline-offset-8">
                        {i18n.language === 'en'
                          ? "Our hostel offers high-quality bunk beds with personal curtains, reading lights, and power outlets. Located in the historic Baixa district, you're seconds away from Rossio Square."
                          : "O nosso hostel oferece beliches de alta qualidade com cortinas pessoais, luzes de leitura e tomadas. Localizado na Baixa histórica, está a segundos da Praça do Rossio."}
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: <LucideWifi />, label: { en: "Ultra-fast WiFi", pt: "WiFi Ultra-rápido" } },
                          { icon: <LucideCoffee />, label: { en: "Free Coffee/Tea", pt: "Café/Chá Grátis" } },
                          { icon: <LucideLock />, label: { en: "Under-bed Locker", pt: "Cacifo sob a cama" } },
                          { icon: <LucideMonitor />, label: { en: "Social Lounge", pt: "Lounge Social" } }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-900 font-black uppercase text-[10px] tracking-widest">
                            <div className="w-10 h-10 bg-lisbon-yellow text-lisbon-blue rounded-xl flex items-center justify-center shadow-lg shadow-lisbon-yellow/10">
                              {item.icon}
                            </div>
                            {i18n.language === 'en' ? item.label.en : item.label.pt}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-64 md:h-full rounded-2xl overflow-hidden shadow-lg">
                      <img src="/dorm.png" alt="Hostel Dorm" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </section>

                <section className="mt-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-lisbon-yellow">
                  <h3 className="font-heading text-2xl font-black mb-6 italic uppercase tracking-tighter">
                    {i18n.language === 'en' ? 'Pricing & Availability' : 'Preços e Disponibilidade'}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: { en: "6-Bed Mixed Dorm", pt: "Dormitório Misto 6 Camas" }, sub: { en: "Shared bathroom", pt: "Casa de banho partilhada" }, price: "€15" },
                      { name: { en: "4-Bed Female Dorm", pt: "Dormitório Feminino 4 Camas" }, sub: { en: "Shared bathroom", pt: "Casa de banho partilhada" }, price: "€18" }
                    ].map((plan, i) => (
                      <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 hover:border-lisbon-yellow transition-colors group">
                        <div>
                          <span className="font-black text-slate-900 uppercase tracking-tight text-lg block leading-none">{i18n.language === 'en' ? plan.name.en : plan.name.pt}</span>
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{i18n.language === 'en' ? plan.sub.en : plan.sub.pt}</span>
                        </div>
                        <span className="font-heading font-black text-2xl text-lisbon-blue">{plan.price} <span className="text-xs text-slate-400">/ night</span></span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div key="luggage" className="animate-in fade-in slide-in-from-left duration-500">
                <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="font-heading text-3xl font-black mb-6 uppercase italic tracking-tight">
                        {i18n.language === 'en' ? 'Secure Luggage Storage' : 'Armazenamento Seguro'}
                      </h2>
                      <p className="text-slate-800 font-bold text-lg leading-relaxed mb-8 opacity-70 underline decoration-slate-100 underline-offset-8">
                        {i18n.language === 'en'
                          ? "Don't let your heavy bags stop you from exploring Lisbon's hills. Drop them in our 24/7 monitored secure lockers."
                          : "Não deixe que as malas pesadas o impeçam de explorar Lisboa. Deixe-as nos nossos cacifos seguros monitorizados 24/7."}
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { icon: <LucideShieldCheck />, label: { en: "24/7 CCTV", pt: "CCTV 24/7" } },
                          { icon: <LucideClock />, label: { en: "No time limit", pt: "Sem limite" } },
                          { icon: <LucideCheckCircle2 />, label: { en: "Insured Storage", pt: "Armazenamento Seguro" } },
                          { icon: <LucideMapPinIcon size={20} />, label: { en: "Central Location", pt: "Localização Central" } }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-900 font-black uppercase text-[10px] tracking-widest">
                            <div className="w-10 h-10 bg-lisbon-tile text-white rounded-xl flex items-center justify-center shadow-lg shadow-lisbon-tile/10">
                              {item.icon}
                            </div>
                            {i18n.language === 'en' ? item.label.en : item.label.pt}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-64 md:h-full rounded-2xl overflow-hidden shadow-lg">
                      <img src="/storage.png" alt="Security Lockers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </section>

                <section className="mt-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-lisbon-tile">
                  <h3 className="font-heading text-2xl font-black mb-6 italic uppercase tracking-tighter">
                    {i18n.language === 'en' ? 'Locker Sizes' : 'Tamanhos de Cacifos'}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: { en: "Medium Locker", pt: "Cacifo Médio" }, sub: { en: "Fits 1 cabin bag", pt: "Cabe 1 mala de mão" }, price: "€1", unit: "hour" },
                      { name: { en: "Extra Large Locker", pt: "Cacifo Extra Grande" }, sub: { en: "Fits 2 large suitcases", pt: "Cabem 2 malas grandes" }, price: "€2.5", unit: "hour" }
                    ].map((plan, i) => (
                      <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 hover:border-lisbon-tile transition-colors group">
                        <div>
                          <span className="font-black text-slate-900 uppercase tracking-tight text-lg block leading-none">{i18n.language === 'en' ? plan.name.en : plan.name.pt}</span>
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{i18n.language === 'en' ? plan.sub.en : plan.sub.pt}</span>
                        </div>
                        <span className="font-heading font-black text-2xl text-lisbon-tile">{plan.price} <span className="text-xs text-slate-400">/ {i18n.language === 'en' ? plan.unit : 'hora'}</span></span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="md:col-span-5 sticky top-24">
            <div className="bg-lisbon-blue p-6 sm:p-10 rounded-[2.5rem] text-white shadow-2xl">
              {isSuccess ? (
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-white/10 text-lisbon-yellow rounded-full flex items-center justify-center mx-auto mb-6 success-icon">
                    <LucideCheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-3xl font-black mb-4 italic uppercase">
                    {i18n.language === 'en' ? 'Request Sent!' : 'Pedido Enviado!'}
                  </h3>
                  <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest mb-8 leading-relaxed">
                    {i18n.language === 'en'
                      ? `We'll reach out on WhatsApp (+351 920 229 784) shortly to confirm your ${activeTab === 'hostel' ? 'bed' : 'locker'}.`
                      : `Entraremos em contacto via WhatsApp (+351 920 229 784) em breve para confirmar a sua ${activeTab === 'hostel' ? 'cama' : 'cacifo'}.`}
                  </p>
                  <button onClick={() => setIsSuccess(false)} className="w-full py-5 bg-white text-lisbon-blue rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] hover:bg-lisbon-yellow transition-all active:scale-95 shadow-xl">
                    {i18n.language === 'en' ? 'New Request' : 'Novo Pedido'}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-4xl font-black mb-4 italic uppercase tracking-tighter">
                    {i18n.language === 'en' ? 'Book Now' : 'Reservar Já'}
                  </h3>
                  
                  {/* Service Toggle Inside Sidebar */}
                  <div className="flex gap-2 mb-8 bg-white/5 p-1.5 rounded-[1.5rem] border border-white/10">
                    <button
                      onClick={() => setActiveTab('hostel')}
                      className={`flex-1 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'hostel' ? 'bg-lisbon-yellow text-lisbon-blue shadow-lg' : 'text-white/40 hover:text-white'}`}
                    >
                      {t('services.tab_hostel')}
                    </button>
                    <button
                      onClick={() => setActiveTab('luggage')}
                      className={`flex-1 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'luggage' ? 'bg-white text-lisbon-blue shadow-lg' : 'text-white/40 hover:text-white'}`}
                    >
                      {t('services.tab_luggage')}
                    </button>
                  </div>

                  <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.2em] mb-12">
                    {i18n.language === 'en' ? 'Reserve your space in advance.' : 'Reserve o seu espaço com antecedência.'}
                  </p>

                  <form onSubmit={handleRequest} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 pl-4">{i18n.language === 'en' ? 'Full Name' : 'Nome Completo'}</label>
                      <input
                        required
                        type="text"
                        placeholder={i18n.language === 'en' ? 'Enter your name' : 'Introduza o seu nome'}
                        className="w-full p-5 bg-white/5 border-white/10 border-2 focus:border-lisbon-yellow rounded-[1.5rem] outline-none transition-all font-black uppercase text-xs tracking-widest text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 pl-4">{i18n.language === 'en' ? 'WhatsApp Number' : 'Número de WhatsApp'}</label>
                      <input
                        required
                        type="tel"
                        placeholder="+351 000 000 000"
                        className="w-full p-5 bg-white/5 border-white/10 border-2 focus:border-lisbon-yellow rounded-[1.5rem] outline-none transition-all font-black text-xs tracking-widest text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 pl-4">{i18n.language === 'en' ? 'Select Plan' : 'Selecionar Plano'}</label>
                      <select className="w-full p-5 bg-white/5 border-white/10 border-2 focus:border-lisbon-yellow rounded-[1.5rem] outline-none transition-all font-black uppercase text-xs tracking-widest text-white appearance-none">
                        {activeTab === 'hostel' ? (
                          <>
                            <option className="bg-lisbon-blue">{i18n.language === 'en' ? '6-Bed Mixed Dorm' : 'Dormitório Misto 6 Camas'}</option>
                            <option className="bg-lisbon-blue">{i18n.language === 'en' ? '4-Bed Female Dorm' : 'Dormitório Feminino 4 Camas'}</option>
                          </>
                        ) : (
                          <>
                            <option className="bg-lisbon-blue">{i18n.language === 'en' ? 'Medium Locker' : 'Cacifo Médio'}</option>
                            <option className="bg-lisbon-blue">{i18n.language === 'en' ? 'Extra Large Locker' : 'Cacifo Extra Grande'}</option>
                          </>
                        )}
                      </select>
                    </div>

                    <button
                      disabled={isLoading}
                      className="w-full bg-lisbon-yellow text-lisbon-blue py-6 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all active:scale-95 disabled:opacity-50 mt-8 shadow-2xl shadow-lisbon-yellow/10"
                    >
                      {isLoading
                        ? (i18n.language === 'en' ? 'Confirming...' : 'Confirmando...')
                        : (i18n.language === 'en' ? 'Proceed to Chat' : 'Seguir para Chat')}
                    </button>
                  </form>
                </>
              )}

              {!isSuccess && <p className="text-center text-white/40 text-[10px] font-black uppercase tracking-widest mt-8 italic px-12 leading-relaxed">
                {i18n.language === 'en'
                  ? 'No upfront payment required. Confirm on arrival via WhatsApp.'
                  : 'Sem pagamento antecipado. Confirme à chegada via WhatsApp.'}
              </p>}
            </div>
          </div>
        </div>

        {/* Guest Reviews Section - Transplanted from Home.tsx */}
        <section className="py-24 bg-slate-50 relative overflow-hidden -mx-6 mt-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 skew-x-12 translate-x-1/2 -z-0"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-xl">
                <span className="text-lisbon-yellow font-black tracking-[0.4em] text-[10px] uppercase mb-6 block border-l-4 border-lisbon-yellow pl-4">
                  {i18n.language === 'en' ? 'Traveler Voice' : 'Voz do Viajante'}
                </span>
                <h2 className="font-heading text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
                  {i18n.language === 'en' ? 'Verified Experiences' : 'Experiências Verificadas'}
                </h2>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-xl border-2 border-slate-100 mb-2">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden bg-cover bg-center`} style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=${i + 15}')` }}></div>)}
                </div>
                <div className="pl-4">
                  <p className="text-slate-900 font-black text-sm">{i18n.language === 'en' ? 'Join 12,000+ Guests' : 'Junte-se a 12.000+ Hóspedes'}</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{i18n.language === 'en' ? 'Happy Travelers Since 2023' : 'Viajantes Felizes desde 2023'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex overflow-hidden group">
            <div className="flex py-12 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-8 px-4">
                  {[
                    { name: "Søren Jensen", stay: { en: "Stayed in 6-Bed Dorm", pt: "Ficou no Dormitório 6" }, text: { en: "Best hostel in Lisbon! The curtains on the beds give so much privacy, and the location in Baixa is unbeatable. 10/10.", pt: "Melhor hostel em Lisboa! As cortinas nas camas dão tanta privacidade e a localização é imbatível." }, rating: 5, img: 11 },
                    { name: "Maria Garcia", stay: { en: "Luggage Storage only", pt: "Apenas Armazenamento" }, text: { en: "So easy! Dropped my bags for the day. Feels very secure with the cameras and the staff was very kind. Perfect for day-trippers.", pt: "Tão fácil! Deixei as malas pelo dia. Sente-se muito seguro com as câmaras e o staff foi amável." }, rating: 5, img: 12 },
                    { name: "Alex Chen", stay: { en: "Stayed in 4-Bed Dorm", pt: "Ficou no Dormitório 4" }, text: { en: "Very clean, great social vibe but still quiet enough to sleep. The lockers under the bed are huge!", pt: "Muito limpo, ótimo ambiente social mas calmo para dormir. Os cacifos são enormes!" }, rating: 5, img: 13 },
                    { name: "Elena Rossi", stay: { en: "Stayed in Private Room", pt: "Quarto Privado" }, text: { en: "Beautifully designed space. The Rossio location is central to everything. Highly recommend.", pt: "Espaço lindamente desenhado. A localização no Rossio é central para tudo. Recomendo imenso." }, rating: 5, img: 14 },
                    { name: "Jack Thompson", stay: { en: "Stayed in 4-Bed Dorm", pt: "Ficou no Dormitório 4" }, text: { en: "The WiFi is blazing fast. Loved the free coffee and the social lounge vibe. Perfect balance.", pt: "O WiFi é super rápido. Adorei o café grátis e o lounge social. Balanço perfeito." }, rating: 5, img: 15 }
                  ].map((review, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px] sm:w-[400px] bg-white p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border-2 border-slate-100 hover:border-lisbon-yellow transition-all duration-500 whitespace-normal">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 overflow-hidden bg-cover bg-center border-2 border-slate-200" style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=${review.img}')` }}></div>
                        <div>
                          <span className="block text-slate-900 font-black text-base sm:text-lg leading-tight">{review.name}</span>
                          <span className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest">
                            {i18n.language === 'en' ? review.stay.en : review.stay.pt}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-6 text-lisbon-yellow">
                        {[...Array(review.rating)].map((_, i) => <LucideStar key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-slate-800 font-bold italic leading-relaxed text-xs sm:text-sm underline decoration-slate-100 underline-offset-4 tracking-tight">
                        "{i18n.language === 'en' ? review.text.en : review.text.pt}"
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Sleek & Compact - EXACT COPY FROM HOME.TSX */}
        <section id="faq" className="py-24 bg-white overflow-hidden relative border-t-2 border-slate-50 -mx-6 mb-20">
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

      </div>
    </div>
  );
};

const LucideMapPinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export default HostelAndLuggage;
