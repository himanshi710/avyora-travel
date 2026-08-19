import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* =========================
            LOGO
        ========================= */}

        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
        >

          <span className="logo-main">
            AVYORA
          </span>

          <span className="logo-sub">
            TRAVELS
          </span>

        </Link>


        {/* =========================
            NAVIGATION
        ========================= */}

        <nav
          className={`nav-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          {/* Home */}

          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>


          {/* About */}

          <NavLink
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </NavLink>


          {/* Tours */}

          <NavLink
            to="/tours"
            className="nav-link"
            onClick={closeMenu}
          >
            Tours
          </NavLink>


          {/* Hotels */}

          <NavLink
            to="/hotels"
            className="nav-link"
            onClick={closeMenu}
          >
            Hotels
          </NavLink>


          {/* =========================
              MORE DROPDOWN
          ========================= */}

          <div
            className={`nav-dropdown ${
              moreOpen ? "show" : ""
            }`}
          >

            <button
              className="more-button"
              onClick={toggleMore}
              type="button"
            >
              More

              <span
                className={`dropdown-arrow ${
                  moreOpen ? "rotate" : ""
                }`}
              >
                ↓
              </span>
            </button>


            <div className="dropdown-menu">

              <div className="dropdown-header">

                <span>
                  EXPLORE AVYORA
                </span>

                <small>
                  Discover Rajasthan
                </small>

              </div>


              <NavLink
                to="/destinations"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  01
                </span>

                <div>
                  <strong>
                    Destinations
                  </strong>

                  <small>
                    Explore Rajasthan
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/experiences"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  02
                </span>

                <div>
                  <strong>
                    Experiences
                  </strong>

                  <small>
                    Royal & unique moments
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/luxury"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  03
                </span>

                <div>
                  <strong>
                    Luxury Rajasthan
                  </strong>

                  <small>
                    Travel like royalty
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/custom-trip"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  04
                </span>

                <div>
                  <strong>
                    Custom Trip
                  </strong>

                  <small>
                    Build your own journey
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/travel-guide"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  05
                </span>

                <div>
                  <strong>
                    Travel Guide
                  </strong>

                  <small>
                    Know before you go
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/gallery"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  06
                </span>

                <div>
                  <strong>
                    Gallery
                  </strong>

                  <small>
                    Rajasthan in frames
                  </small>
                </div>
              </NavLink>


              <NavLink
                to="/contact"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  07
                </span>

                <div>
                  <strong>
                    Contact
                  </strong>

                  <small>
                    Let's plan together
                  </small>
                </div>
              </NavLink>

            </div>

          </div>

        </nav>


        {/* =========================
            DESKTOP CTA
        ========================= */}

        <Link
          to="/custom-trip"
          className="nav-cta"
        >

          <span>
            Plan Your Trip
          </span>

          <strong>
            ↗
          </strong>

        </Link>


        {/* =========================
            MOBILE MENU
        ========================= */}

        <button
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          type="button"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>
  );
};

export default Navbar;