import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hotels.css";

const Hotels = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
      location: "JAIPUR",
      type: "PALACE COLLECTION",
      name: "The Amber Courtyard",
      description:
        "A refined royal escape inspired by Jaipur's grand architecture, traditional courtyards and timeless hospitality.",
      price: "₹12,500",
      category: "Heritage",
      tag: "ROYAL ADDRESS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
      location: "UDAIPUR",
      type: "LAKESIDE RETREAT",
      name: "Lake of Dreams",
      description:
        "An intimate lakeside hideaway where elegant rooms, quiet mornings and spectacular sunsets meet.",
      price: "₹18,500",
      category: "Luxury",
      tag: "LAKE ESCAPE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85",
      location: "JODHPUR",
      type: "HERITAGE HAVELI",
      name: "The Blue Haveli",
      description:
        "Stay among Jodhpur's iconic blue lanes in a beautifully restored haveli overlooking the old city.",
      price: "₹10,500",
      category: "Heritage",
      tag: "BLUE CITY EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      location: "JAISALMER",
      type: "DESERT RETREAT",
      name: "Thar Moon Camp",
      description:
        "A sophisticated desert camp where golden dunes, private tents and star-filled nights create an unforgettable stay.",
      price: "₹9,500",
      category: "Desert",
      tag: "DESERT NIGHTS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
      location: "PUSHKAR",
      type: "BOUTIQUE STAY",
      name: "The Sacred Courtyard",
      description:
        "A peaceful boutique retreat combining traditional Rajasthani design with understated contemporary comfort.",
      price: "₹7,500",
      category: "Boutique",
      tag: "SLOW RAJASTHAN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
      location: "RANTHAMBORE",
      type: "WILDERNESS RETREAT",
      name: "Jungle & Stone",
      description:
        "A nature-led retreat offering peaceful surroundings, safari adventures and a luxurious escape into the wild.",
      price: "₹11,500",
      category: "Wildlife",
      tag: "WILD EDITION",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      location: "KUMBHALGARH",
      type: "FORT RETREAT",
      name: "The Aravalli Estate",
      description:
        "A secluded mountain retreat surrounded by the Aravalli hills, historic landscapes and peaceful countryside.",
      price: "₹14,500",
      category: "Luxury",
      tag: "HIDDEN ROYALTY",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      location: "JODHPUR",
      type: "ROYAL RESERVE",
      name: "Mehrangarh House",
      description:
        "A grand heritage-inspired stay designed for travellers who appreciate privacy, architecture and royal living.",
      price: "₹22,500",
      category: "Luxury",
      tag: "THE ROYAL RESERVE",
    },
  ];

  const filters = [
    "All",
    "Heritage",
    "Luxury",
    "Desert",
    "Boutique",
    "Wildlife",
  ];

  const filteredHotels =
    activeFilter === "All"
      ? hotels
      : hotels.filter(
          (hotel) => hotel.category === activeFilter
        );

  return (
    <main className="hotels-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="hotels-hero">

        <div className="hotels-hero-image"></div>

        <div className="hotels-hero-overlay"></div>

        <div className="hotels-grain"></div>


        <div className="hotels-hero-top">

          <span>AVYORA / STAY EDITION</span>

          <span>RAJASTHAN · INDIA</span>

        </div>


        <div className="hotels-container">

          <div className="hotels-hero-content">

            <div className="hotels-kicker">

              <span></span>

              STAYS WORTH TRAVELLING FOR

              <span></span>

            </div>


            <h1>

              Stay

              <span>
                somewhere
              </span>

              <strong>
                extraordinary.
              </strong>

            </h1>


            <p>
              Discover character-filled palaces, intimate havelis,
              desert retreats and hidden stays carefully selected
              for the Avyora journey.
            </p>


            <div className="hotels-hero-meta">

              <span>08 CURATED STAYS</span>

              <span>↓ DISCOVER COLLECTION</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          INTRO
      ===================================== */}

      <section className="hotels-intro">

        <div className="hotels-container">

          <div className="hotels-intro-grid">

            <div>

              <span className="hotels-label">
                MORE THAN A ROOM
              </span>

              <h2>
                Where you stay
                <span>becomes the story.</span>
              </h2>

            </div>


            <div className="hotels-intro-text">

              <p className="large-text">
                In Rajasthan, a hotel can be a palace,
                a haveli, a tent beneath the stars or a
                quiet retreat overlooking the Aravallis.
              </p>

              <p>
                That's why we don't simply choose hotels.
                We select places that become part of your
                experience — places with character, atmosphere,
                history and a sense of place.
              </p>

              <div className="intro-signature">
                <span></span>
                <small>SELECTED BY AVYORA</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          COLLECTION
      ===================================== */}

      <section className="hotel-collection">

        <div className="hotels-container">

          <div className="collection-heading">

            <div>

              <span className="hotels-label">
                THE AVYORA STAY COLLECTION
              </span>

              <h2>
                Places with
                <span>personality.</span>
              </h2>

            </div>

            <p>
              Every property is chosen to complement
              the destination and the way you travel.
            </p>

          </div>


          {/* FILTER */}

          <div className="hotel-filter">

            <div className="filter-count">
              {filteredHotels.length.toString().padStart(2, "0")}
              <span> STAYS</span>
            </div>

            <div className="filter-buttons">

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


          {/* HOTEL GRID */}

          <div className="hotels-grid">

            {filteredHotels.map((hotel, index) => (

              <article
                className={`hotel-card ${
                  index === 0
                    ? "hotel-card-featured"
                    : ""
                }`}
                key={hotel.name}
              >

                <div className="hotel-image">

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                  />

                  <div className="hotel-image-shade"></div>


                  <span className="hotel-tag">
                    {hotel.tag}
                  </span>


                  <div className="hotel-location">
                    <span>0{index + 1}</span>
                    {hotel.location}
                  </div>


                  <div className="hotel-image-arrow">
                    ↗
                  </div>

                </div>


                <div className="hotel-content">

                  <span className="hotel-type">
                    {hotel.type}
                  </span>

                  <h3>
                    {hotel.name}
                  </h3>

                  <p>
                    {hotel.description}
                  </p>


                  <div className="hotel-bottom">

                    <div className="hotel-price">

                      <small>
                        FROM / NIGHT
                      </small>

                      <strong>
                        {hotel.price}
                      </strong>

                    </div>


                    <Link to="/contact">
                      Enquire
                      <span>↗</span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          EXPERIENCE STRIP
      ===================================== */}

      <section className="hotel-statement">

        <div className="hotel-statement-inner">

          <span>
            PALACE · HAVELI · DESERT · WILDERNESS
          </span>

          <h2>
            Your room should
            <strong>
              feel like Rajasthan.
            </strong>
          </h2>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ===================================== */}

      <section className="hotel-features">

        <div className="hotels-container">

          <div className="features-heading">

            <span className="hotels-label">
              THE AVYORA STANDARD
            </span>

            <h2>
              Chosen with
              <span>intention.</span>
            </h2>

          </div>


          <div className="hotel-features-grid">

            <div className="hotel-feature">

              <span>01</span>

              <h3>
                Character First
              </h3>

              <p>
                We look for properties with soul,
                architecture and a genuine connection
                to their surroundings.
              </p>

            </div>


            <div className="hotel-feature">

              <span>02</span>

              <h3>
                Location Matters
              </h3>

              <p>
                Your stay is positioned to make exploring
                Rajasthan easier, richer and more memorable.
              </p>

            </div>


            <div className="hotel-feature">

              <span>03</span>

              <h3>
                Your Style
              </h3>

              <p>
                Heritage, boutique, luxury or wilderness —
                we match your stay to your way of travelling.
              </p>

            </div>


            <div className="hotel-feature">

              <span>04</span>

              <h3>
                One Seamless Journey
              </h3>

              <p>
                Accommodation, transfers and experiences
                are coordinated together for a smoother trip.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURED EXPERIENCE
      ===================================== */}

      <section className="hotel-featured">

        <div className="hotel-featured-image"></div>

        <div className="hotel-featured-overlay"></div>


        <div className="hotels-container">

          <div className="hotel-featured-content">

            <span>
              THE ROYAL WAY TO STAY
            </span>

            <h2>
              Wake up
              <strong>
                somewhere legendary.
              </strong>
            </h2>

            <p>
              Imagine opening your curtains to an ancient
              fort, breakfast in a palace courtyard or
              watching the Thar turn gold at sunset.
            </p>

            <Link
              to="/luxury"
              className="hotel-gold-button"
            >
              Explore Luxury Stays
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="hotels-cta">

        <div className="hotels-container">

          <div className="hotels-cta-box">

            <div>

              <span>
                PLANNING YOUR RAJASTHAN ESCAPE?
              </span>

              <h2>
                We'll find
                <strong>
                  your place.
                </strong>
              </h2>

            </div>


            <Link
              to="/custom-trip"
              className="hotel-cta-button"
            >
              Plan My Stay
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Hotels;