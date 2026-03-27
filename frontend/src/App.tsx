import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HostelAndLuggage from './pages/HostelAndLuggage';
import { Header, BookingModal } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onBookClick={() => setIsModalOpen(true)} />
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        <Routes>
          <Route path="/" element={<Home onBookClick={() => setIsModalOpen(true)} />} />
          <Route path="/services" element={<HostelAndLuggage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
