import { Link } from "react-router-dom";
import "./TravelGuide.css";

const TravelGuide = () => {
  const guides = [
    {
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      category: "RAJASTHAN 101",
      title: "Your First Rajasthan Journey",
      text: "A practical starting point for discovering forts, palaces, deserts, food and culture.",
      read: "8 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      category: "ROYAL HERITAGE",
      title: "Forts, Palaces & Royal Stories",
      text: "Explore the magnificent architecture and stories that shaped the Land of Kings.",
      read: "7 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      category: "THAR DESERT",
      title: "How To Experience Jaisalmer",
      text: "Desert camps, golden dunes, camel rides and unforgettable evenings under the stars.",
      read: "6 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada",
      category: "UDAIPUR",
      title: "48 Hours In The City Of Lakes",
      text: "A beautifully paced guide to lakes, palaces, sunsets and romantic experiences.",
      read: "5 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      category: "JAIPUR",
      title: "Discover The Soul Of Jaipur",
      text: "Go beyond the obvious and discover markets, architecture, food and local culture.",
      read: "7 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      category: "WILDLIFE",
      title: "Ranthambore Safari Essentials",
      text: "Everything you need to know before planning your wildlife escape.",
      read: "6 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
      category: "JODHPUR",
      title: "The Blue City Uncovered",
      text: "Discover Mehrangarh, blue lanes, local food and the quieter side of Jodhpur.",
      read: "6 MIN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358",
      category: "PUSHKAR",
      title: "A Slow Day In Pushkar",
      text: "Temples, lake walks, colourful streets and peaceful moments in Pushkar.",
      read: "5 MIN",
    },
  ];

  const tips = [
    {
      number: "01",
      icon: "◈",
      title: "Choose Your Season",
      text: "October to March is generally comfortable for exploring Rajasthan.",
    },
    {
      number: "02",
      icon: "✦",
      title: "Pack Light",
      text: "Comfortable clothes, walking shoes, sunglasses and sunscreen are essentials.",
    },
    {
      number: "03",
      icon: "◇",
      title: "Travel By Road",
      text: "A private car with a driver makes multi-city Rajasthan journeys easy.",
    },
    {
      number: "04",
      icon: "✧",
      title: "Leave Some Space",
      text: "Don't over-plan every hour. Rajasthan is best enjoyed at a relaxed pace.",
    },
    {
      number: "05",
      icon: "◉",
      title: "Try Local Food",
      text: "Make time for dal baati churma, laal maas, kachori and traditional sweets.",
    },
    {
      number: "06",
      icon: "♢",
      title: "Go Beyond Cities",
      text: "Add villages, desert camps and local experiences to see another side of Rajasthan.",
    },
  ];

  return (
    <main className="travel-guide-page">

      {/* HERO */}
      <section className="guide-hero">

        <div className="guide-hero-image"></div>
        <div className="guide-hero-overlay"></div>

        <div className="container">

          <div className="guide-hero-content">

            <div className="guide-eyebrow">
              <span></span>
              THE AVYORA JOURNAL
              <span></span>
            </div>

            <h1>
              Rajasthan
              <strong>Uncovered.</strong>
            </h1>

            <p>
              Stories, ideas and insider inspiration for discovering
              Rajasthan beyond the ordinary.
            </p>

            <div className="guide-hero-actions">
              <Link to="/tours" className="gold-btn">
                Explore Tours
              </Link>

              <Link to="/custom-trip" className="guide-outline-btn">
                Plan My Journey
              </Link>
            </div>

          </div>

        </div>

        <div className="guide-scroll">
          <span></span>
          SCROLL TO DISCOVER
        </div>

      </section>


      {/* INTRO */}
      <section className="guide-intro section">

        <div className="container">

          <div className="guide-intro-grid">

            <div className="guide-intro-title">

              <span className="guide-label">
                THE ART OF TRAVEL
              </span>

              <h2>
                Don't just
                <em>visit.</em>
                <span>Understand.</span>
              </h2>

            </div>

            <div className="guide-intro-text">

              <p>
                Rajasthan is not a destination you simply tick off
                a list. It is a collection of stories, flavours,
                colours, landscapes and people.
              </p>

              <p>
                Our journal helps you travel with more curiosity —
                knowing where to go, what to experience and when
                to slow down.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURED */}
      <section className="guide-featured section">

        <div className="container">

          <div className="featured-guide">

            <div className="featured-guide-image">

              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245"
                alt="Rajasthan"
              />

              <div className="featured-stamp">
                <span>AVYORA</span>
                <strong>01</strong>
              </div>

            </div>

            <div className="featured-guide-content">

              <span className="featured-label">
                EDITOR'S PICK
              </span>

              <h2>
                The art of
                <strong>travelling Rajasthan.</strong>
              </h2>

              <p>
                From Jaipur's royal avenues to Jaisalmer's silent
                dunes, discover how to design a Rajasthan journey
                that feels personal, effortless and unforgettable.
              </p>

              <div className="featured-meta">
                <span>12 MIN READ</span>
                <span>RAJASTHAN</span>
                <span>AVYORA JOURNAL</span>
              </div>

              <Link to="/tours" className="text-link">
                Start Exploring
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ARTICLES */}
      <section className="guide-articles section section-dark">

        <div className="container">

          <div className="guide-heading">

            <div>
              <span className="guide-label">
                TRAVEL STORIES
              </span>

              <h2>
                Read.
                <span>Dream.</span>
                Travel.
              </h2>
            </div>

            <p>
              Inspiration for your next Rajasthan adventure.
            </p>

          </div>


          <div className="guide-grid">

            {guides.map((guide, index) => (

              <article className="guide-card" key={index}>

                <div className="guide-card-image">

                  <img
                    src={guide.image}
                    alt={guide.title}
                  />

                  <span className="guide-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="guide-card-category">
                    {guide.category}
                  </span>

                </div>

                <div className="guide-card-content">

                  <div className="guide-card-top">
                    <span>{guide.read} READ</span>
                  </div>

                  <h3>{guide.title}</h3>

                  <p>{guide.text}</p>

                  <Link to="/contact" className="guide-read-link">
                    READ STORY
                    <span>→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* QUICK TIPS */}
      <section className="guide-tips section">

        <div className="container">

          <div className="guide-tips-header">

            <div>
              <span className="guide-label">
                AVYORA INSIDER
              </span>

              <h2>
                Know before
                <span>you go.</span>
              </h2>
            </div>

            <p>
              Small details can make a big difference to your
              Rajasthan experience.
            </p>

          </div>


          <div className="tips-grid">

            {tips.map((tip) => (

              <div className="tip-card" key={tip.number}>

                <div className="tip-top">

                  <span className="tip-number">
                    {tip.number}
                  </span>

                  <span className="tip-icon">
                    {tip.icon}
                  </span>

                </div>

                <h3>{tip.title}</h3>

                <p>{tip.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* QUOTE */}
      <section className="guide-quote">

        <div className="guide-quote-overlay"></div>

        <div className="container">

          <div className="guide-quote-content">

            <span>THE AVYORA WAY</span>

            <blockquote>
              “The best journeys are not measured
              <strong>in kilometres, but in memories.</strong>”
            </blockquote>

            <div className="quote-divider"></div>

            <p>
              Let Rajasthan surprise you.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="guide-cta section">

        <div className="container">

          <div className="guide-cta-box">

            <div className="cta-number">
              08
            </div>

            <div className="guide-cta-content">

              <span>
                READY TO TURN THE PAGE?
              </span>

              <h2>
                Your Rajasthan
                <strong>story starts here.</strong>
              </h2>

              <p>
                Tell us what you want to experience and we'll
                turn the inspiration into a personalised journey.
              </p>

            </div>

            <Link to="/custom-trip" className="gold-btn">
              Create My Journey
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TravelGuide;