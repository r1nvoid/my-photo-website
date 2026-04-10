// Home Page — functional component using hooks, state, and props
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoCard from '../components/PhotoCard';
import { heroPhoto, featuredPhotos } from '../utils/photoData';

// React State via hooks — used in child via prop drilling
const Home = () => {
  const marqueeItems = ['Portrait', 'Landscape', 'Architecture', 'Editorial', 'Documentary', 'Fine Art'];

  return (
    <main className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow fade-up">Fine Art Photography</p>
          <h1 className="hero-title fade-up delay-1">
            Light<br />
            <em>& Shadow</em>
          </h1>
          <p className="hero-subtitle fade-up delay-2">
            A study in stillness. Each frame is a quiet observation — 
            the space between moment and meaning.
          </p>
          {/* React Props — passing no props, using router Link */}
          <Link to="/work" className="btn-ghost fade-up delay-3">
            View Portfolio <span className="btn-arrow">&#8594;</span>
          </Link>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            {/* React Props — src and alt passed to img */}
            <img src={heroPhoto.src} alt={heroPhoto.alt} />
            <span className="hero-image-label">2024 Collection</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {/* Duplicate for seamless loop — React Props via map */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{item}</span>
              {i % marqueeItems.length === marqueeItems.length - 1 && (
                <span className="marquee-item marquee-dot">+</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Featured Work ── */}
      <section>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Selected Work</h2>
          <Link to="/work" className="section-link">View All &#8594;</Link>
        </div>

        {/* React Dataflow — passing photo props to PhotoCard */}
        <div className="photo-grid">
          {featuredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="about-strip">
        <div className="about-strip-image">
          <img
            src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=900&q=80&auto=format&fit=crop"
            alt="Photographer at work"
            loading="lazy"
          />
        </div>
        <div className="about-strip-content">
          <p className="about-strip-eyebrow">The Artist</p>
          <h2 className="about-strip-title">
            Photography as a<br />
            form of silence
          </h2>
          <p className="about-strip-body">
            Based between Paris and Tokyo, Lumiere is a fine art photographer 
            whose practice explores the poetics of everyday stillness. Each image 
            is a meditation — a held breath before the world moves again.
          </p>
          <Link to="/about" className="btn-light">
            Read More <span className="btn-arrow">&#8594;</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
