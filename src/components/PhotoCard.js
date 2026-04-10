// React Component with Props Validation
import React from 'react';
import PropTypes from 'prop-types';

// React Props — receives photo data as props
const PhotoCard = ({ photo, index }) => {
  return (
    <div className="photo-card fade-up" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="photo-card-inner">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
        />
        <div className="photo-card-overlay">
          <div>
            <div className="photo-card-title">{photo.title}</div>
            <div className="photo-card-meta">{photo.location}</div>
          </div>
        </div>
      </div>
      <div className="photo-card-info">
        <div className="photo-card-category">{photo.category}</div>
        <div className="photo-card-name">{photo.title}</div>
      </div>
    </div>
  );
};

// React Props Validation — PropTypes for type checking
PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

PhotoCard.defaultProps = {
  index: 0,
};

export default PhotoCard;
