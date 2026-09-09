import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Quote, Heart, Users, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  siteInfo, 
  homeAboutData,
  missionData, 
  valuesData, 
  teamMembers, 
  malayalamTestimonials 
} from '../data/siteContent';
import './About.css';

export default function About({ setActivePage, onDonateClick }) {
  // Voices of Courage Carousel State & Navigation Logic
  const [activeVoiceIndex, setActiveVoiceIndex] = useState(0);
  const [isVoiceHovered, setIsVoiceHovered] = useState(false);
  const voicesTrackRef = useRef(null);

  const handleVoiceScroll = () => {
    if (voicesTrackRef.current) {
      const children = Array.from(voicesTrackRef.current.children);
      const trackLeft = voicesTrackRef.current.scrollLeft;
      let closestIdx = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const distance = Math.abs(child.offsetLeft - trackLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveVoiceIndex(closestIdx);
    }
  };

  const scrollToVoice = (index) => {
    if (voicesTrackRef.current) {
      const children = voicesTrackRef.current.children;
      if (children[index]) {
        const targetChild = children[index];
        voicesTrackRef.current.scrollTo({
          left: targetChild.offsetLeft,
          behavior: 'smooth'
        });
        setActiveVoiceIndex(index);
      }
    }
  };

  const handlePrevVoice = () => {
    const prevIndex = activeVoiceIndex > 0 ? activeVoiceIndex - 1 : malayalamTestimonials.length - 1;
    scrollToVoice(prevIndex);
  };

  const handleNextVoice = () => {
    const nextIndex = activeVoiceIndex < malayalamTestimonials.length - 1 ? activeVoiceIndex + 1 : 0;
    scrollToVoice(nextIndex);
  };

  useEffect(() => {
    if (isVoiceHovered) return;
    const timer = setInterval(() => {
      handleNextVoice();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeVoiceIndex, isVoiceHovered]);
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-grid">
            <div className="page-banner-text">
              <h1 className="page-banner-title">About Us</h1>
              <div className="page-breadcrumb-pill">
                <button onClick={() => setActivePage('home')}>Home</button>
                <span>/</span>
                <span>About</span>
              </div>
            </div>
            <div className="page-banner-media">
              <div className="page-banner-img-wrapper">
                <img
                  src="/assets/images/new-hero-building.jpg"
                  alt="CH Center Building Architecture"
                  className="page-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Detailed Story Section (Directly Below Hero Banner) */}
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

      {/* Overview Section */}
      <section className="section about-overview-section">
        <div className="container">
          <div className="about-overview-box">
            <span className="section-badge">Who We Are</span>
            <h2 className="section-title">{siteInfo.name}</h2>
            <p className="lead-text">{siteInfo.description}</p>
            <p className="body-text">
              A voluntary organization established with a charitable perspective, dedicated to the social, cultural, and economic upliftment of all sections of society. Our core initiative centers around bringing medical relief, free dialysis, night palliative care, food, and emergency support to patients facing severe hardship.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives & Mission */}
      <section className="section section-subtle about-mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Foundation</span>
            <h2 className="section-title">Mission & Objectives</h2>
          </div>

          <div className="objectives-grid">
            {missionData.objectives.map((obj, idx) => (
              <div key={idx} className="card objective-card">
                <div className="objective-icon-wrapper">
                  <CheckCircle2 size={24} className="obj-icon" />
                </div>
                <p className="objective-text">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Principles</span>
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">THE PRINCIPLES THAT GUIDE EVERYTHING WE DO.</p>
          </div>

          <div className="values-grid">
            {valuesData.map((val, idx) => (
              <div key={idx} className="card value-card">
                <div className="value-icon-box">
                  <img src={val.icon} alt={val.name} className="val-icon-img" />
                </div>
                <h3 className="value-name">{val.name}</h3>
                <p className="value-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team Members */}
      <section className="section section-subtle team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Leadership</span>
            <h2 className="section-title">Those Who Make It Possible</h2>
            <p className="section-description">The dedicated leaders and office bearers guiding the CH Center Malappuram vision forward.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="card team-card">
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-title">{member.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Courage (Malayalam Testimonials Carousel) */}
      <section className="section voices-section">
        <div className="container">
          <div className="voices-header-row">
            <div className="voices-header-text">
              <span className="section-badge">Voices of Courage</span>
              <h2 className="section-title">അഭിപ്രായങ്ങൾ & ആശംസകൾ</h2>
              <p className="section-description">CH Center Malappuram പ്രവർത്തനങ്ങളെക്കുറിച്ചുള്ള പ്രമുഖരുടെ വാക്കുകൾ</p>
            </div>

            {/* Navigation Controls */}
            <div className="voices-controls">
              <button
                className="voices-nav-btn prev"
                onClick={handlePrevVoice}
                aria-label="Previous Voice of Courage"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="voices-nav-btn next"
                onClick={handleNextVoice}
                aria-label="Next Voice of Courage"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div
            className="voices-carousel-wrapper"
            onMouseEnter={() => setIsVoiceHovered(true)}
            onMouseLeave={() => setIsVoiceHovered(false)}
            onTouchStart={() => setIsVoiceHovered(true)}
            onTouchEnd={() => setIsVoiceHovered(false)}
          >
            <div
              className="voices-carousel-track"
              ref={voicesTrackRef}
              onScroll={handleVoiceScroll}
            >
              {malayalamTestimonials.map((item, idx) => (
                <div key={idx} className="voices-slide">
                  <div className="card voice-card">
                    <div className="voice-header">
                      <img src={item.image} alt={item.author} className="voice-author-img" />
                      <div className="voice-author-details">
                        <h3 className="voice-author-name malayalam-text">{item.author}</h3>
                        {item.title && <span className="voice-author-title malayalam-text">{item.title}</span>}
                      </div>
                    </div>
                    <div className="voice-body">
                      <Quote size={24} className="voice-quote-icon" />
                      <p className="voice-quote-text malayalam-text">{item.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="voices-dots">
            {malayalamTestimonials.map((_, idx) => (
              <button
                key={idx}
                className={`voices-dot ${activeVoiceIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToVoice(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA Card */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-content">
              <h2 className="about-cta-title">Support Our Cause Today</h2>
              <p className="about-cta-desc">
                Your generosity directly empowers our free dialysis, food distribution, and medical care programs.
              </p>
            </div>
            <button className="btn btn-donate btn-lg about-cta-btn" onClick={onDonateClick}>
              <Heart size={18} fill="currentColor" />
              <span>DONATE NOW</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
