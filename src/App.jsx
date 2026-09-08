import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';

import MobileStickyBar from './components/MobileStickyBar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Mapping between pathnames and page IDs for Navbar/Footer active state & internal navigation
  const pathToPageMap = {
    '/': 'home',
    '/about': 'about',
    '/services': 'services',
    '/gallery': 'gallery',
    '/contact': 'contact'
  };

  const pageToPathMap = {
    home: '/',
    about: '/about',
    services: '/services',
    gallery: '/gallery',
    contact: '/contact'
  };

  const activePage = pathToPageMap[location.pathname] || 'home';

  const setActivePage = (pageId) => {
    const targetPath = pageToPathMap[pageId] || (typeof pageId === 'string' && pageId.startsWith('/') ? pageId : '/');
    navigate(targetPath);
  };

  // Set document title dynamically based on URL route and scroll to top on navigation
  useEffect(() => {
    const titleMap = {
      '/': 'CH Center Malappuram',
      '/about': 'ABOUT – CH Center Malappuram',
      '/services': 'SERVICES – CH Center Malappuram',
      '/gallery': 'GALLERY – CH Center Malappuram',
      '/contact': 'CONTACT – CH Center Malappuram'
    };
    document.title = titleMap[location.pathname] || 'CH Center Malappuram';
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleDonateOpen = () => setIsDonateOpen(true);
  const handleDonateClose = () => setIsDonateOpen(false);

  return (
    <div className="app-container">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onDonateClick={handleDonateOpen} 
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home setActivePage={setActivePage} onDonateClick={handleDonateOpen} />} />
          <Route path="/about" element={<About setActivePage={setActivePage} onDonateClick={handleDonateOpen} />} />
          <Route path="/services" element={<Services setActivePage={setActivePage} onDonateClick={handleDonateOpen} />} />
          <Route path="/gallery" element={<Gallery setActivePage={setActivePage} />} />
          <Route path="/contact" element={<Contact setActivePage={setActivePage} onDonateClick={handleDonateOpen} />} />
          {/* Technical 404 Fallback - Minimal Route handling */}
          <Route 
            path="*" 
            element={
              <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>404 - Page Not Found</h1>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>The requested URL does not exist.</p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>Return to Home</button>
              </div>
            } 
          />
        </Routes>
      </main>

      <Footer 
        setActivePage={setActivePage} 
        onDonateClick={handleDonateOpen} 
      />

      <DonateModal 
        isOpen={isDonateOpen} 
        onClose={handleDonateClose} 
      />

      <MobileStickyBar 
        onDonateClick={handleDonateOpen} 
      />
    </div>
  );
}
