import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HostelAndLuggage from './pages/HostelAndLuggage';
import { Header, BookingModal } from './components/Header';
import { Footer } from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

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

  return (
    <Router basename="/hotel-15">
      <ScrollToTop />
      <SmoothScroll>
        <div className="relative min-h-screen font-body selection:bg-lisbon-yellow selection:text-lisbon-blue overflow-x-hidden">
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
