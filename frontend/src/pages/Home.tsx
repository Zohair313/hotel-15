import React from 'react';
import { motion } from 'framer-motion';
import { LucideShieldCheck, LucideClock, LucideMapPin, LucideChevronRight, LucideMonitor, LucideCheckCircle2, LucideAward, LucideLock, LucideGlobe, LucideWifi, LucideCoffee, LucideStar, LucideHelpCircle, LucideX, LucidePlus, LucideMinus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollExperience from '../components/ScrollExperience';
import MaskedText from '../components/abstract/MaskedText';
import GlassCard from '../components/abstract/GlassCard';

// --- Main Home Component ---

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  const { t, i18n } = useTranslation();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-slate-950 relative">
      {/* ===== IMMERSIVE SCROLL EXPERIENCE (Hero + Rooms) ===== */}
      <div className="relative">
        <ScrollExperience onBookClick={onBookClick} />

        {/* Cinematic Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-30" />
      </div>

      {/* ===== REST OF HOMEPAGE CONTENT ===== */}
      <div className="bg-slate-950 relative z-40">

        {/* Trusted By / Authorities Section Animated */}
        <section className="py-12 bg-transparent overflow-hidden relative">
          <div className="max-w-[100vw]">
            <MaskedText as="p" className="text-center text-lisbon-yellow font-heading font-black tracking-[0.4em] text-[11px] uppercase mb-8 opacity-60">Official Booking Partners & Local Authority</MaskedText>

            <div className="flex items-center opacity-100 transition-all duration-700 overflow-hidden py-4">
              <div className="animate-marquee">
                {/* Set 1 & 2 for continuous loop */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 md:gap-48 px-8 md:px-24 flex-shrink-0">
                    <span className="text-xl md:text-5xl font-heading font-black uppercase tracking-tighter text-blue-600/50 whitespace-nowrap">Booking.com</span>
                    <span className="text-xl md:text-5xl font-heading font-black uppercase tracking-tighter text-rose-500/50 italic whitespace-nowrap">Airbnb</span>
                    <span className="text-xl md:text-5xl font-heading font-black uppercase tracking-tighter text-slate-400/50 whitespace-nowrap">Expedia</span>
                    <div className="flex items-center gap-4 whitespace-nowrap opacity-50">
                      <LucideAward className="w-10 h-10 md:w-16 md:h-16 text-emerald-500" />
                      <span className="text-lg md:text-3xl font-heading font-black uppercase tracking-tighter text-white">Turismo De Portugal</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rooms & Selection Section - GRID LAYOUT */}
        <section id="featured-rooms" className="py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <MaskedText as="span" className="text-lisbon-yellow font-heading font-black tracking-[0.5em] text-[11px] uppercase mb-4 block opacity-60">{t('selection.header_sub')}</MaskedText>
              <MaskedText as="h2" className="font-serif italic text-4xl md:text-6xl text-white leading-tight mb-4 tracking-tight">{t('selection.header_main')}</MaskedText>
              <p className="text-slate-500 font-body text-[13px] max-w-lg mx-auto font-medium tracking-[0.2em] uppercase opacity-50">{t('selection.header_desc')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Shared Dorms */}
              <GlassCard className="flex flex-col items-stretch group h-full">
                <div className="relative h-56 overflow-hidden rounded-xl mb-4">
                  <img src={`${import.meta.env.BASE_URL}hostel_dorm.png`} alt="Shared Dorm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>
                <MaskedText as="h3" className="font-serif italic text-2xl text-white mb-2 tracking-tight">Shared Dorm</MaskedText>
                <p className="text-slate-500 font-medium text-[12px] mb-8 leading-relaxed uppercase tracking-[0.2em] opacity-60">Privacy-first bunks with curated Rossio aesthetics.</p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] mb-1">From</span>
                    <span className="text-2xl font-heading font-black text-lisbon-yellow">€15<span className="text-[11px] ml-1 text-slate-700 font-bold tracking-widest uppercase">nt</span></span>
                  </div>
                  <button onClick={onBookClick} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-300">{t('selection.select_btn')}</button>
                </div>
              </GlassCard>

              {/* 2. Private Rooms */}
              <GlassCard className="flex flex-col items-stretch group h-full" delay={0.1}>
                <div className="relative h-56 overflow-hidden rounded-xl mb-4">
                  <img src={`${import.meta.env.BASE_URL}high_res_royal_suite.png`} alt="Royalty Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60"></div>
                </div>
                <MaskedText as="h3" className="font-serif italic text-2xl text-white mb-2 tracking-tight">Royalty Suite</MaskedText>
                <p className="text-slate-500 font-medium text-[12px] mb-8 leading-relaxed uppercase tracking-[0.2em] opacity-60">Experience unparalleled luxury in the heart of Rossio.</p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <span className="text-slate-700 font-black uppercase text-[10px] tracking-[0.3em] leading-none">From</span>
                    <span className="font-heading font-black text-2xl text-lisbon-yellow">€45<span className="text-[11px] ml-1 text-slate-700 font-bold tracking-widest uppercase">nt</span></span>
                  </div>
                  <button onClick={onBookClick} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-300">{t('selection.select_btn')}</button>
                </div>
              </GlassCard>

              {/* 3. Storage */}
              <GlassCard className="flex flex-col items-stretch group h-full" delay={0.2}>
                <div className="relative h-56 overflow-hidden rounded-xl mb-4">
                  <img src={`${import.meta.env.BASE_URL}storage.png`} alt="Luggage Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60"></div>
                </div>
                <MaskedText as="h3" className="font-serif italic text-2xl text-white mb-2 tracking-tight">{t('selection.storage_title')}</MaskedText>
                <p className="text-slate-500 font-medium text-[12px] mb-8 leading-relaxed uppercase tracking-[0.2em] opacity-60">{t('selection.storage_desc')}</p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <span className="text-slate-700 font-black uppercase text-[10px] tracking-[0.3em] leading-none">From</span>
                    <span className="font-heading font-black text-2xl text-lisbon-yellow">€1<span className="text-[11px] ml-1 text-slate-700 font-bold tracking-widest uppercase">hr</span></span>
                  </div>
                  <button onClick={onBookClick} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-300">{t('selection.select_btn')}</button>
                </div>
              </GlassCard>

              {/* 4. Social Lounge */}
              <GlassCard className="flex flex-col items-stretch group h-full" delay={0.3}>
                <div className="relative h-56 overflow-hidden rounded-xl mb-4">
                  <img src={`${import.meta.env.BASE_URL}lounge.png`} alt="Social Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60"></div>
                </div>
                <MaskedText as="h3" className="font-serif italic text-2xl text-white mb-2 tracking-tight">{t('selection.lounge_title')}</MaskedText>
                <p className="text-slate-500 font-medium text-[12px] mb-8 leading-relaxed uppercase tracking-[0.2em] opacity-60">{t('selection.lounge_desc')}</p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <span className="text-slate-700 font-black uppercase text-[10px] tracking-[0.3em] leading-none">Status</span>
                    <span className="font-heading font-black text-xl text-emerald-500/80 leading-none tracking-tight uppercase">Inclusive</span>
                  </div>
                  <button onClick={onBookClick} className="w-full py-4 bg-lisbon-yellow text-lisbon-blue rounded-xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-300">{t('selection.select_btn')}</button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* The Process Section */}
        <section className="py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-8">
              <MaskedText as="span" className="text-lisbon-yellow font-heading font-black tracking-[0.5em] text-[11px] uppercase mb-4 block opacity-50">The Process</MaskedText>
              <MaskedText as="h2" className="font-serif italic text-3xl md:text-5xl text-white/90 leading-tight mb-8 tracking-tight uppercase">{i18n.language === 'en' ? 'Three Simple Steps' : 'Três Passos Simples'}</MaskedText>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: { en: "Book Instantly", pt: "Reserve Agora" },
                  desc: { en: "Select your room or locker size online in seconds.", pt: "Escolha o seu quarto ou armário online em segundos." },
                  icon: <LucideShieldCheck className="text-lisbon-yellow" size={32} />
                },
                {
                  step: "02",
                  title: { en: "Drop & Secure", pt: "Deixe e Segure" },
                  desc: { en: "Arrive at Rossio and drop your items with digital access.", pt: "Chegue ao Rossio e deixe os seus itens com acesso digital." },
                  icon: <LucideClock className="text-white/40" size={32} />
                },
                {
                  step: "03",
                  title: { en: "Live Lisbon", pt: "Viva Lisboa" },
                  desc: { en: "Hands-free exploration from the heart of the city.", pt: "Explore a cidade de mãos livres a partir do centro." },
                  icon: <LucideMapPin className="text-emerald-500" size={32} />
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group text-center">
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <span className="text-[12px] font-black text-lisbon-yellow block mb-2 tracking-[0.3em] font-heading">{item.step}</span>
                  <h4 className="font-serif italic text-2xl text-white mb-3 tracking-wide">{i18n.language === 'en' ? item.title.en : item.title.pt}</h4>
                  <p className="text-slate-500 font-medium text-[12px] leading-relaxed uppercase tracking-widest max-w-[200px] mx-auto opacity-70">
                    {i18n.language === 'en' ? item.desc.en : item.desc.pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section - Compact & Sharp */}
        <section id="location" className="py-12 bg-transparent relative z-10">
          <motion.div
            className="max-w-6xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="bg-lisbon-blue/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl border border-white/5 group">
              <div className="p-10 md:p-14 z-20 flex flex-col justify-center space-y-6">
                <div>
                  <MaskedText as="span" className="text-lisbon-yellow font-heading font-black tracking-[0.5em] text-[11px] uppercase mb-4 block border-l-2 border-lisbon-yellow pl-4 leading-none opacity-60">Global Location</MaskedText>
                  <MaskedText as="h3" className="font-serif italic text-3xl md:text-5xl text-white/90 leading-snug tracking-tight">
                    Avenida Almirante Reis<br />
                    Nº15 3E, 1150-008 Lisboa
                  </MaskedText>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <span className="text-lisbon-yellow font-heading font-black tracking-[0.5em] text-[10px] uppercase mb-4 block border-l-2 border-lisbon-yellow pl-4 leading-none opacity-60">Direct Line</span>
                  <div className="flex flex-col gap-1">
                    <p className="font-heading text-2xl md:text-3xl font-black text-white/80 leading-none tracking-tight">+351 920 229 784</p>
                    <p className="text-white/40 font-medium text-[11px] tracking-widest uppercase mt-2">National Mobile Network</p>
                    <p className="font-heading text-white/40 font-black uppercase tracking-[0.4em] text-[11px] mt-1">hostel15@yahoo.com</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/3TJ6YTzB58veQLRb7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-white/70 font-heading font-black pb-2 hover:text-lisbon-yellow transition-all self-start mt-2 group/btn relative">
                  <span className="tracking-[0.5em] uppercase text-[11px]">Coordinates</span>
                  <LucideChevronRight size={16} className="group-hover/btn:translate-x-3 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-lisbon-yellow transition-all duration-500 group-hover/btn:w-full" />
                </a>
              </div>
              <div className="relative overflow-hidden group/img min-h-[350px] md:min-h-0 bg-slate-900">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[5s] opacity-60" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}lisbon_cityscape.png)` }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Guest Reviews Section - Infinite Marquee with Abstract Reveal */}
        <section className="py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 mb-8">
            <div className="flex flex-col items-center">
              <MaskedText as="span" className="text-lisbon-yellow font-black tracking-[0.5em] text-[11px] uppercase mb-4 block opacity-60 text-center">Traveler Voice</MaskedText>
              <MaskedText as="h2" className="font-serif italic text-4xl md:text-6xl text-white/90 text-center tracking-tight mb-4">
                {i18n.language === 'en' ? 'Verified Experiences' : 'Experiências Verificadas'}
              </MaskedText>
            </div>
          </div>

          <div className="relative flex overflow-hidden group">
            <div className="flex py-4 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-6 px-4">
                  {[
                    { name: "Søren Jensen", stay: "Stayed in 6-Bed Dorm", text: { en: "Best hostel in Lisbon! The curtains on the beds give so much privacy, and the location in Baixa is unbeatable.", pt: "Melhor hostel em Lisboa! As cortinas nas camas dão tanta privacidade." }, rating: 5, img: 11 },
                    { name: "Maria Garcia", stay: "Luggage Storage only", text: { en: "So easy! Dropped my bags for the day. Feels very secure with the cameras and the staff was kind.", pt: "Tão fácil! Deixei as malas para o dia. Sente-se muito seguro." }, rating: 5, img: 12 },
                    { name: "Alex Chen", stay: "Stayed in 4-Bed Dorm", text: { en: "Very clean, great social vibe but still quiet enough to sleep. The lockers under the bed are huge!", pt: "Muito limpo, ótimo ambiente social mas ainda assim calmo para dormir." }, rating: 5, img: 13 }
                  ].map((review, i) => (
                    <div key={i} className="flex-shrink-0 w-[350px] bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-lisbon-yellow/20 transition-all duration-500 whitespace-normal">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden bg-cover bg-center border border-white/10" style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=${review.img}')` }}></div>
                        <div>
                          <span className="block text-white/70 font-black text-sm leading-tight">{review.name}</span>
                          <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{review.stay}</span>
                        </div>
                      </div>
                      <p className="text-slate-500 font-medium italic leading-relaxed text-[13px] tracking-wide uppercase opacity-70">
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
        <section id="faq" className="py-12 bg-transparent overflow-hidden relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="reveal-up">
                <MaskedText as="span" className="text-lisbon-yellow font-black tracking-[0.5em] text-[11px] uppercase mb-4 block opacity-60">The FAQ</MaskedText>
                <MaskedText as="h2" className="font-serif italic text-4xl md:text-6xl text-white/90 mb-6 tracking-tight uppercase">
                  {i18n.language === 'en' ? 'Common Questions' : 'Perguntas Frequentes'}
                </MaskedText>
                
                <GlassCard className="mt-4 p-8">
                  <LucideClock size={32} className="text-lisbon-yellow/40 mb-4" />
                  <h4 className="font-serif italic text-2xl font-black mb-2 text-white/80 tracking-wide">24/7 Digital Hub</h4>
                  <p className="text-slate-600 font-medium text-[13px] leading-relaxed uppercase tracking-[0.2em] opacity-70">
                    {i18n.language === 'en'
                      ? "Our facility uses smart keyless access. Once you book, you'll receive your unique entry code via WhatsApp for 24/7 freedom."
                      : "As nossas instalações utilizam acesso inteligente sem chave. Após a reserva, receberá o seu código único via WhatsApp."}
                  </p>
                </GlassCard>
              </div>

              <div className="space-y-3 pt-8 lg:pt-4">
                {[
                  { q: { en: "What is the check-in time?", pt: "Qual é a hora do check-in?" }, a: { en: "Guaranteed by 3 PM, but you can drop your bags for free anytime after 10 AM if your bed isn't ready.", pt: "Garantido até às 15:00, mas pode deixar as suas malas gratuitamente após as 10:00." } },
                  { q: { en: "Are the lockers safe for laptops?", pt: "Os cacifos são seguros para portáteis?" }, a: { en: "Absolutely. All lockers are reinforced steel and monitored 24/7 via local and cloud-linked CCTV.", pt: "Absolutamente. Todos os cacifos são de aço reforçado e monitorizados 24/7." } },
                  { q: { en: "Can I cancel my booking?", pt: "Posso cancelar a minha reserva?" }, a: { en: "Yes! Free cancellation up to 24 hours before your arrival date. No questions asked.", pt: "Sim! Cancelamento gratuito até 24 horas antes da data de chegada." } }
                ].map((faq, i) => (
                  <div key={i} className={`border-b border-white/5 transition-all duration-300 ${activeFaq === i ? 'pb-6 pt-3' : 'py-3'}`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-2 text-left group"
                    >
                      <span className={`font-serif text-xl md:text-2xl italic transition-colors ${activeFaq === i ? 'text-lisbon-yellow' : 'text-white/50 group-hover:text-white'}`}>
                        {i18n.language === 'en' ? faq.q.en : faq.q.pt}
                      </span>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-lisbon-yellow text-slate-900 rotate-180' : 'bg-white/5 text-slate-700'}`}>
                        {activeFaq === i ? <LucideMinus size={14} /> : <LucidePlus size={14} />}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-600 font-medium text-[12px] leading-relaxed pr-10 border-l-2 border-lisbon-yellow/10 pl-5 py-2 uppercase tracking-widest opacity-70">
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
}
