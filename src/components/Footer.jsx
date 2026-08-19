import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Decorative Top Line */}
      <div className="footer-gold-line"></div>

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =========================
              BRAND SECTION
          ========================= */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <span className="footer-logo-main">
                AVYORA
              </span>

              <span className="footer-logo-sub">
                TRAVELS
              </span>

            </Link>

            <div className="footer-tagline">
              JOURNEYS · STORIES · ROYAL MOMENTS
            </div>

            <p>
              Discover the royal soul of Rajasthan through carefully
              crafted journeys, hidden gems, luxurious stays and
              experiences that stay with you forever.
            </p>


            {/* Social */}
            <div className="footer-socials">

              <a href="#" aria-label="Instagram">
                <span>IG</span>
                Instagram
              </a>

              <a href="#" aria-label="Facebook">
                <span>FB</span>
                Facebook
              </a>

              <a href="#" aria-label="YouTube">
                <span>YT</span>
                YouTube
              </a>

            </div>

          </div>


          {/* =========================
              EXPLORE
          ========================= */}

          <div className="footer-column">

            <div className="footer-column-number">
              01
            </div>

            <h3>
              Explore
            </h3>

            <ul>

              <li>
                <Link to="/">
                  <span>→</span>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <span>→</span>
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/tours">
                  <span>→</span>
                  Rajasthan Tours
                </Link>
              </li>

              <li>
                <Link to="/destinations">
                  <span>→</span>
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/experiences">
                  <span>→</span>
                  Experiences
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              TRAVEL
          ========================= */}

          <div className="footer-column">

            <div className="footer-column-number">
              02
            </div>

            <h3>
              Travel With Us
            </h3>

            <ul>

              <li>
                <Link to="/luxury">
                  <span>→</span>
                  Luxury Rajasthan
                </Link>
              </li>

              <li>
                <Link to="/hotels">
                  <span>→</span>
                  Hotels & Stays
                </Link>
              </li>

              <li>
                <Link to="/custom-trip">
                  <span>→</span>
                  Custom Trips
                </Link>
              </li>

              <li>
                <Link to="/travel-guide">
                  <span>→</span>
                  Travel Guide
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  <span>→</span>
                  Gallery
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div className="footer-column footer-contact">

            <div className="footer-column-number">
              03
            </div>

            <h3>
              Let's Talk
            </h3>


            <div className="contact-item">

              <span>
                CALL US
              </span>

              <a href="tel:+919999999999">
                +91 99999 99999
              </a>

            </div>


            <div className="contact-item">

              <span>
                WRITE TO US
              </span>

              <a href="mailto:info@avyoratravels.com">
                info@avyoratravels.com
              </a>

            </div>


            <div className="contact-item">

              <span>
                FIND US
              </span>

              <p>
                Jaipur
                <br />
                Rajasthan, India
              </p>

            </div>


            <Link
              to="/contact"
              className="footer-contact-btn"
            >
              Plan Your Journey
              <span>↗</span>
            </Link>

          </div>

        </div>

      </div>


      {/* =========================
          LARGE BRAND TEXT
      ========================= */}

      <div className="footer-watermark">

        <span>
          AVYORA
        </span>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear}{" "}
            <span>
              Avyora Travels
            </span>
            . All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

          <div className="footer-made">

            Crafted for
            <span>
              Rajasthan
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;