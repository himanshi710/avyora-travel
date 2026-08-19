import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import "./Destinations.css";

const Destinations = () => {
  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      name: "Jaipur",
      description:
        "The Pink City where royal architecture, colourful bazaars and timeless traditions come together.",
      places: ["Amber Fort", "Hawa Mahal", "City Palace"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
      name: "Udaipur",
      description:
        "A romantic world of shimmering lakes, grand palaces and unforgettable Aravalli sunsets.",
      places: ["Lake Pichola", "City Palace", "Sajjangarh"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358",
      name: "Jodhpur",
      description:
        "The Blue City wrapped around the mighty Mehrangarh Fort, filled with hidden lanes and royal stories.",
      places: ["Mehrangarh Fort", "Blue City", "Jaswant Thada"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      name: "Jaisalmer",
      description:
        "A golden desert kingdom where ancient havelis meet endless dunes and unforgettable sunsets.",
      places: ["Jaisalmer Fort", "Sam Dunes", "Patwon Ki Haveli"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      name: "Pushkar",
      description:
        "A soulful town of sacred waters, colourful streets, ancient temples and vibrant local culture.",
      places: ["Pushkar Lake", "Brahma Temple", "Pushkar Bazaar"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
      name: "Bikaner",
      description:
        "Discover grand forts, royal havelis and the authentic desert culture of northern Rajasthan.",
      places: ["Junagarh Fort", "Lalgarh Palace", "Karni Mata Temple"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e3",
      name: "Ranthambore",
      description:
        "Where wild forests, ancient ruins and thrilling safaris create a completely different Rajasthan.",
      places: [
        "Ranthambore National Park",
        "Ranthambore Fort",
        "Wildlife Safari",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
      name: "Mount Abu",
      description:
        "A peaceful escape into Rajasthan's hills with cool landscapes, lakes and breathtaking viewpoints.",
      places: ["Nakki Lake", "Guru Shikhar", "Dilwara Temples"],
    },
  ];

  const vibes = [
    {
      icon: "✦",
      title: "Royal",
      text: "Palaces, forts & heritage",
    },
    {
      icon: "◈",
      title: "Romantic",
      text: "Lakes, sunsets & escapes",
    },
    {
      icon: "◇",
      title: "Wild",
      text: "Safaris & untamed landscapes",
    },
    {
      icon: "✧",
      title: "Desert",
      text: "Dunes, camps & folk nights",
    },
  ];

  return (
    <main className="destinations-page">

      {/* ================= HERO ================= */}

      <section className="destinations-hero">

        <div className="destinations-hero-bg"></div>
        <div className="destinations-hero-grid"></div>

        <div className="container">

          <div className="destinations-hero-content">

            <div className="hero-mini-line">
              <span></span>
              RAJASTHAN / 01
              <span></span>
            </div>

            <p className="hero-eyebrow">
              THE LAND OF KINGS
            </p>

            <h1>
              Rajasthan
              <em>has many faces.</em>
            </h1>

            <p className="hero-description">
              From royal cities and forgotten forts to golden dunes
              and wild forests — discover a Rajasthan that feels
              different at every turn.
            </p>

            <div className="hero-actions">

              <Link to="/tours" className="destination-gold-btn">
                Explore Journeys
                <span>↗</span>
              </Link>

              <a href="#destination-list" className="destination-text-btn">
                Scroll to discover
                <span>↓</span>
              </a>

            </div>

          </div>

          <div className="hero-side-note">
            <span>AVYORA TRAVELS</span>
            <span>CURATED RAJASTHAN</span>
          </div>

        </div>

        <div className="hero-bottom">
          <span>08 DESTINATIONS</span>
          <span>∞ STORIES TO DISCOVER</span>
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="destinations-intro">

        <div className="container">

          <div className="intro-top">

            <span className="section-number">
              01 / DESTINATIONS
            </span>

            <span className="intro-small">
              CHOOSE YOUR MOOD
            </span>

          </div>

          <div className="intro-grid">

            <h2>
              Don't just visit
              <span>Rajasthan.</span>
              <strong>Feel it.</strong>
            </h2>

            <div className="intro-copy">

              <p>
                Every corner of Rajasthan carries a different energy.
                Jaipur feels regal. Udaipur feels poetic. Jaisalmer
                feels endless. Ranthambore feels wild.
              </p>

              <p>
                Choose a destination based on the experience you want,
                and we'll help turn it into a journey worth remembering.
              </p>

            </div>

          </div>

          {/* Vibes */}

          <div className="destination-vibes">

            {vibes.map((vibe, index) => (
              <div className="vibe-card" key={index}>

                <span className="vibe-icon">
                  {vibe.icon}
                </span>

                <div>
                  <small>0{index + 1}</small>
                  <h3>{vibe.title}</h3>
                  <p>{vibe.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= DESTINATION LIST ================= */}

      <section
        className="destinations-list"
        id="destination-list"
      >

        <div className="container">

          <div className="destination-heading">

            <div>
              <span>02 / THE COLLECTION</span>

              <h2>
                Eight cities.
                <em>Endless stories.</em>
              </h2>
            </div>

            <p>
              Handpicked places that reveal a different side of
              Rajasthan with every journey.
            </p>

          </div>


          <div className="destinations-page-grid">

            {destinations.map((destination, index) => (
              <div
                className={`destination-item destination-item-${index + 1}`}
                key={destination.name}
              >

                <div className="destination-index">
                  0{index + 1}
                </div>

                <DestinationCard
                  {...destination}
                />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= JOURNEY GUIDE ================= */}

      <section className="destination-guide">

        <div className="guide-background"></div>

        <div className="container">

          <div className="destination-guide-grid">

            <div className="destination-guide-image">

              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245"
                alt="Rajasthan Journey"
              />

              <div className="guide-image-frame"></div>

              <div className="guide-badge">
                <span>AVYORA</span>
                <strong>JOURNEY<br />DESIGN</strong>
              </div>

            </div>


            <div className="destination-guide-content">

              <span className="guide-label">
                03 / FIND YOUR PLACE
              </span>

              <h2>
                Which Rajasthan
                <span>belongs to you?</span>
              </h2>

              <p>
                Tell us what you're looking for and we'll match
                you with destinations that fit your travel mood,
                interests and pace.
              </p>

              <div className="guide-options">

                <div className="guide-option">
                  <span>01</span>
                  <strong>Royal Escape</strong>
                  <small>Palaces & heritage</small>
                </div>

                <div className="guide-option">
                  <span>02</span>
                  <strong>Desert Soul</strong>
                  <small>Dunes & folk culture</small>
                </div>

                <div className="guide-option">
                  <span>03</span>
                  <strong>Wild Rajasthan</strong>
                  <small>Safari & nature</small>
                </div>

                <div className="guide-option">
                  <span>04</span>
                  <strong>Romantic Trails</strong>
                  <small>Lakes & sunsets</small>
                </div>

              </div>

              <Link
                to="/custom-trip"
                className="destination-gold-btn"
              >
                Design My Journey
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="destinations-cta">

        <div className="cta-pattern"></div>

        <div className="container">

          <div className="destinations-cta-content">

            <span>04 / YOUR STORY STARTS HERE</span>

            <h2>
              Your Rajasthan
              <em>is waiting.</em>
            </h2>

            <p>
              One destination can change the way you see a place.
              Let us help you find yours.
            </p>

            <div className="cta-buttons">

              <Link to="/tours" className="destination-gold-btn">
                View Rajasthan Tours
                <span>↗</span>
              </Link>

              <Link to="/contact" className="cta-outline-btn">
                Talk To An Expert
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Destinations;