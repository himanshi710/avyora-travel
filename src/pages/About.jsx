import { Link } from "react-router-dom";
import "./About.css";

const About = () => {

  const values = [
  {
    number: "01",
    title: "Local Intelligence",
    text: "We know Rajasthan beyond its famous landmarks — the quiet lanes, family-run heritage stays, hidden villages and experiences that most travellers never discover."
  },
  {
    number: "02",
    title: "Made Around You",
    text: "No two journeys should feel the same. Your interests, pace, travel style and expectations shape every itinerary we create."
  },
  {
    number: "03",
    title: "Beyond The Postcard",
    text: "We take you deeper into Rajasthan — from desert evenings and folk traditions to local food, crafts and stories passed through generations."
  },
  {
    number: "04",
    title: "Royal By Nature",
    text: "Thoughtful stays, seamless transport and warm Rajasthani hospitality come together to make every journey feel effortlessly special."
  },
  {
    number: "05",
    title: "Curated Experiences",
    text: "From palace dinners and desert safaris to village walks and cultural evenings, every experience is selected to make your Rajasthan journey memorable."
  },
  {
    number: "06",
    title: "Heritage Stays",
    text: "Stay in carefully selected heritage havelis, royal properties and character-filled hotels that bring Rajasthan's history and architecture closer to you."
  },
  {
    number: "07",
    title: "Seamless Journeys",
    text: "From airport transfers and private vehicles to hotels and sightseeing, we coordinate every important detail so your journey feels smooth from beginning to end."
  },
  {
    number: "08",
    title: "Authentic Rajasthan",
    text: "Experience the colours, flavours, music, traditions and hospitality of Rajasthan through genuine local interactions and thoughtfully planned activities."
  },
  {
    number: "09",
    title: "Luxury With Soul",
    text: "We combine refined comfort with authentic experiences, creating luxury journeys that feel personal, warm and connected to the destination."
  },
  {
    number: "10",
    title: "Always With You",
    text: "Our support does not end after booking. From the first conversation to your return journey, Avyora stays connected to make your travel experience stress-free."
  }
];


  const destinations = [
    "Jaipur",
    "Jodhpur",
    "Jaisalmer",
    "Udaipur"
  ];


  return (
    <main className="about-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="about-hero">

        <div className="about-hero-bg"></div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-grain"></div>


        {/* Hero top */}

        <div className="about-hero-top">

          <span>
            EST. RAJASTHAN
          </span>

          <span>
            AVYORA / 01
          </span>

        </div>


        <div className="about-hero-content">

          <div className="about-kicker">

            <span></span>

            THE AVYORA STORY

            <span></span>

          </div>


          <h1>

            Travel

            <span>
              with
            </span>

            <strong>
              Meaning.
            </strong>

          </h1>


          <p>
            Thoughtfully crafted journeys through
            the soul, stories and timeless grandeur
            of Rajasthan.
          </p>


          <div className="about-hero-scroll">

            <span>
              DISCOVER OUR STORY
            </span>

            <i>
              ↓
            </i>

          </div>

        </div>


        {/* Side vertical */}

        <div className="about-hero-side">
          AVYORA TRAVELS · RAJASTHAN
        </div>

      </section>


      {/* =====================================
          INTRO
      ===================================== */}

      <section className="about-intro">

        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-left">

              <span className="about-label">
                01 — WHO WE ARE
              </span>

              <h2>
                We create
                <span>
                  journeys.
                </span>
              </h2>

              <div className="about-intro-number">
                AV
              </div>

            </div>


            <div className="about-intro-right">

              <p className="intro-large">
                Avyora Travels is a Rajasthan-focused
                travel company creating journeys that
                feel personal, immersive and unforgettable.
              </p>

              <p>
                We believe travelling is not about ticking
                destinations off a list. It is about the
                stories you hear, the people you meet,
                the flavours you remember and the moments
                that stay long after you return home.
              </p>

              <p>
                From grand palaces and magnificent forts
                to desert villages and intimate local
                experiences, we carefully bring together
                the many sides of Rajasthan.
              </p>


              <Link
                to="/tours"
                className="about-text-link"
              >

                <span>
                  Explore Our Journeys
                </span>

                <strong>
                  ↗
                </strong>

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          IMAGE STORY
      ===================================== */}

      <section className="about-story">

        <div className="about-container">

          <div className="about-story-grid">

            {/* Image */}

            <div className="about-story-image">

              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"
                alt="Royal Rajasthan Palace"
              />

              <div className="story-image-overlay"></div>


              <div className="story-image-number">
                02
              </div>


              <div className="story-image-caption">

                <span>
                  THE LAND OF KINGS
                </span>

                <strong>
                  RAJASTHAN
                </strong>

              </div>

            </div>


            {/* Content */}

            <div className="about-story-content">

              <span className="about-label">
                OUR PHILOSOPHY
              </span>

              <h2>
                Look beyond
                <span>
                  the obvious.
                </span>
              </h2>


              <div className="story-divider"></div>


              <p>
                Rajasthan is more than its palaces.
                More than its forts. More than the
                famous photographs.
              </p>

              <p>
                It is the sound of folk music drifting
                through a desert evening. A cup of chai
                shared in a quiet village. The colours
                of a local market. The aroma of a
                traditional kitchen.
              </p>

              <p>
                These are the moments we want you to
                experience.
              </p>


              <Link
                to="/experiences"
                className="about-gold-button"
              >

                Discover Experiences

                <span>
                  ↗
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          DESTINATION STRIP
      ===================================== */}

      <section className="about-destination-strip">

        <div className="about-container">

          <div className="destination-strip-top">

            <span>
              OUR RAJASTHAN
            </span>

            <span>
              04 SIGNATURE CITIES
            </span>

          </div>


          <div className="destination-strip-list">

            {destinations.map((destination, index) => (

              <Link
                to="/destinations"
                key={destination}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {destination}
                </strong>

                <i>
                  ↗
                </i>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          VALUES
      ===================================== */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-values-heading">

            <div>

              <span className="about-label">
                03 — WHAT DEFINES US
              </span>

              <h2>
                The Avyora
                <span>
                  Difference.
                </span>
              </h2>

            </div>

            <p>
              Every journey is shaped by details
              that matter.
            </p>

          </div>


          <div className="about-values-grid">

            {values.map((value) => (

              <article
                className="about-value-card"
                key={value.number}
              >

                <div className="value-top">

                  <span>
                    {value.number}
                  </span>

                  <i></i>

                </div>


                <h3>
                  {value.title}
                </h3>


                <p>
                  {value.text}
                </p>


                <div className="value-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          QUOTE
      ===================================== */}

      <section className="about-quote">

        <div className="about-quote-bg"></div>

        <div className="about-quote-overlay"></div>


        <div className="about-container">

          <div className="about-quote-content">

            <span className="quote-kicker">
              A JOURNEY INTO ROYAL INDIA
            </span>


            <blockquote>

              “Some places you visit.

              <strong>
                Rajasthan becomes a part of you.
              </strong>

              ”

            </blockquote>


            <div className="quote-decoration">

              <span></span>

              AVYORA

              <span></span>

            </div>


            <p>
              Let us introduce you to the Rajasthan
              that exists beyond the postcards.
            </p>


            <Link
              to="/custom-trip"
              className="about-gold-button"
            >

              Plan My Journey

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================
          STATS
      ===================================== */}

      <section className="about-stats">

        <div className="about-container">

          <div className="about-stats-heading">

            <span>
              THE JOURNEY SO FAR
            </span>

          </div>


          <div className="about-stats-grid">

            <div className="about-stat">

              <strong>
                20<span>+</span>
              </strong>

              <p>
                Rajasthan
                <br />
                Destinations
              </p>

            </div>


            <div className="about-stat">

              <strong>
                50<span>+</span>
              </strong>

              <p>
                Curated
                <br />
                Experiences
              </p>

            </div>


            <div className="about-stat">

              <strong>
                100<span>%</span>
              </strong>

              <p>
                Personalized
                <br />
                Journeys
              </p>

            </div>


            <div className="about-stat">

              <strong>
                24<span>/7</span>
              </strong>

              <p>
                Travel
                <br />
                Assistance
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-content">

            <span>
              YOUR RAJASTHAN AWAITS
            </span>


            <h2>

              Your story

              <strong>
                starts here.
              </strong>

            </h2>


            <p>
              Tell us the Rajasthan you dream of.
              We'll turn it into a journey worth
              remembering.
            </p>


            <Link
              to="/custom-trip"
              className="about-cta-button"
            >

              <span>
                Start Planning
              </span>

              <strong>
                ↗
              </strong>

            </Link>

          </div>


          <div className="about-cta-mark">
            AVYORA
          </div>

        </div>

      </section>

    </main>
  );
};

export default About;