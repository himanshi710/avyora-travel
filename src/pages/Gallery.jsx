import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

 const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    category: "HERITAGE",
    title: "The Royal Streets of Jaipur",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    category: "PALACES",
    title: "Rajasthan's Royal Legacy",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
    category: "UDAIPUR",
    title: "City of Lakes",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    category: "DESERT",
    title: "Golden Hour in the Thar",
    size: "wide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    category: "JAIPUR",
    title: "Colours of the Pink City",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    category: "LUXURY",
    title: "A Royal Stay",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "JAISALMER",
    title: "Life Among the Dunes",
    size: "wide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    category: "WILDLIFE",
    title: "Into the Wild",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    category: "HOTELS",
    title: "Stay Inside History",
    size: "small",
  },

  // 10
  {
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    category: "JODHPUR",
    title: "Shades of the Blue City",
    size: "large",
  },

  // 11
  {
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    category: "FORTS",
    title: "Guardians of Rajasthan",
    size: "small",
  },

  // 12
  {
    image:
      "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e3",
    category: "RANTHAMBORE",
    title: "Into Rajasthan's Wild",
    size: "small",
  },

  // 13
  {
    image:
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
    category: "MOUNT ABU",
    title: "A Quiet Escape in the Hills",
    size: "wide",
  },

  // 14
  {
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    category: "ARCHITECTURE",
    title: "Details of Royal Architecture",
    size: "small",
  },

  // 15
  {
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    category: "CULTURE",
    title: "Colours, Crafts & Culture",
    size: "small",
  },

  // 16
  {
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    category: "INDIA",
    title: "A Glimpse of Royal India",
    size: "large",
  },

  // 17
  {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
    category: "SUNSET",
    title: "Golden Reflections on the Lake",
    size: "small",
  },

  // 18
  {
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "LANDSCAPE",
    title: "Beyond the Palace Walls",
    size: "wide",
  },

  // 19
  {
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073",
    category: "TRADITION",
    title: "Stories of Rajasthan",
    size: "small",
  },

  // 20
  {
    image:
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
    category: "JOURNEY",
    title: "Roads That Lead to Royalty",
    size: "small",
  },
];

  const filters = [
    "ALL",
    "HERITAGE",
    "PALACES",
    "DESERT",
    "UDAIPUR",
    "LUXURY",
    "WILDLIFE",
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <main className="gallery-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">

          <span className="gallery-eyebrow">
            ✦ THE AVYORA VISUAL JOURNAL ✦
          </span>

          <h1>
            Rajasthan
            <strong>Unfiltered.</strong>
          </h1>

          <p>
            Palaces, deserts, colours, culture and quiet moments —
            captured through the Avyora journey.
          </p>

          <div className="gallery-hero-line">
            <span></span>
            SCROLL TO DISCOVER
            <span></span>
          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="gallery-intro section">

        <div className="container">

          <div className="gallery-intro-grid">

            <div className="gallery-intro-title">

              <span className="gallery-label">
                BEYOND PHOTOGRAPHS
              </span>

              <h2>
                Every frame
                <span>holds a story.</span>
              </h2>

            </div>

            <div className="gallery-intro-text">

              <p>
                Rajasthan is a destination that changes with every
                turn. One moment you're standing before a centuries-old
                palace, the next you're watching the sun disappear
                behind the Thar.
              </p>

              <p>
                Explore the colours, people, architecture and emotions
                that make every Avyora journey different.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FILTER + GALLERY
      ========================= */}

      <section className="gallery-section section section-dark">

        <div className="container">

          <div className="gallery-top">

            <div className="gallery-heading">

              <span>
                THE COLLECTION
              </span>

              <h2>
                Rajasthan
                <strong>through our eyes.</strong>
              </h2>

            </div>


            {/* FILTERS */}

            <div className="gallery-filters">

              {filters.map((filter) => (

                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>

              ))}

            </div>

          </div>


          {/* GALLERY */}

          <div className="gallery-grid">

            {filteredItems.map((item, index) => (

              <article
                className={`gallery-item gallery-${item.size}`}
                key={item.title}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-item-shine"></div>

                <div className="gallery-item-overlay">

                  <div className="gallery-item-top">

                    <span>
                      {item.category}
                    </span>

                    <b>
                      {(index + 1)
                        .toString()
                        .padStart(2, "0")}
                    </b>

                  </div>

                  <div className="gallery-item-bottom">

                    <h3>
                      {item.title}
                    </h3>

                    <div className="gallery-view">
                      VIEW MOMENT
                      <span>↗</span>
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE STRIP
      ========================= */}

      <section className="gallery-experience">

        <div className="container">

          <div className="gallery-experience-content">

            <span>
              NOT JUST A DESTINATION
            </span>

            <h2>
              Come for the
              <strong>pictures.</strong>
              Stay for the
              <strong>memories.</strong>
            </h2>

            <p>
              The best Rajasthan moments are the ones you don't
              expect — and the ones you never forget.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          QUOTE
      ========================= */}

      <section className="gallery-quote section">

        <div className="container">

          <div className="gallery-quote-content">

            <div className="quote-mark">
              “
            </div>

            <span>
              THE AVYORA PHILOSOPHY
            </span>

            <h2>
              Some journeys are
              <strong>felt, not photographed.</strong>
            </h2>

            <div className="quote-line"></div>

            <p>
              Let Rajasthan give you a story worth remembering.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="gallery-cta">

        <div className="gallery-cta-overlay"></div>

        <div className="container">

          <div className="gallery-cta-box">

            <div>

              <span>
                YOUR FRAME IS NEXT
              </span>

              <h2>
                Ready to create
                <strong>your Rajasthan story?</strong>
              </h2>

            </div>

            <Link
              to="/custom-trip"
              className="gold-btn"
            >
              Plan My Journey
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Gallery;