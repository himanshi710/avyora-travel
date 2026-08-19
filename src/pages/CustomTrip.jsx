import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomTrip.css";

const CustomTrip = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    travelDate: "",
    duration: "",
    travelStyle: "",
    budget: "",
    destinations: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const travelStyles = [
    "Royal & Luxury",
    "Romantic Escape",
    "Family Holiday",
    "Desert Adventure",
    "Culture & Heritage",
    "Wildlife Safari",
    "Photography Journey",
    "Relaxed Vacation",
  ];

  return (
    <main className="custom-page">

      {/* HERO */}
      <section className="custom-hero">

        <div className="custom-hero-bg"></div>
        <div className="custom-hero-overlay"></div>

        <div className="custom-hero-decoration">
          <span>AVYORA</span>
        </div>

        <div className="container custom-hero-container">

          <div className="custom-hero-content">

            <div className="custom-eyebrow">
              <i></i>
              BESPOKE RAJASTHAN JOURNEYS
              <i></i>
            </div>

            <h1>
              Your Rajasthan.
              <span>Your Story.</span>
            </h1>

            <p>
              Tell us what you imagine. We'll turn it into a
              beautifully planned journey through the Land of Kings.
            </p>

            <div className="hero-scroll">
              <span>SCROLL</span>
              <b></b>
            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="custom-intro">

        <div className="container">

          <div className="custom-intro-grid">

            <div className="custom-intro-left">

              <span className="section-kicker">
                YOUR JOURNEY
              </span>

              <h2>
                Don't choose
                <span>a package.</span>
              </h2>

              <div className="gold-line"></div>

            </div>

            <div className="custom-intro-right">

              <p>
                Your travel style is unique. Maybe you want to wake
                up inside a palace, chase sunsets across the Thar,
                explore hidden villages or simply slow down beside
                a beautiful lake.
              </p>

              <p>
                Avyora Travels creates journeys around <strong>you</strong> —
                your interests, your pace and your idea of the perfect
                Rajasthan holiday.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* MAIN PLANNER */}
      <section className="planner-section">

        <div className="container">

          <div className="planner-header">

            <div>
              <span className="section-kicker">
                AVYORA JOURNEY BUILDER
              </span>

              <h2>
                Let's design
                <span>your escape.</span>
              </h2>
            </div>

            <div className="planner-number">
              <span>01</span>
              <small>/ YOUR DETAILS</small>
            </div>

          </div>


          <div className="planner-layout">

            {/* LEFT SIDE */}
            <aside className="planner-sidebar">

              <div className="side-card active">
                <span>01</span>
                <div>
                  <strong>Your Details</strong>
                  <small>Tell us about yourself</small>
                </div>
              </div>

              <div className="side-card">
                <span>02</span>
                <div>
                  <strong>Trip Vision</strong>
                  <small>What are you dreaming of?</small>
                </div>
              </div>

              <div className="side-card">
                <span>03</span>
                <div>
                  <strong>Our Design</strong>
                  <small>We create your itinerary</small>
                </div>
              </div>

              <div className="sidebar-quote">
                <span>“</span>
                <p>
                  Rajasthan is not just a destination.
                  It's a feeling waiting to become a memory.
                </p>
                <small>— AVYORA TRAVELS</small>
              </div>

            </aside>


            {/* FORM */}
            <div className="planner-form-box">

              {submitted ? (
                <div className="success-message">

                  <div className="success-icon">
                    ✓
                  </div>

                  <span>REQUEST RECEIVED</span>

                  <h3>
                    Your journey
                    <strong>starts here.</strong>
                  </h3>

                  <p>
                    Thank you for choosing Avyora Travels.
                    Our travel expert will review your details
                    and connect with you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="outline-btn"
                  >
                    Edit My Request
                  </button>

                </div>
              ) : (

                <form
                  className="custom-form"
                  onSubmit={handleSubmit}
                >

                  {/* PERSONAL DETAILS */}
                  <div className="form-section-title">
                    <span>01</span>
                    <div>
                      <small>LET'S BEGIN</small>
                      <h3>About You</h3>
                    </div>
                  </div>


                  <div className="input-grid">

                    <div className="input-group">

                      <label>Your Name *</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />

                    </div>


                    <div className="input-group">

                      <label>Email Address *</label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                    </div>


                    <div className="input-group">

                      <label>Phone Number *</label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />

                    </div>


                    <div className="input-group">

                      <label>Travellers *</label>

                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select travellers
                        </option>
                        <option>1 Traveller</option>
                        <option>2 Travellers</option>
                        <option>3 - 5 Travellers</option>
                        <option>6 - 10 Travellers</option>
                        <option>10+ Travellers</option>
                      </select>

                    </div>

                  </div>


                  {/* TRIP DETAILS */}
                  <div className="form-section-title form-space">

                    <span>02</span>

                    <div>
                      <small>THE IMPORTANT PART</small>
                      <h3>Your Trip</h3>
                    </div>

                  </div>


                  <div className="input-grid">

                    <div className="input-group">

                      <label>Travel Date</label>

                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />

                    </div>


                    <div className="input-group">

                      <label>Trip Duration</label>

                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select duration
                        </option>
                        <option>3 - 4 Days</option>
                        <option>5 - 6 Days</option>
                        <option>7 - 9 Days</option>
                        <option>10 - 14 Days</option>
                        <option>15+ Days</option>
                      </select>

                    </div>


                    <div className="input-group">

                      <label>Travel Style</label>

                      <select
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleChange}
                      >
                        <option value="">
                          Choose your style
                        </option>

                        {travelStyles.map((style) => (
                          <option key={style} value={style}>
                            {style}
                          </option>
                        ))}
                      </select>

                    </div>


                    <div className="input-group">

                      <label>Approx. Budget</label>

                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select budget
                        </option>
                        <option>Under ₹50,000</option>
                        <option>₹50,000 - ₹1 Lakh</option>
                        <option>₹1 - ₹2 Lakhs</option>
                        <option>₹2 - ₹5 Lakhs</option>
                        <option>₹5 Lakhs+</option>
                      </select>

                    </div>

                  </div>


                  {/* DESTINATION */}
                  <div className="input-group full-input">

                    <label>
                      Places You'd Love To Explore
                    </label>

                    <input
                      type="text"
                      name="destinations"
                      value={formData.destinations}
                      onChange={handleChange}
                      placeholder="Jaipur, Udaipur, Jaisalmer..."
                    />

                  </div>


                  {/* MESSAGE */}
                  <div className="input-group full-input">

                    <label>
                      Tell Us Your Dream
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us what you want to experience in Rajasthan..."
                    ></textarea>

                  </div>


                  <div className="form-bottom">

                    <div className="privacy-note">
                      <span>✦</span>
                      <p>
                        Your information is safe with us.
                        We'll only use it to plan your journey.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="submit-btn"
                    >
                      <span>CREATE MY JOURNEY</span>
                      <b>→</b>
                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* INSPIRATION */}
      <section className="custom-inspiration">

        <div className="container">

          <div className="inspiration-heading">

            <div>
              <span className="section-kicker">
                NEED INSPIRATION?
              </span>

              <h2>
                Imagine your
                <span>Rajasthan.</span>
              </h2>
            </div>

            <Link to="/tours" className="text-link">
              Explore Tours →
            </Link>

          </div>


          <div className="inspiration-grid">

            <Link to="/luxury" className="inspiration-card">

              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41"
                alt="Royal Rajasthan"
              />

              <div className="inspiration-overlay"></div>

              <div className="inspiration-content">

                <span>01 / ROYAL</span>

                <h3>
                  Sleep inside
                  <strong>history.</strong>
                </h3>

              </div>

            </Link>


            <Link to="/experiences" className="inspiration-card">

              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
                alt="Thar Desert"
              />

              <div className="inspiration-overlay"></div>

              <div className="inspiration-content">

                <span>02 / ADVENTURE</span>

                <h3>
                  Chase the
                  <strong>desert sunset.</strong>
                </h3>

              </div>

            </Link>


            <Link to="/destinations" className="inspiration-card">

              <img
                src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33"
                alt="Udaipur Rajasthan"
              />

              <div className="inspiration-overlay"></div>

              <div className="inspiration-content">

                <span>03 / ROMANCE</span>

                <h3>
                  Fall in love
                  <strong>with Udaipur.</strong>
                </h3>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="custom-final">

        <div className="custom-final-bg"></div>

        <div className="custom-final-overlay"></div>

        <div className="container">

          <div className="custom-final-content">

            <span>THE LAND OF KINGS IS CALLING</span>

            <h2>
              Let's make it
              <strong>unforgettable.</strong>
            </h2>

            <p>
              Your dates. Your people. Your way of travelling.
              One beautifully crafted Rajasthan journey.
            </p>

            <a href="#top" className="gold-btn">
              Begin My Journey ↑
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CustomTrip;