import React from 'react';
import { Heart, ArrowRight, Activity, Clock, ShieldAlert } from 'lucide-react';
import { servicesList, upcomingProjects } from '../data/siteContent';
import './Services.css';

export default function Services({ setActivePage, onDonateClick }) {
  return (
    <div className="services-page">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Our Services</h1>
        </div>
      </section>

      {/* Main Services List Section */}
      <section className="section services-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Humanitarian Care</span>
            <h2 className="section-title">Comprehensive Healthcare Services</h2>
            <p className="section-description">Dedicated to providing relief, dignity, and free medical care to dialysis patients and vulnerable individuals.</p>
          </div>

          <div className="full-services-grid">
            {servicesList.map((service, idx) => (
              <div key={service.id} className="card service-detail-card">
                <div className="service-detail-header">
                  <h3 className="service-detail-title">{service.title}</h3>
                  <span className="service-number">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                </div>
                {service.subtitle && <span className="service-detail-subtitle">{service.subtitle}</span>}
                <p className="service-detail-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="section section-subtle upcoming-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Future Horizon</span>
            <h2 className="section-title">Upcoming Projects</h2>
            <p className="section-description">Expanding our infrastructure and scope of medical care to reach even more families.</p>
          </div>

          <div className="upcoming-grid">
            {upcomingProjects.map((project, idx) => (
              <div key={idx} className="card upcoming-card">
                <div className="upcoming-badge">
                  <Clock size={16} />
                  <span>In Progress</span>
                </div>
                <h3 className="upcoming-title">{project.title}</h3>
                {project.description && <p className="upcoming-desc">{project.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA Card */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta-card">
            <div className="services-cta-content">
              <h2 className="services-cta-title">Help Us Sustain Our Free Medical Services</h2>
              <p className="services-cta-desc">
                Every contribution enables us to provide free dialysis sessions, lab tests, and meals to impoverish patients.
              </p>
            </div>
            <button className="btn btn-donate btn-lg services-cta-btn" onClick={onDonateClick}>
              <Heart size={18} fill="currentColor" />
              <span>DONATE NOW</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
