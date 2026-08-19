import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-bg"></div>

      <div className="hero-overlay"></div>

      {/* Grain / Texture */}
      <div className="hero-noise"></div>


      {/* =========================
          TOP LOCATION
      ========================= */}

      <div className="hero-location">

        <span className="location-dot"></span>

        <span>
          RAJASTHAN · INDIA
        </span>

      </div>


      {/* =========================
          VERTICAL TEXT
      ========================= */}

      <div className="hero-vertical">
        AVYORA TRAVELS
      </div>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="hero-content">

        <div className="hero-label">

          <span className="label-line"></span>

          <span>
            THE LAND OF ROYALTY
          </span>

          <span className="label-line"></span>

        </div>


        <h1>

          <span className="hero-title-small">
            Discover
          </span>

          <span className="hero-title-main">
            Rajasthan
          </span>

          <span className="hero-title-outline">
            Differently.
          </span>

        </h1>


        <p className="hero-description">
          Journey through royal palaces, ancient forts,
          golden deserts and timeless traditions —
          beautifully curated by Avyora Travels.
        </p>


        {/* Buttons */}

        <div className="hero-buttons">

          <Link
            to="/tours"
            className="hero-primary-btn"
          >

            <span>
              Explore Tours
            </span>

            <strong>
              ↗
            </strong>

          </Link>


          <Link
            to="/custom-trip"
            className="hero-secondary-btn"
          >

            Plan Your Journey

            <span>
              →
            </span>

          </Link>

        </div>


        {/* =========================
            MINI STATS
        ========================= */}

        <div className="hero-stats">

          <div className="hero-stat">

            <strong>
              25+
            </strong>

            <span>
              ROYAL EXPERIENCES
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="hero-stat">

            <strong>
              15+
            </strong>

            <span>
              DESTINATIONS
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="hero-stat">

            <strong>
              100%
            </strong>

            <span>
              CURATED JOURNEYS
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          RIGHT DESTINATION CARD
      ========================= */}

      <div className="hero-side-card">

        <span className="side-card-number">
          01
        </span>

        <div className="side-card-content">

          <span>
            FEATURED DESTINATION
          </span>

          <h3>
            Jaisalmer
          </h3>

          <p>
            The Golden City
          </p>

        </div>

        <Link to="/destinations">
          →
        </Link>

      </div>


      {/* =========================
          SCROLL
      ========================= */}

      <div className="hero-scroll">

        <div className="scroll-mouse">

          <span></span>

        </div>

        <span className="scroll-text">
          SCROLL TO EXPLORE
        </span>

      </div>


      {/* =========================
          CORNER DETAILS
      ========================= */}

      <div className="hero-corner hero-corner-left"></div>

      <div className="hero-corner hero-corner-right"></div>


      {/* =========================
          BOTTOM LOCATION
      ========================= */}

      <div className="hero-bottom-text">

        <span>
          JAIPUR
        </span>

        <i></i>

        <span>
          JODHPUR
        </span>

        <i></i>

        <span>
          JAISALMER
        </span>

        <i></i>

        <span>
          UDAIPUR
        </span>

      </div>

    </section>
  );
};

export default Hero;