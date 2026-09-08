import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories } from '../data/siteContent';
import './Gallery.css';

export default function Gallery({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { key: 'all', label: 'All Images' },
    { key: 'tharakkallidal', label: 'Tharakkallidal' },
    { key: 'inauguration', label: 'Inauguration' },
    { key: 'hospice', label: 'Pookoya Thangal Hospice' }
  ];

  const currentCategoryData = galleryCategories[selectedCategory] || galleryCategories.all;
  const currentImages = currentCategoryData.images;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <div className="gallery-page">
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner-title">Gallery</h1>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section gallery-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Moments & Memories</span>
            <h2 className="section-title">Our Impact in Pictures</h2>
            <p className="section-description">A visual chronicle of laying the foundation stone, inauguration ceremonies, palliative care, and daily service.</p>
          </div>

          {/* Category Tabs */}
          <div className="gallery-tabs-container">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`gallery-tab-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Images Grid */}
          <div className="gallery-grid">
            {currentImages.map((imgSrc, idx) => (
              <div 
                key={idx} 
                className="gallery-card"
                onClick={() => openLightbox(idx)}
              >
                <img src={imgSrc} alt={`${currentCategoryData.title} image ${idx + 1}`} className="gallery-card-img" />
                <div className="gallery-card-overlay">
                  <ImageIcon size={32} color="#ffffff" />
                  <span className="overlay-text">Click to view</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close preview">
            <X size={24} />
          </button>

          <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentImages[lightboxIndex]} 
              alt={`Full size preview ${lightboxIndex + 1}`} 
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              {currentCategoryData.title} - Image {lightboxIndex + 1} of {currentImages.length}
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage} aria-label="Next image">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
