// About Page — class component demonstrating lifecycle methods
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { aboutPhotos } from '../utils/photoData';

// React Component Life Cycle — full lifecycle in class component
class About extends Component {
  // React Constructor — sets up initial state
  constructor(props) {
    super(props);
    this.state = {
      yearsActive: 0,
      imagesCreated: 0,
      exhibitionsHeld: 0,
    };
    this.animationRef = null;
  }

  // Lifecycle: componentDidMount — animate counters after mount
  componentDidMount() {
    document.title = 'About — Lumiere';
    this.animateCounters();
  }

  // Lifecycle: componentWillUnmount — clear timers on unmount
  componentWillUnmount() {
    if (this.animationRef) clearTimeout(this.animationRef);
    document.title = 'Lumiere — Photography';
  }

  animateCounters() {
    const targets = { yearsActive: 12, imagesCreated: 4800, exhibitionsHeld: 27 };
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const tick = () => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out
      this.setState({
        yearsActive: Math.floor(targets.yearsActive * ease),
        imagesCreated: Math.floor(targets.imagesCreated * ease),
        exhibitionsHeld: Math.floor(targets.exhibitionsHeld * ease),
      });
      if (step < steps) {
        this.animationRef = setTimeout(tick, interval);
      }
    };

    this.animationRef = setTimeout(tick, 600);
  }

  render() {
    const { yearsActive, imagesCreated, exhibitionsHeld } = this.state;

    return (
      <main className="about-page">
        {/* Hero Image */}
        <div className="about-full-hero">
          <img src={aboutPhotos.hero} alt="Photographer — editorial portrait" />
          <div className="about-hero-overlay">
            <h1 className="about-hero-text">
              The eye<br />
              <em>behind the lens</em>
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Sidebar — uses state from lifecycle */}
          <aside className="about-sidebar">
            <p className="about-sidebar-eyebrow">The Photographer</p>
            <h2 className="about-sidebar-name">
              Elena<br />Lumiere
            </h2>
            <p className="about-sidebar-tagline">
              Fine art photographer. Visual poet. Chronicler of quiet moments.
            </p>

            {/* Animated counters — driven by React State */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">{yearsActive}</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{imagesCreated.toLocaleString()}</span>
                <span className="stat-label">Images</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{exhibitionsHeld}</span>
                <span className="stat-label">Exhibitions</span>
              </div>
            </div>

            <Link to="/work" className="btn-ghost">
              View Portfolio <span className="btn-arrow">&#8594;</span>
            </Link>
          </aside>

          {/* Main content */}
          <div className="about-main">
            <section className="about-section">
              <p className="about-section-label">Origins</p>
              <h3 className="about-section-heading">A practice born from stillness</h3>
              <p className="about-section-text">
                Elena Lumiere began photographing at sixteen in a darkroom borrowed 
                from her grandmother in Lyon. What started as a way of seeing became 
                a lifelong obsession with light — its texture, its timing, the way it 
                makes ordinary objects feel sacred.
              </p>
            </section>

            {/* Photo pair */}
            <div className="about-photo-pair">
              <div className="photo-wrap">
                <img src={aboutPhotos.pair1} alt="Studio work" loading="lazy" />
              </div>
              <div className="photo-wrap">
                <img src={aboutPhotos.pair2} alt="Field work" loading="lazy" />
              </div>
            </div>

            <section className="about-section">
              <p className="about-section-label">Philosophy</p>
              <h3 className="about-section-heading">The space between moments</h3>
              <p className="about-section-text">
                Every photograph is an act of subtraction. A frame is not what is 
                included — it is everything that has been left out. Elena's practice 
                is guided by restraint, by the belief that the most powerful images 
                are those that leave room for the viewer to enter.
              </p>
            </section>

            <section className="about-section">
              <p className="about-section-label">Recognition</p>
              <p className="about-section-text">
                Her work has been exhibited across Paris, Tokyo, New York, and Berlin. 
                Permanent collections include the Maison Europeenne de la Photographie 
                and the Tokyo Photographic Art Museum. She has been awarded the Prix 
                Niépce and the Deutsche Börse Photography Foundation Prize.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
