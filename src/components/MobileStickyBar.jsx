import React from 'react';
import { Phone, MessageCircle, Heart } from 'lucide-react';
import { siteInfo } from '../data/siteContent';
import './MobileStickyBar.css';

export default function MobileStickyBar({ onDonateClick }) {
  return (
    <div className="mobile-sticky-bar">
      <a 
        href={`tel:${siteInfo.contact.phone1}`} 
        className="mobile-sticky-btn call-btn"
        aria-label="Call CH Center"
      >
        <Phone size={18} />
        <span>Call</span>
      </a>

      <a 
        href={siteInfo.socials.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-sticky-btn whatsapp-btn"
        aria-label="WhatsApp CH Center"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <button 
        onClick={onDonateClick} 
        className="mobile-sticky-btn donate-btn"
        aria-label="Donate Now"
      >
        <Heart size={18} fill="currentColor" />
        <span>Donate Now</span>
      </button>
    </div>
  );
}
