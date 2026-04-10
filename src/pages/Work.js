// Work Page — React State with filtering, hooks, and prop validation
import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { workPhotos } from '../utils/photoData';

// Sub-component with Props Validation
const MasonryItem = ({ photo }) => (
  <div className="masonry-item">
    <img src={photo.src} alt={photo.alt} loading="lazy" />
    <div className="masonry-overlay">
      <span className="masonry-label">{photo.title}</span>
    </div>
  </div>
);

// React Props Validation
MasonryItem.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const FILTERS = ['all', 'portrait', 'landscape', 'street', 'architecture'];

const Work = () => {
  // React State — active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // useMemo — derived state, avoids recomputing on every render
  const filteredPhotos = useMemo(() => {
    return activeFilter === 'all'
      ? workPhotos
      : workPhotos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // useCallback — stable handler reference
  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <main className="work-page">
      <div className="work-hero">
        <h1 className="work-hero-title">
          Selected<br />
          <em style={{ fontStyle: 'italic', color: 'var(--warm-grey)' }}>Works</em>
        </h1>
        <p className="work-hero-sub">Archive 2020 — 2024</p>
      </div>

      {/* Filter Bar — React State drives UI */}
      <div className="filter-bar" role="group" aria-label="Filter by category">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter === 'all' ? 'All Work' : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Grid — React Dataflow: photos passed as props */}
      <div className="masonry-grid" key={activeFilter}>
        {filteredPhotos.map((photo) => (
          <MasonryItem key={photo.id} photo={photo} />
        ))}
      </div>
    </main>
  );
};

export default Work;
