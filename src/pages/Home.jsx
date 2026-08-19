import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import DestinationCard from "../components/DestinationCard";
import ExperienceCard from "../components/ExperienceCard";
import "./Home.css";

const Home = () => {
  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      duration: "7 Days / 6 Nights",
      title: "Royal Rajasthan",
      location: "Jaipur • Jodhpur • Udaipur",
      description:
        "A grand journey through royal palaces, majestic forts, colourful bazaars and timeless Rajasthani culture.",
      price: "₹29,999",
      tag: "BEST SELLER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      duration: "5 Days / 4 Nights",
      title: "Desert Escape",
      location: "Jaisalmer • Sam",
      description:
        "Experience golden dunes, camel safaris, desert camps and magical evenings under the stars.",
      price: "₹21,999",
      tag: "POPULAR",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
      duration: "5 Days / 4 Nights",
      title: "Romantic Udaipur",
      location: "Udaipur • Kumbhalgarh",
      description:
        "A romantic escape filled with lakes, royal architecture, heritage stays and unforgettable sunsets.",
      price: "₹24,999",
      tag: "ROMANTIC",
    },
  ];

  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      name: "Jaipur",
      description:
        "The Pink City where royal heritage meets vibrant streets, magnificent forts and timeless architecture.",
      places: ["Amber Fort", "City Palace", "Hawa Mahal"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
      name: "Udaipur",
      description:
        "The City of Lakes, known for romantic landscapes, majestic palaces and serene waters.",
      places: ["City Palace", "Lake Pichola", "Sajjangarh"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358",
      name: "Jaisalmer",
      description:
        "The Golden City invites you to discover its living fort, endless dunes and desert traditions.",
      places: ["Jaisalmer Fort", "Sam Dunes", "Patwon Ki Haveli"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1602643163981-1a0f8d2d9c1f",
      name: "Jodhpur",
      description:
        "The Blue City surrounded by royal forts, ancient streets and the majestic Mehrangarh Fort.",
      places: ["Mehrangarh Fort", "Blue City", "Jaswant Thada"],
    },
  ];

  const experiences = [
    {
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      icon: "🐪",
      title: "Desert Safari",
      description:
        "Ride across the golden Thar Desert and experience the magic of Rajasthan's dunes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e3",
      icon: "🏰",
      title: "Palace Stay",
      description:
        "Stay like royalty in magnificent heritage hotels and beautifully restored palaces.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
      icon: "🎭",
      title: "Cultural Evenings",
      description:
        "Enjoy traditional music, folk performances, local cuisine and authentic Rajasthani hospitality.",
    },
  ];

  return (
    <main className="home-page">

      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <section className="home-intro section">
        <div className="container">

          <div className="home-intro-grid">

            <div className="home-intro-heading">
              <span className="home-small-title">
                THE AVYORA JOURNEY
              </span>

              <h2>
                Rajasthan is not
                <span> just a destination.</span>
              </h2>
            </div>

            <div className="home-intro-text">
              <p>
                It is a story written in sandstone, painted in vibrant
                colours and carried through generations of tradition.
              </p>

              <p>
                At Avyora Travels, we create meaningful journeys that
                bring you closer to the royal soul, rich culture and
                breathtaking landscapes of Rajasthan.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                Discover Our Story
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="home-destinations section section-dark">

        <div className="container">

          <div className="section-heading">
            <span className="subtitle">
              EXPLORE RAJASTHAN
            </span>

            <h2>
              Places That <span>Tell Stories</span>
            </h2>

            <p>
              From royal cities and magnificent forts to golden
              deserts and peaceful lakes, discover the many faces
              of Rajasthan.
            </p>
          </div>

          <div className="destinations-grid">

            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                {...destination}
              />
            ))}

          </div>

          <div className="center-btn">
            <Link
              to="/destinations"
              className="outline-btn"
            >
              View All Destinations
            </Link>
          </div>

        </div>

      </section>

      {/* PACKAGES */}
      <section className="home-packages section">

        <div className="container">

          <div className="section-heading">
            <span className="subtitle">
              CURATED JOURNEYS
            </span>

            <h2>
              Rajasthan <span>Tour Packages</span>
            </h2>

            <p>
              Carefully designed itineraries that combine iconic
              landmarks, authentic experiences and comfortable stays.
            </p>
          </div>

          <div className="packages-grid">

            {packages.map((item, index) => (
              <PackageCard
                key={index}
                {...item}
              />
            ))}

          </div>

          <div className="center-btn">
            <Link
              to="/tours"
              className="gold-btn"
            >
              Explore All Tours
            </Link>
          </div>

        </div>

      </section>

      {/* EXPERIENCES */}
      <section className="home-experiences section section-dark">

        <div className="container">

          <div className="section-heading">
            <span className="subtitle">
              BEYOND THE ORDINARY
            </span>

            <h2>
              Experiences You'll <span>Remember</span>
            </h2>

            <p>
              Travel beyond sightseeing and experience Rajasthan
              through its traditions, people, flavours and landscapes.
            </p>
          </div>

          <div className="experiences-grid">

            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                {...experience}
              />
            ))}

          </div>

          <div className="center-btn">
            <Link
              to="/experiences"
              className="outline-btn"
            >
              Discover Experiences
            </Link>
          </div>

        </div>

      </section>

      {/* WHY AVYORA */}
      <section className="why-avyora section">

        <div className="container">

          <div className="why-grid">

            <div className="why-image">

              <img
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e"
                alt="Rajasthan Travel"
              />

              <div className="why-image-badge">
                <strong>100%</strong>
                <span>Rajasthan</span>
                <small>Experience</small>
              </div>

            </div>

            <div className="why-content">

              <span className="home-small-title">
                WHY AVYORA TRAVELS
              </span>

              <h2>
                Travel Rajasthan
                <span> Differently.</span>
              </h2>

              <p className="why-intro">
                We believe the best journeys are not simply about
                places you visit, but about the memories you create
                along the way.
              </p>

              <div className="why-list">

                <div className="why-item">
                  <div className="why-number">01</div>

                  <div>
                    <h3>Curated Experiences</h3>

                    <p>
                      Thoughtfully designed trips that go beyond
                      ordinary sightseeing.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-number">02</div>

                  <div>
                    <h3>Local Expertise</h3>

                    <p>
                      Discover Rajasthan through people who know
                      its stories, culture and hidden gems.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-number">03</div>

                  <div>
                    <h3>Personalized Journeys</h3>

                    <p>
                      Your trip should feel personal, flexible and
                      designed around you.
                    </p>
                  </div>
                </div>

              </div>

              <Link
                to="/about"
                className="gold-btn"
              >
                Why Choose Avyora
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* LUXURY CTA */}
      <section className="home-luxury">

        <div className="home-luxury-overlay"></div>

        <div className="container">

          <div className="home-luxury-content">

            <span>
              THE ROYAL WAY TO TRAVEL
            </span>

            <h2>
              Your Rajasthan.
              <strong>Your Story.</strong>
            </h2>

            <p>
              From private palace stays to exclusive desert
              experiences, let us create a journey that feels
              uniquely yours.
            </p>

            <div className="home-luxury-buttons">

              <Link
                to="/luxury"
                className="gold-btn"
              >
                Explore Luxury
              </Link>

              <Link
                to="/custom-trip"
                className="outline-btn"
              >
                Create My Trip
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;