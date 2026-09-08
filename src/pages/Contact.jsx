import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Heart } from 'lucide-react';
import { 
  siteInfo, 
  supportIntro, 
  supportAvenues, 
  contactPageIntro 
} from '../data/siteContent';
import './Contact.css';

export default function Contact({ setActivePage, onDonateClick }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">{contactPageIntro.heading}</h1>
        </div>
      </section>

      {/* Support Avenues Section */}
      <section className="section support-intro-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get Involved</span>
            <h2 className="section-title">{supportIntro.heading}</h2>
          </div>

          <div className="support-paragraphs-box">
            {supportIntro.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="support-avenues-grid">
            {supportAvenues.map((item, idx) => (
              <div key={idx} className="card support-avenue-card">
                <div className="avenue-number">0{idx + 1}</div>
                <h3 className="avenue-title">{item.title}</h3>
                <p className="avenue-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section section-subtle contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Details */}
            <div className="contact-info-col">
              <span className="section-badge">Reach Us</span>
              <h2 className="contact-heading">{contactPageIntro.formHeading}</h2>
              <p className="contact-subheading">{contactPageIntro.formSubheading}</p>

              <div className="contact-cards-list">
                <div className="contact-card">
                  <div className="contact-icon-wrapper">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="contact-label">Email Address</span>
                    <a href={`mailto:${siteInfo.contact.email}`} className="contact-value">
                      {siteInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrapper">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="contact-label">Phone Numbers</span>
                    <div className="phone-numbers-group">
                      <a href={`tel:${siteInfo.contact.phone1}`} className="contact-value">{siteInfo.contact.phone1}</a>
                      <a href={`tel:${siteInfo.contact.phone2}`} className="contact-value">{siteInfo.contact.phone2}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{siteInfo.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="direct-donate-callout">
                <h4>Want to make an instant impact?</h4>
                <p>Support our dialysis patients directly via UPI.</p>
                <button className="btn btn-donate" onClick={onDonateClick}>
                  <Heart size={16} fill="currentColor" />
                  <span>DONATE NOW</span>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              <div className="card form-card">
                <h3 className="form-title">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="form-success-alert">
                    <CheckCircle2 size={42} color="#0d9488" />
                    <h4>Thank You!</h4>
                    <p>Your message has been received. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="First Name" 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Last Name" 
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com" 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 90000 00000" 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message or inquiry here..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary form-submit-btn">
                      <span>Submit</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
