import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { siteInfo } from '../data/siteContent';
import './Footer.css';

export default function Footer({ setActivePage, onDonateClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    scrollToTop();
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => handleNavClick('home')}>
              <img src={siteInfo.logo} alt={siteInfo.name} className="footer-logo" />
              <span className="footer-title">{siteInfo.name}</span>
            </div>
            <p className="footer-desc">{siteInfo.description}</p>
            <button className="btn btn-donate footer-donate-btn" onClick={onDonateClick}>
              <Heart size={16} fill="currentColor" />
              <span>DONATE NOW</span>
            </button>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('about')}>About</button></li>
              <li><button onClick={() => handleNavClick('services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('gallery')}>Gallery</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="footer-col">
            <h5 className="footer-heading">Our Contacts</h5>
            <ul className="footer-contact-list">
              <li>
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${siteInfo.contact.phone1}`}>{siteInfo.contact.phone1}</a>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${siteInfo.contact.phone2}`}>{siteInfo.contact.phone2}</a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <a href={siteInfo.contact.mapUrl} target="_blank" rel="noopener noreferrer">
                  {siteInfo.contact.location}
                </a>
              </li>
            </ul>

            <div className="footer-social-links">
              <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <a href={siteInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">{siteInfo.copyright}</p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
