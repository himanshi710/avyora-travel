import { Link } from "react-router-dom";
import "./Luxury.css";

const Luxury = () => {
  const luxuryExperiences = [
    {
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      number: "01",
      title: "Heritage Palaces",
      description:
        "Stay in magnificent heritage properties where royal architecture, personalised service and timeless elegance come together.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
      number: "02",
      title: "Private Lake Cruises",
      description:
        "Sail across Udaipur's beautiful lakes aboard a private boat while Rajasthan's palaces glow in the evening light.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      number: "03",
      title: "Luxury Desert Camps",
      description:
        "Experience the Thar Desert from an elegant private camp with gourmet dining, traditional performances and stargazing.",
    },
  ];

  const luxuryBenefits = [
    "Handpicked luxury hotels",
    "Private chauffeur-driven vehicles",
    "Personalised itineraries",
    "Private sightseeing",
    "Exclusive dining experiences",
    "Dedicated travel assistance",
  ];

  return (
    <main className="luxury-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="luxury-hero">

        <div className="luxury-hero-overlay"></div>

        <div className="container">

          <div className="luxury-hero-content">

            <span>
              THE AVYORA PRIVATE COLLECTION
            </span>

            <h1>
              Rajasthan,
              <strong>Elevated.</strong>
            </h1>

            <p>
              Discover a more refined side of Rajasthan through
              private stays, exclusive experiences and journeys
              designed around you.
            </p>

            <Link
              to="/custom-trip"
              className="gold-btn"
            >
              Design My Luxury Journey
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="luxury-intro section">

        <div className="container">

          <div className="luxury-intro-grid">

            <div>

              <span className="luxury-label">
                A DIFFERENT KIND OF JOURNEY
              </span>

              <h2>
                Luxury is
                <span>how it feels.</span>
              </h2>

            </div>

            <div>

              <p>
                True luxury isn't simply about five-star hotels.
                It's about having the freedom to travel your way,
                without rushing and without compromise.
              </p>

              <p>
                From private palace stays and intimate dining to
                seamless transfers and carefully selected local
                experiences, every detail of your Avyora journey
                is thoughtfully considered.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SIGNATURE COLLECTION
      ========================= */}

      <section className="luxury-collection section section-dark">

        <div className="container">

          <div className="section-heading">

            <span className="subtitle">
              PRIVATE COLLECTION
            </span>

            <h2>
              Moments of
              <span>pure indulgence.</span>
            </h2>

            <p>
              Discover experiences created for travellers who
              appreciate the finer details.
            </p>

          </div>


          <div className="luxury-grid">

            {luxuryExperiences.map((item) => (
              <article
                className="luxury-card"
                key={item.number}
              >

                <div className="luxury-card-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span className="luxury-card-number">
                    {item.number}
                  </span>

                </div>

                <div className="luxury-card-content">

                  <span>
                    AVYORA PRIVATE
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          BENEFITS
      ========================= */}

      <section className="luxury-benefits section">

        <div className="container">

          <div className="luxury-benefits-grid">

            <div className="luxury-benefits-content">

              <span className="luxury-label">
                THE AVYORA STANDARD
              </span>

              <h2>
                Every detail,
                <span>taken care of.</span>
              </h2>

              <p>
                Your time is precious. Our role is to make your
                journey effortless, elegant and completely personal.
              </p>

              <Link
                to="/contact"
                className="outline-btn"
              >
                Speak With Our Expert
              </Link>

            </div>


            <div className="luxury-benefits-list">

              {luxuryBenefits.map((benefit, index) => (
                <div
                  className="luxury-benefit"
                  key={index}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {benefit}
                  </strong>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED
      ========================= */}

      <section className="luxury-featured">

        <div className="luxury-featured-overlay"></div>

        <div className="container">

          <div className="luxury-featured-content">

            <span>
              THE ROYAL WAY TO TRAVEL
            </span>

            <h2>
              Stay where
              <strong>history lives.</strong>
            </h2>

            <p>
              Wake up inside centuries-old palaces, walk through
              grand courtyards and experience Rajasthan's royal
              heritage with exceptional comfort.
            </p>

            <Link
              to="/hotels"
              className="gold-btn"
            >
              Explore Luxury Stays
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="luxury-cta section">

        <div className="container">

          <div className="luxury-cta-box">

            <div>

              <span>
                YOUR PRIVATE RAJASTHAN
              </span>

              <h2>
                Ready for a
                <strong>journey beyond ordinary?</strong>
              </h2>

            </div>

            <Link
              to="/custom-trip"
              className="gold-btn"
            >
              Create My Luxury Trip
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Luxury;