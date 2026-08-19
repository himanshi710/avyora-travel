import { useState } from "react";
import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import "./Tours.css";

const Tours = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const packages = [
  {
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85",
    duration: "7 Days / 6 Nights",
    title: "Royal Rajasthan",
    location: "Jaipur • Jodhpur • Udaipur",
    description:
      "A grand journey through magnificent forts, royal palaces, colourful bazaars and timeless Rajasthani heritage.",
    price: "₹29,999",
    tag: "AVYORA SIGNATURE",
    category: "Royal"
  },

  {
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
    duration: "5 Days / 4 Nights",
    title: "Golden Desert Escape",
    location: "Jaisalmer • Sam Dunes",
    description:
      "Golden dunes, camel safaris, desert sunsets, folk performances and a magical night under the stars.",
    price: "₹21,999",
    tag: "DESERT SOUL",
    category: "Desert"
  },

  {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",
    duration: "5 Days / 4 Nights",
    title: "Romance in Udaipur",
    location: "Udaipur • Kumbhalgarh",
    description:
      "A beautiful escape through shimmering lakes, grand palaces, intimate experiences and unforgettable sunsets.",
    price: "₹24,999",
    tag: "ROYAL ROMANCE",
    category: "Romantic"
  },

  {
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85",
    duration: "4 Days / 3 Nights",
    title: "Pink City Story",
    location: "Jaipur • Amer • Nahargarh",
    description:
      "Discover the royal charm of Jaipur through magnificent forts, palaces, markets and local culture.",
    price: "₹16,999",
    tag: "PINK CITY EDIT",
    category: "Royal"
  },

  {
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1000&q=85",
    duration: "6 Days / 5 Nights",
    title: "Blue City & Desert",
    location: "Jodhpur • Osian • Jaisalmer",
    description:
      "Experience the dramatic contrast between Jodhpur's blue streets and the endless golden Thar Desert.",
    price: "₹23,999",
    tag: "THAR ADVENTURE",
    category: "Desert"
  },

  {
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=85",
    duration: "8 Days / 7 Nights",
    title: "Grand Rajasthan",
    location: "Jaipur • Pushkar • Jodhpur • Udaipur",
    description:
      "Our signature Rajasthan circuit combining royal cities, heritage, culture, cuisine and breathtaking landscapes.",
    price: "₹34,999",
    tag: "THE GRAND EDIT",
    category: "Luxury"
  },

  {
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=85",
    duration: "6 Days / 5 Nights",
    title: "Royal Family Escape",
    location: "Jaipur • Jodhpur • Pushkar",
    description:
      "A relaxed family journey featuring forts, cultural experiences, comfortable stays and memorable activities.",
    price: "₹25,999",
    tag: "ROYAL FAMILY",
    category: "Family"
  },

  {
    image:
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=85",
    duration: "7 Days / 6 Nights",
    title: "Luxury Rajasthan",
    location: "Jaipur • Jodhpur • Udaipur",
    description:
      "Travel Rajasthan in refined style with heritage hotels, private experiences, fine dining and personalised service.",
    price: "₹49,999",
    tag: "THE ROYAL RESERVE",
    category: "Luxury"
  },

  {
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85",
    duration: "4 Days / 3 Nights",
    title: "Heritage Rajasthan",
    location: "Jaipur • Samode • Pushkar",
    description:
      "Step into Rajasthan's royal past through historic architecture, heritage stays and authentic cultural encounters.",
    price: "₹19,999",
    tag: "HERITAGE TRAIL",
    category: "Royal"
  },

  {
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85",
    duration: "9 Days / 8 Nights",
    title: "The Complete Rajasthan",
    location: "Jaipur • Jaisalmer • Jodhpur • Udaipur",
    description:
      "The ultimate Rajasthan adventure designed for travellers who want to experience the region in its entirety.",
    price: "₹42,999",
    tag: "THE AVYORA JOURNEY",
    category: "Luxury"
  }
];

  const filters = [
    "All",
    "Royal",
    "Romantic",
    "Desert",
    "Family",
    "Luxury"
  ];


  const filteredPackages =
    activeFilter === "All"
      ? packages
      : packages.filter(
          (item) => item.category === activeFilter
        );


  return (
    <main className="tours-page">


      {/* =====================================
          HERO
      ===================================== */}

      <section className="tours-hero">

        <div className="tours-hero-image"></div>

        <div className="tours-hero-overlay"></div>

        <div className="tours-hero-grain"></div>


        <div className="tours-hero-top">

          <span>
            AVYORA TRAVELS
          </span>

          <span>
            RAJASTHAN / 02
          </span>

        </div>


        <div className="tours-container">

          <div className="tours-hero-content">

            <div className="tours-kicker">

              <span></span>

              CURATED RAJASTHAN JOURNEYS

              <span></span>

            </div>


            <h1>

              Journeys

              <span>
                made
              </span>

              <strong>
                for you.
              </strong>

            </h1>


            <p>
              Discover Rajasthan through thoughtfully
              designed journeys where royal heritage,
              local culture and unforgettable experiences
              come together.
            </p>


            <div className="tours-hero-bottom">

              <span>
                10 CURATED JOURNEYS
              </span>

              <span>
                ↓ EXPLORE BELOW
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          INTRO
      ===================================== */}

      <section className="tours-intro">

        <div className="tours-container">

          <div className="tours-intro-grid">


            <div className="tours-intro-title">

              <span className="tours-label">
                FIND YOUR JOURNEY
              </span>

              <h2>
                Rajasthan,
                <span>
                  your way.
                </span>
              </h2>

            </div>


            <div className="tours-intro-content">

              <p className="intro-large">
                From royal palaces and colourful cities
                to golden deserts and peaceful lakes,
                every journey reveals a different side
                of Rajasthan.
              </p>

              <p>
                Choose one of our signature journeys or
                customise the experience around your own
                travel style, dates and interests.
              </p>


              <div className="tour-intro-line">

                <span></span>

                <small>
                  CURATED BY AVYORA
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FILTER
      ===================================== */}

      <section className="tour-filter-section">

        <div className="tours-container">

          <div className="tour-filter-top">

            <span>
              EXPLORE COLLECTION
            </span>

            <span>
              {filteredPackages.length}
              &nbsp; JOURNEYS
            </span>

          </div>


          <div className="tour-filter">

            {filters.map((filter) => (

              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >

                {filter}

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          PACKAGES
      ===================================== */}

      <section className="tours-packages">

        <div className="tours-container">

          <div className="tours-grid">

            {filteredPackages.map(
              (item, index) => (

                <PackageCard
                  key={`${item.title}-${index}`}
                  {...item}
                />

              )
            )}

          </div>


          {filteredPackages.length === 0 && (

            <div className="no-tours">

              <span>
                NO JOURNEYS FOUND
              </span>

              <h3>
                Try another category.
              </h3>

              <button
                onClick={() =>
                  setActiveFilter("All")
                }
              >
                View All Tours
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================
          CUSTOM JOURNEY
      ===================================== */}

      <section className="tours-custom">

        <div className="tours-custom-image"></div>

        <div className="tours-custom-overlay"></div>


        <div className="tours-container">

          <div className="tours-custom-content">

            <span>
              YOUR JOURNEY DOESN'T HAVE TO FIT A TEMPLATE
            </span>


            <h2>

              Create your

              <strong>
                own Rajasthan.
              </strong>

            </h2>


            <p>
              Have something different in mind?
              Tell us where you want to go, what you
              want to experience and how you want
              to travel.
            </p>


            <Link
              to="/custom-trip"
              className="tours-custom-button"
            >

              <span>
                Build My Journey
              </span>

              <strong>
                ↗
              </strong>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================
          BOTTOM STATEMENT
      ===================================== */}

      <section className="tours-bottom">

        <div className="tours-container">

          <div className="tours-bottom-content">

            <span>
              AVYORA TRAVELS
            </span>

            <h3>
              Not just a trip.
              <strong>
                A Rajasthan story.
              </strong>
            </h3>

            <Link to="/contact">
              Talk To Our Travel Experts →
            </Link>

          </div>

        </div>

      </section>


    </main>
  );
};

export default Tours;