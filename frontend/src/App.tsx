import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HostelAndLuggage from './pages/HostelAndLuggage';
import { Header, BookingModal } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/abstract/NoiseOverlay';
import Preloader from './components/abstract/Preloader';
import { APP_BASENAME } from './constants/app';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <Router basename={APP_BASENAME}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <ScrollToTop />
      <SmoothScroll>
        <div className="relative min-h-screen font-body selection:bg-lisbon-yellow selection:text-lisbon-blue overflow-x-hidden bg-slate-950">
          <NoiseOverlay />
          <CustomCursor />
          <Header onBookClick={() => setIsModalOpen(true)} />
          <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <Routes>
            <Route path="/" element={<Home onBookClick={() => setIsModalOpen(true)} />} />
            <Route path="/services" element={<HostelAndLuggage />} />
          </Routes>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;

