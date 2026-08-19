import { Link, useParams } from "react-router-dom";
import "./TourDetails.css";

const TourDetails = () => {
  const { id } = useParams();

  const tours = {
    "royal-rajasthan": {
      title: "Royal Rajasthan",
      subtitle: "THE GRAND RAJASTHAN JOURNEY",
      duration: "7 Days / 6 Nights",
      price: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      locations: "Jaipur • Pushkar • Jodhpur • Udaipur",
    },

    "desert-escape": {
      title: "Golden Desert Escape",
      subtitle: "INTO THE HEART OF THE THAR",
      duration: "5 Days / 4 Nights",
      price: "₹21,999",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      locations: "Jaisalmer • Sam • Khuri",
    },

    "romantic-udaipur": {
      title: "Romantic Udaipur",
      subtitle: "A ROYAL ESCAPE FOR TWO",
      duration: "5 Days / 4 Nights",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
      locations: "Udaipur • Kumbhalgarh",
    },

    "pink-city": {
      title: "Pink City Escape",
      subtitle: "THE ROYAL CHARM OF JAIPUR",
      duration: "4 Days / 3 Nights",
      price: "₹16,999",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      locations: "Jaipur • Amer",
    },
  };

  const tour = tours[id] || tours["royal-rajasthan"];

  const itinerary = [
    {
      day: "01",
      title: "Arrival in Jaipur",
      text: "Arrive in the Pink City and settle into your heritage hotel. Enjoy a relaxed evening exploring the colourful streets of Jaipur.",
    },
    {
      day: "02",
      title: "Royal Jaipur",
      text: "Visit Amber Fort, City Palace, Jantar Mantar and Hawa Mahal. End your day with an authentic Rajasthani dinner.",
    },
    {
      day: "03",
      title: "Jaipur to Pushkar",
      text: "Travel towards Pushkar and explore the sacred lake, ancient temples and vibrant local markets.",
    },
    {
      day: "04",
      title: "Pushkar to Jodhpur",
      text: "Continue towards the Blue City and discover the magnificent Mehrangarh Fort overlooking the old city.",
    },
    {
      day: "05",
      title: "Jodhpur to Udaipur",
      text: "Journey through the Aravalli landscape towards Udaipur. Spend the evening beside the beautiful Lake Pichola.",
    },
    {
      day: "06",
      title: "Romantic Udaipur",
      text: "Explore City Palace, Saheliyon Ki Bari and the old city. Enjoy a peaceful sunset boat ride on Lake Pichola.",
    },
    {
      day: "07",
      title: "Departure",
      text: "Enjoy your final breakfast in Rajasthan before departing with beautiful memories of the Land of Kings.",
    },
  ];

  const included = [
    "Premium hotel accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle",
    "Professional local assistance",
    "Sightseeing as per itinerary",
    "Airport / railway station transfers",
  ];

  const excluded = [
    "Flight or train tickets",
    "Personal expenses",
    "Travel insurance",
    "Camera fees at monuments",
    "Lunch and dinner unless mentioned",
    "Anything not mentioned in inclusions",
  ];

  return (
    <main className="tour-details-page">

      {/* HERO */}

      <section
        className="tour-details-hero"
        style={{
          backgroundImage: `url(${tour.image})`,
        }}
      >
        <div className="tour-details-hero-overlay"></div>

        <div className="container">
          <div className="tour-details-hero-content">

            <Link
              to="/tours"
              className="back-tour-link"
            >
              ← Back to Tours
            </Link>

            <span className="tour-details-subtitle">
              {tour.subtitle}
            </span>

            <h1>
              {tour.title}
            </h1>

            <p>
              {tour.locations}
            </p>

          </div>
        </div>
      </section>


      {/* QUICK INFO */}

      <section className="tour-quick-info">

        <div className="container">

          <div className="quick-info-grid">

            <div>
              <span>Duration</span>
              <strong>{tour.duration}</strong>
            </div>

            <div>
              <span>Starting From</span>
              <strong>{tour.price}</strong>
            </div>

            <div>
              <span>Travel Style</span>
              <strong>Private Journey</strong>
            </div>

            <div>
              <span>Best For</span>
              <strong>Couples & Families</strong>
            </div>

            <Link
              to="/custom-trip"
              className="gold-btn"
            >
              Enquire Now
            </Link>

          </div>

        </div>

      </section>


      {/* OVERVIEW */}

      <section className="tour-overview section">

        <div className="container">

          <div className="tour-overview-grid">

            <div className="tour-overview-heading">

              <span>
                THE JOURNEY
              </span>

              <h2>
                Rajasthan,
                <strong>beautifully curated.</strong>
              </h2>

            </div>

            <div className="tour-overview-text">

              <p>
                Experience the royal spirit of Rajasthan through
                an unforgettable journey across its iconic cities,
                magnificent forts, beautiful lakes and colourful
                bazaars.
              </p>

              <p>
                This carefully designed itinerary combines
                Rajasthan's must-see landmarks with authentic
                cultural moments, comfortable stays and private
                travel.
              </p>

              <p>
                Every journey with Avyora can be customized around
                your preferred dates, hotels, experiences and pace.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ITINERARY */}

      <section className="tour-itinerary section section-dark">

        <div className="container">

          <div className="section-heading">

            <span className="subtitle">
              YOUR JOURNEY
            </span>

            <h2>
              Day by Day
              <span>Itinerary</span>
            </h2>

            <p>
              A glimpse into what your Rajasthan journey could look like.
            </p>

          </div>

          <div className="itinerary-list">

            {itinerary.map((item) => (
              <div
                className="itinerary-item"
                key={item.day}
              >

                <div className="itinerary-day">
                  DAY
                  <strong>{item.day}</strong>
                </div>

                <div className="itinerary-line"></div>

                <div className="itinerary-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* INCLUDED */}

      <section className="tour-included section">

        <div className="container">

          <div className="included-grid">

            <div className="included-box">

              <span>
                INCLUDED
              </span>

              <h2>
                What's
                <strong>included</strong>
              </h2>

              <ul>
                {included.map((item, index) => (
                  <li key={index}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>


            <div className="included-box excluded-box">

              <span>
                NOT INCLUDED
              </span>

              <h2>
                Please
                <strong>note</strong>
              </h2>

              <ul>
                {excluded.map((item, index) => (
                  <li key={index}>
                    <span>×</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="tour-details-cta">

        <div className="tour-details-cta-overlay"></div>

        <div className="container">

          <div className="tour-details-cta-content">

            <span>
              READY FOR RAJASTHAN?
            </span>

            <h2>
              Let's create
              <strong>your journey.</strong>
            </h2>

            <p>
              Love this itinerary? Tell us your travel dates and
              preferences and we'll personalize it for you.
            </p>

            <div className="tour-details-buttons">

              <Link
                to="/custom-trip"
                className="gold-btn"
              >
                Plan My Trip
              </Link>

              <Link
                to="/contact"
                className="outline-btn"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TourDetails;