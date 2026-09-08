import React, { useEffect } from 'react';
import { X, Heart, ShieldCheck } from 'lucide-react';
import { siteInfo } from '../data/siteContent';
import './DonateModal.css';

export default function DonateModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <Heart size={24} color="#e11d48" fill="#e11d48" />
          </div>
          <h3>Support {siteInfo.name}</h3>
          <p>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm) to make your contribution.</p>
        </div>

        <div className="modal-qr-container">
          <img 
            src={siteInfo.qrCode} 
            alt="Payment QR Code" 
            className="modal-qr-image"
          />
        </div>

        <div className="modal-footer-info">
          <div className="security-note">
            <ShieldCheck size={18} color="#0d9488" />
            <span>Direct contribution to CH Center Malappuram official accounts</span>
          </div>
          <button className="btn btn-outline modal-done-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
