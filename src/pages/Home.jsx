import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, CheckCircle2, Quote, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  siteInfo,
  heroData,
  homeAboutData,
  storyData,
  statsData,
  pillarsData,
  missionData,
  servicesList,
  englishTestimonials,
  galleryCategories
} from '../data/siteContent';
import './Home.css';

export default function Home({ setActivePage, onDonateClick }) {
  const featuredServices = servicesList.slice(0, 6);
  const featuredGallery = galleryCategories.all.images.slice(0, 6);

  // Testimonial Carousel State & Navigation Logic
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const testimonialTrackRef = useRef(null);

  const handleTestimonialScroll = () => {
    if (testimonialTrackRef.current) {
      const children = Array.from(testimonialTrackRef.current.children);
      const trackLeft = testimonialTrackRef.current.scrollLeft;
      let closestIdx = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const distance = Math.abs(child.offsetLeft - trackLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveTestimonialIndex(closestIdx);
    }
  };

  const scrollToTestimonial = (index) => {
    if (testimonialTrackRef.current) {
      const children = testimonialTrackRef.current.children;
      if (children[index]) {
        const targetChild = children[index];
        testimonialTrackRef.current.scrollTo({
          left: targetChild.offsetLeft,
          behavior: 'smooth'
        });
        setActiveTestimonialIndex(index);
      }
    }
  };

  const handlePrevTestimonial = () => {
    const prevIndex = activeTestimonialIndex > 0 ? activeTestimonialIndex - 1 : englishTestimonials.length - 1;
    scrollToTestimonial(prevIndex);
  };

  const handleNextTestimonial = () => {
    const nextIndex = activeTestimonialIndex < englishTestimonials.length - 1 ? activeTestimonialIndex + 1 : 0;
    scrollToTestimonial(nextIndex);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTestimonialIndex, isHovered]);

  return (
    <div className="home-page">
      {/* ==================================================
          STRICT HERO RECREATION WITH NEW BUILDING BACKGROUND
         ================================================== */}
      <section className="exact-hero-section">
        {/* Full-width New Building Background Photograph */}
        <div
          className="exact-hero-bg-building"
          style={{ backgroundImage: `url('/assets/images/new-hero-building.jpg')` }}
        ></div>

        {/* Dark Navy Cinematic Overlay */}
        <div className="exact-hero-dark-overlay"></div>

        <div className="container exact-hero-container">
          <div className="exact-hero-grid">

            {/* LEFT COLUMN */}
            <div className="exact-hero-left">
              {/* Large Circular Logo Seal */}
              <div className="exact-logo-wrapper">
                <img
                  src={siteInfo.logo}
                  alt="CH Centre Malappuram Seal Logo"
                  className="exact-seal-logo"
                />
              </div>

              {/* Subheading / Tagline */}
              <div className="exact-tagline-block">
                <span className="exact-tagline-text">{heroData.heading}</span>
                <div className="exact-tagline-green-line"></div>
              </div>

              {/* Main Heading H1 */}
              <h1 className="exact-hero-h1">
                In the sacred name<br />
                of the great sages<br />
                who gave a new direction <br />with their lives to<br />
                  lead a community forward.
              </h1>

              {/* Donate Button */}
              <div className="exact-hero-btn-row">
                <button className="btn btn-donate exact-donate-btn" onClick={onDonateClick}>
                  <Heart size={18} fill="currentColor" />
                  <span>DONATE NOW</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="exact-hero-right">
              {/* Quote Block (Upper Right) */}
              <div className="exact-quote-container">
                <div className="exact-quote-symbol">“</div>
                <div className="exact-quote-body">
                  <p className="exact-quote-text">
                    Be merciful to those on<br />
                    the earth and the one in<br />
                    the heavens mercy upon you"
                  </p>
                  <div className="exact-quote-green-bar"></div>
                </div>
              </div>

              {/* Two People Cutout Photograph with Soft Bottom Fade (Lower Right) */}
              <div className="exact-leaders-container">
                <img
                  src="/assets/images/Hero-scaled-e1781515089199.webp"
                  alt="Panakkad Sayyid Leaders"
                  className="exact-leaders-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA: CURVED WHITE TRANSITION */}
        <div className="exact-hero-bottom-curve">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="exact-curve-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 Q720,105 1440,35 L1440,100 L0,100 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ==================================================
          ABOUT US SECTION (DIRECTLY BELOW HERO SECTION)
         ================================================== */}
      <section className="section home-about-section">
        <div className="container">
          <div className="home-about-grid">
            {/* LEFT COLUMN: TEXT CONTENT */}
            <div className="home-about-text-col">
              <h2 className="home-about-title">{homeAboutData.title}</h2>
              <div className="home-about-paragraphs">
                <p>{homeAboutData.paragraphs[0]}</p>
                <p>{homeAboutData.paragraphs[1]}</p>
                <p>
                  With the noble vision of offering hope and relief to financially underprivileged kidney patients, and serving as a sanctuary of mercy and care, the <strong>Malappuram C.H. Centre</strong> was founded during the holy month of Ramadan in 2010. Expanding on this mission, the <strong>Shihab Thangal Dialysis Centre</strong> was established under its aegis in 2022.
                </p>
                <p>{homeAboutData.paragraphs[3]}</p>
              </div>
              <div className="home-about-btn-row">
                <button className="btn-home-about-support" onClick={onDonateClick}>
                  Support Us
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: SINGLE IMAGE */}
            <div className="home-about-image-col">
              <div className="home-about-image-wrapper">
                <img
                  src="/assets/images/IN1-scaled.webp"
                  alt="CH Center Inauguration Ribbon Cutting"
                  className="home-about-single-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          UNTOUCHED OTHER HOMEPAGE SECTIONS
         ================================================== */}

      {/* Founding Exemplar Story (Sainaba Hajjumma Puthuvachola) */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text-col">
              <span className="section-badge">Our Legacy</span>
              <h2 className="story-heading">{storyData.heading}</h2>
              <blockquote className="story-quote">
                {storyData.quote}
              </blockquote>

              <div className="story-paragraphs">
                {storyData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="story-image-col">
              <div className="story-image-wrapper">
                <img src="/assets/images/legacy-lamp-bg.png" alt="Legacy Atmosphere Lamp" className="story-bg-img" />
                <img src={storyData.image} alt="Sainaba Hajjumma Puthuvachola" className="story-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Quote LEFT | Stats RIGHT) */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container-grid">
            {/* LEFT: Quote Block */}
            <div className="stats-quote-col">
              <div className="stats-quote-symbol">“</div>
              <div className="stats-quote-body">
                <p className="stats-quote-text">{heroData.quote.replace(/^"|"$/g, '')}</p>
                <div className="stats-quote-green-line"></div>
              </div>
            </div>

            {/* RIGHT: 3 Equal Statistics Columns with Vertical Dividers */}
            <div className="stats-numbers-col">
              {statsData.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What We Do</span>
            <h2 className="section-title">Our Essential Services</h2>
            <p className="section-description">Providing comprehensive healthcare, free dialysis, food distribution, and emergency support to those in need.</p>
          </div>

          <div className="services-grid">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="card service-card"
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="service-card-top-row">
                  <h3 className="service-card-title">{service.title}</h3>
                  <ArrowRight size={20} className="service-card-arrow" />
                </div>
                {service.subtitle && <span className="service-card-subtitle">{service.subtitle}</span>}
                <p className="service-card-desc">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="center-action-wrapper">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View All Services</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section section-dark pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#38bdf8' }}>
              {pillarsData.heading}
            </span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>{pillarsData.subheading}</h2>
          </div>

          <div className="pillars-grid">
            {pillarsData.items.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-img-wrapper">
                  <img src={pillar.image} alt={pillar.subtitle} className="pillar-img" />
                  <span className="pillar-tag">{pillar.title}</span>
                </div>
                <div className="pillar-card-body">
                  <h3 className="pillar-subtitle">{pillar.subtitle}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                  <button className="btn btn-white btn-sm" onClick={onDonateClick}>
                    <span>{pillar.cta}</span>
                    <Heart size={16} color="#e11d48" fill="#e11d48" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content-col">
              <span className="section-badge">Our Commitment</span>
              <h2 className="section-title">{missionData.heading}</h2>
              <p className="mission-intro">{missionData.intro}</p>

              <div className="mission-objectives-list">
                {missionData.objectives.map((obj, idx) => (
                  <div key={idx} className="mission-objective-item">
                    <CheckCircle2 size={20} className="obj-icon" />
                    <p>{obj}</p>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary" onClick={() => setActivePage('about')} style={{ marginTop: '1.5rem' }}>
                <span>Read Our Story</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Carousel) */}
      <section className="section section-subtle testimonials-section">
        <div className="container">
          <div className="testimonial-header-row">
            <div className="testimonial-header-text">
              <span className="section-badge">TESTIMONIAL</span>
              <h2 className="section-title">Hear from Others</h2>
            </div>

            {/* Navigation Arrow Buttons */}
            <div className="testimonial-controls">
              <button
                className="testimonial-nav-btn prev"
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="testimonial-nav-btn next"
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div
            className="testimonial-carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div
              className="testimonial-carousel-track"
              ref={testimonialTrackRef}
              onScroll={handleTestimonialScroll}
            >
              {englishTestimonials.map((t, idx) => (
                <div key={idx} className="testimonial-slide">
                  <div className="testimonial-card">
                    <Quote size={32} className="quote-mark" />
                    <p className="testimonial-quote">"{t.quote}"</p>
                    <div className="testimonial-author">
                      <div className="author-name">{t.author}</div>
                      {t.title && <div className="author-title">{t.title}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="testimonial-dots">
            {englishTestimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testimonial-dot ${activeTestimonialIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToTestimonial(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlights */}
      <section className="section gallery-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Impact in Pictures</span>
            <h2 className="section-title">SEE THE POSITIVE CHANGE WE'RE BRINGING TO OUR COMMUNITY.</h2>
          </div>

          <div className="gallery-highlights-grid">
            {featuredGallery.map((imgSrc, idx) => (
              <div key={idx} className="gallery-highlight-card" onClick={() => setActivePage('gallery')}>
                <img src={imgSrc} alt={`Community impact highlight ${idx + 1}`} className="gallery-highlight-img" />
                <div className="gallery-overlay">
                  <ImageIcon size={28} color="#ffffff" />
                </div>
              </div>
            ))}
          </div>

          <div className="center-action-wrapper">
            <button className="btn btn-outline" onClick={() => setActivePage('gallery')}>
              <span>VIEW FULL GALLERY</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer & Donate CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-box">
            <h2 className="cta-banner-title">Be a Part of Making a Difference</h2>
            <p className="cta-banner-desc">Whether by volunteering, donating, or raising awareness, every effort helps us support those in need. Together, we can make a meaningful and lasting impact.</p>
            <div className="cta-banner-buttons">
              <button className="btn btn-white btn-lg" onClick={() => setActivePage('contact')}>
                <span>BECOME A VOLUNTEER</span>
              </button>
              <button className="btn btn-donate btn-lg" onClick={onDonateClick}>
                <Heart size={18} fill="currentColor" />
                <span>DONATE TODAY</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
