import { useState } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "../components/ExperienceCard";
import "./Experiences.css";

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const experiences = [
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    number: "01",
    category: "DESERT",
    title: "Thar Desert Safari",
    description:
      "Ride across the golden dunes of the Thar and experience spectacular desert landscapes at sunset.",
  },
  {
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    number: "02",
    category: "DESERT",
    title: "Sunset Camel Ride",
    description:
      "Watch the sun disappear behind the dunes while travelling through the desert on a traditional camel safari.",
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    number: "03",
    category: "CULTURE",
    title: "Jaipur Heritage Walk",
    description:
      "Explore the old streets of Jaipur and discover traditional architecture, bazaars, crafts and local stories.",
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    number: "04",
    category: "ROYAL",
    title: "Royal Palace Dining",
    description:
      "Enjoy an elegant dinner inspired by the flavours, traditions and grand kitchens of Rajasthan's royal families.",
  },
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    number: "05",
    category: "ROMANCE",
    title: "Lake Pichola Sunset Cruise",
    description:
      "Sail across the calm waters of Lake Pichola while Udaipur's magnificent palaces glow in golden evening light.",
  },
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    number: "06",
    category: "WILDLIFE",
    title: "Ranthambore Wildlife Safari",
    description:
      "Explore the forests of Ranthambore and search for tigers, leopards, deer and other fascinating wildlife.",
  },
  {
    image: "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e3",
    number: "07",
    category: "ADVENTURE",
    title: "Aravalli Mountain Escape",
    description:
      "Journey through the rugged Aravalli landscapes with scenic roads, viewpoints and peaceful countryside.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    number: "08",
    category: "CULTURE",
    title: "Rajasthani Folk Evening",
    description:
      "Experience traditional folk music, dance and colourful performances during an authentic Rajasthan evening.",
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    number: "09",
    category: "ROYAL",
    title: "Amber Fort Experience",
    description:
      "Step into Jaipur's royal past while exploring the magnificent courtyards, halls and architecture of Amber Fort.",
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    number: "10",
    category: "CULTURE",
    title: "Blue City Old Town Walk",
    description:
      "Walk through Jodhpur's blue-painted lanes and discover local homes, markets, temples and hidden corners.",
  },
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    number: "11",
    category: "ROMANCE",
    title: "Udaipur Candlelight Dinner",
    description:
      "Enjoy a romantic dinner overlooking the lakes and illuminated heritage architecture of Udaipur.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    number: "12",
    category: "DESERT",
    title: "Desert Stargazing",
    description:
      "Escape the city lights and spend a peaceful night watching countless stars over the Thar Desert.",
  },
  {
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    number: "13",
    category: "ADVENTURE",
    title: "Desert Jeep Adventure",
    description:
      "Take an exciting 4x4 drive across the dunes and remote desert trails of western Rajasthan.",
  },
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    number: "14",
    category: "WILDLIFE",
    title: "Birdwatching in Bharatpur",
    description:
      "Discover colourful migratory birds and peaceful wetlands at one of Rajasthan's most famous bird habitats.",
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    number: "15",
    category: "CULTURE",
    title: "Local Bazaar Discovery",
    description:
      "Explore colourful Rajasthan markets filled with handicrafts, textiles, jewellery, spices and traditional art.",
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    number: "16",
    category: "ROYAL",
    title: "Heritage Haveli Stay",
    description:
      "Stay inside a beautifully restored haveli and experience traditional architecture with modern comfort.",
  },
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    number: "17",
    category: "ROMANCE",
    title: "Monsoon Palace Sunset",
    description:
      "Watch the Aravalli hills turn golden as the sun sets from the magnificent Sajjangarh viewpoint.",
  },
  {
    image: "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e3",
    number: "18",
    category: "ADVENTURE",
    title: "Zipline Over Mehrangarh",
    description:
      "Experience an unforgettable aerial adventure with breathtaking views of Jodhpur's historic fort and blue city.",
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    number: "19",
    category: "CULTURE",
    title: "Traditional Cooking Experience",
    description:
      "Learn the secrets of authentic Rajasthani cuisine and prepare traditional dishes with local hosts.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    number: "20",
    category: "DESERT",
    title: "Desert Village Visit",
    description:
      "Meet local desert communities and discover their traditional homes, crafts, lifestyle and everyday stories.",
  },
  {
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    number: "21",
    category: "WILDLIFE",
    title: "Wildlife Photography Trail",
    description:
      "Explore Rajasthan's natural landscapes with dedicated time for wildlife and nature photography.",
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    number: "22",
    category: "ROYAL",
    title: "Jodhpur Royal Heritage",
    description:
      "Discover magnificent forts, royal residences and stories from the powerful rulers of Marwar.",
  },
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    number: "23",
    category: "ROMANCE",
    title: "Private Lake Dinner",
    description:
      "Create a memorable evening with a private lakeside dining experience surrounded by Udaipur's royal atmosphere.",
  },
  {
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    number: "24",
    category: "ADVENTURE",
    title: "Rajasthan Cycling Trail",
    description:
      "Cycle through peaceful villages, countryside roads and scenic landscapes away from the busy tourist routes.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    number: "25",
    category: "CULTURE",
    title: "Desert Music & Fire Night",
    description:
      "Gather around a desert bonfire for traditional music, local stories, dance and an unforgettable night under the stars.",
  },
];

  const categories = [
    "ALL",
    "DESERT",
    "CULTURE",
    "ROMANCE",
    "ROYAL",
    "ADVENTURE",
    "WILDLIFE",
  ];

  const filteredExperiences =
    activeCategory === "ALL"
      ? experiences
      : experiences.filter(
          (experience) => experience.category === activeCategory
        );

  return (
    <main className="experiences-page">

      {/* HERO */}
      <section className="experiences-hero">
        <div className="experiences-hero-overlay"></div>

        <div className="container">
          <div className="experiences-hero-content">

            <div className="hero-mini-line">
              <span></span>
              AVYORA SIGNATURE EXPERIENCES
              <span></span>
            </div>

            <h1>
              Don't Just Visit
              <strong>Rajasthan.</strong>
            </h1>

            <p>
              Feel the desert beneath your feet, hear ancient folk
              melodies, taste royal flavours and discover the stories
              hidden beyond the usual tourist trails.
            </p>

            <div className="hero-actions">
              <Link to="/custom-trip" className="gold-btn">
                Design My Experience
              </Link>

              <Link to="/tours" className="dark-outline-btn">
                Explore Tours
              </Link>
            </div>

          </div>

          <div className="hero-side-text">
            <span>27.0238° N</span>
            <span>74.2179° E</span>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="experiences-intro section">

        <div className="container">

          <div className="experiences-intro-top">

            <div className="experience-intro-title">
              <span className="experience-label">
                BEYOND SIGHTSEEING
              </span>

              <h2>
                Moments that
                <span>stay with you.</span>
              </h2>
            </div>

            <div className="experience-intro-text">
              <p>
                The best Rajasthan memories aren't always found on
                a map. Sometimes they happen around a fire in the
                desert, inside a quiet haveli or during a conversation
                with a local artisan.
              </p>

              <p>
                Choose the experiences that speak to you and let us
                weave them into your Rajasthan journey.
              </p>
            </div>

          </div>

          <div className="experience-stats">

            <div>
              <strong>08</strong>
              <span>Signature Experiences</span>
            </div>

            <div>
              <strong>07</strong>
              <span>Experience Styles</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Customisable</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Travel Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* FILTER */}
      <section className="experience-filter-section">

        <div className="container">

          <div className="experience-filter-heading">
            <div>
              <span>CURATED BY AVYORA</span>
              <h2>Choose your <em>mood.</em></h2>
            </div>

            <p>
              Filter the collection and discover experiences
              designed around the way you love to travel.
            </p>
          </div>


          <div className="experience-tabs">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE GRID */}
      <section className="experiences-list">

        <div className="container">

          <div className="experience-results">
            <span>
              SHOWING {filteredExperiences.length}
            </span>

            <span className="result-line"></span>

            <span>
              {activeCategory === "ALL"
                ? "ALL EXPERIENCES"
                : activeCategory}
            </span>
          </div>

          <div className="experiences-grid">

            {filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.number}
                {...experience}
              />
            ))}

          </div>

        </div>

      </section>


      {/* FEATURED */}
      <section className="featured-experience">

        <div className="featured-experience-bg"></div>

        <div className="container">

          <div className="featured-experience-grid">

            <div className="featured-experience-image">

              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
                alt="Thar Desert"
              />

              <div className="featured-image-number">
                09
              </div>

              <div className="featured-image-caption">
                AVYORA
                <strong>SIGNATURE</strong>
              </div>

            </div>


            <div className="featured-experience-content">

              <span className="experience-label">
                THE ONE YOU SHOULDN'T MISS
              </span>

              <h2>
                A night beneath
                <span>the desert stars.</span>
              </h2>

              <p>
                Leave the lights of the city behind. Ride into the
                Thar, watch the sun disappear behind the dunes and
                spend an evening surrounded by music, local cuisine
                and an endless sky full of stars.
              </p>

              <div className="featured-points">

                <div>
                  <span>01</span>
                  <strong>Private Desert Camp</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Sunset Camel Ride</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Traditional Dinner</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Live Folk Music</strong>
                </div>

              </div>

              <Link
                to="/custom-trip"
                className="gold-btn"
              >
                Add To My Journey
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="experiences-cta">

        <div className="experiences-cta-pattern"></div>

        <div className="container">

          <div className="experiences-cta-content">

            <span>
              YOUR JOURNEY • YOUR RULES
            </span>

            <h2>
              Make Rajasthan
              <strong>yours.</strong>
            </h2>

            <p>
              Tell us what you want to feel, see and experience.
              We'll create a journey around it.
            </p>

            <Link
              to="/custom-trip"
              className="gold-btn"
            >
              Create My Journey
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Experiences;