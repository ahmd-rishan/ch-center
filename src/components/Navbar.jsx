import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, X, Heart } from 'lucide-react';
import { siteInfo } from '../data/siteContent';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage, onDonateClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-wrapper">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href={`mailto:${siteInfo.contact.email}`} className="top-contact-item">
              <Mail size={13} />
              <span>{siteInfo.contact.email}</span>
            </a>
            <a href={`tel:${siteInfo.contact.phone1}`} className="top-contact-item">
              <Phone size={13} />
              <span>{siteInfo.contact.phone1}</span>
            </a>
            <a href={`tel:${siteInfo.contact.phone2}`} className="top-contact-item">
              <Phone size={13} />
              <span>{siteInfo.contact.phone2}</span>
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-contact-item">
              <MapPin size={13} />
              <span>{siteInfo.contact.location}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Clean White Navigation Header */}
      <nav className="main-navbar white-navbar">
        <div className="container navbar-container">
          <div className="navbar-brand" onClick={() => handleNavClick('home')}>
            <img src={siteInfo.logo} alt={siteInfo.name} className="brand-logo" />
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="btn btn-donate header-donate-btn" onClick={onDonateClick}>
              <Heart size={15} fill="currentColor" />
              <span>DONATE NOW</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button className="btn btn-donate mobile-donate-btn" onClick={() => { setMobileMenuOpen(false); onDonateClick(); }}>
                <Heart size={16} fill="currentColor" />
                <span>DONATE NOW</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
