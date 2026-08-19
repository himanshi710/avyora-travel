import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelers: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            destination: "",
            travelers: "",
            message: "",
        });
    };

    return (
        <main className="contact-page">

            {/* ================= HERO ================= */}

            <section className="contact-hero">

                <div className="contact-hero-glow glow-one"></div>
                <div className="contact-hero-glow glow-two"></div>

                <div className="contact-hero-content">

                    <div className="hero-mini-line">
                        <span></span>
                        AVYORA TRAVELS
                        <span></span>
                    </div>

                    <span className="contact-eyebrow">
                        ✦ LET'S CREATE SOMETHING UNFORGETTABLE ✦
                    </span>

                    <h1>
                        Start Your
                        <strong>Story.</strong>
                    </h1>

                    <p>
                        One conversation can become a journey filled with
                        royal palaces, golden deserts, hidden streets and
                        memories you'll carry forever.
                    </p>

                    <div className="hero-scroll">
                        <span>SCROLL TO CONNECT</span>
                        <b>↓</b>
                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="contact-intro section">

                <div className="container">

                    <div className="contact-intro-grid">

                        <div className="contact-intro-left">

                            <span className="section-kicker">
                                YOUR JOURNEY BEGINS HERE
                            </span>

                            <h2>
                                Tell us where
                                <span>your heart wants to go.</span>
                            </h2>

                        </div>

                        <div className="contact-intro-right">

                            <p>
                                Whether you dream of waking up inside a royal palace,
                                watching the sunset over the Thar Desert or discovering
                                the hidden soul of Rajasthan, we're here to make it happen.
                            </p>

                            <div className="intro-line">
                                <span></span>
                                <strong>PERSONALISED · PRIVATE · UNFORGETTABLE</strong>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT FORM ================= */}

            <section className="contact-booking section">

                <div className="container">

                    <div className="contact-booking-grid">

                        {/* LEFT */}

                        <div className="contact-side">

                            <div className="side-number">
                                01
                            </div>

                            <span className="section-kicker">
                                CONNECT WITH AVYORA
                            </span>

                            <h2>
                                Let's plan
                                <span>your Rajasthan.</span>
                            </h2>

                            <p>
                                Tell us a little about your dream trip.
                                Our travel specialists will create a journey
                                designed around your interests, pace and style.
                            </p>


                            <div className="contact-info-list">

                                <a
                                    href="tel:+919XXXXXXXXX"
                                    className="contact-info-item"
                                >

                                    <div className="info-icon">
                                        ↗
                                    </div>

                                    <div>
                                        <small>CALL OUR EXPERT</small>
                                        <strong>+91 9XXXXXXXXX</strong>
                                    </div>

                                </a>


                                <a
                                    href="mailto:hello@avyoratravels.com"
                                    className="contact-info-item"
                                >

                                    <div className="info-icon">
                                        @
                                    </div>

                                    <div>
                                        <small>WRITE TO US</small>
                                        <strong>hello@avyoratravels.com</strong>
                                    </div>

                                </a>


                                <div className="contact-info-item">

                                    <div className="info-icon">
                                        +
                                    </div>

                                    <div>
                                        <small>OUR BASE</small>
                                        <strong>Jaipur, Rajasthan</strong>
                                    </div>

                                </div>

                            </div>


                            <div className="contact-hours">

                                <div>
                                    <span>MON — SAT</span>
                                    <strong>10:00 AM — 7:00 PM</strong>
                                </div>

                                <div>
                                    <span>RESPONSE TIME</span>
                                    <strong>Within 24 Hours</strong>
                                </div>

                            </div>

                        </div>


                        {/* FORM */}

                        <div className="contact-form-card">

                            <div className="form-card-top">

                                <div>
                                    <span>02 / PLAN YOUR JOURNEY</span>

                                    <h3>
                                        Tell us
                                        <strong>everything.</strong>
                                    </h3>
                                </div>

                                <div className="form-symbol">
                                    ✦
                                </div>

                            </div>


                            {submitted && (
                                <div className="success-message">

                                    <div className="success-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <strong>Journey request received!</strong>
                                        <p>
                                            Thank you. Our travel expert will contact
                                            you shortly.
                                        </p>
                                    </div>

                                </div>
                            )}


                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                {/* NAME + EMAIL */}

                                <div className="form-row">

                                    <div className="form-field">

                                        <label>YOUR NAME</label>

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    <div className="form-field">

                                        <label>EMAIL ADDRESS</label>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>


                                {/* PHONE + DESTINATION */}

                                <div className="form-row">

                                    <div className="form-field">

                                        <label>PHONE NUMBER</label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    <div className="form-field">

                                        <label>DREAM DESTINATION</label>

                                        <select
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Choose a destination
                                            </option>

                                            <option value="Jaipur">
                                                Jaipur
                                            </option>

                                            <option value="Udaipur">
                                                Udaipur
                                            </option>

                                            <option value="Jodhpur">
                                                Jodhpur
                                            </option>

                                            <option value="Jaisalmer">
                                                Jaisalmer
                                            </option>

                                            <option value="Pushkar">
                                                Pushkar
                                            </option>

                                            <option value="Ranthambore">
                                                Ranthambore
                                            </option>

                                            <option value="Mount Abu">
                                                Mount Abu
                                            </option>

                                            <option value="Multiple Cities">
                                                Multiple Cities
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* TRAVELLERS */}

                                <div className="form-field">

                                    <label>WHO'S TRAVELLING?</label>

                                    <select
                                        name="travelers"
                                        value={formData.travelers}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select travellers
                                        </option>

                                        <option value="1-2">
                                            1 — 2 Travellers
                                        </option>

                                        <option value="3-5">
                                            3 — 5 Travellers
                                        </option>

                                        <option value="6-10">
                                            6 — 10 Travellers
                                        </option>

                                        <option value="10+">
                                            10+ Travellers
                                        </option>

                                    </select>

                                </div>


                                {/* MESSAGE */}

                                <div className="form-field">

                                    <label>YOUR VISION</label>

                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your dream trip, preferred dates, experiences, budget..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>

                                </div>


                                <button
                                    type="submit"
                                    className="contact-submit"
                                >

                                    <span>
                                        SEND MY JOURNEY REQUEST
                                    </span>

                                    <b>
                                        →
                                    </b>

                                </button>

                                <small className="form-security">
                                    ✦ Your information is used only to plan your journey.
                                </small>

                            </form>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WHY AVYORA ================= */}

            <section className="contact-benefits section">

                <div className="container">

                    <div className="benefits-header">

                        <div>

                            <span className="section-kicker">
                                WHY AVYORA
                            </span>

                            <h2>
                                Not just a booking.
                                <span>A relationship.</span>
                            </h2>

                        </div>

                        <p>
                            We believe the best journeys are personal.
                            That's why every Avyora trip begins with a conversation.
                        </p>

                    </div>


                    <div className="benefits-grid">

                        <article className="benefit-card">

                            <span>01</span>

                            <div className="benefit-icon">
                                ✦
                            </div>

                            <h3>
                                Local Knowledge
                            </h3>

                            <p>
                                Discover Rajasthan through people who know
                                its hidden corners, stories and soul.
                            </p>

                        </article>


                        <article className="benefit-card">

                            <span>02</span>

                            <div className="benefit-icon">
                                ◇
                            </div>

                            <h3>
                                Made Around You
                            </h3>

                            <p>
                                Your interests, your pace and your preferences
                                become the foundation of your itinerary.
                            </p>

                        </article>


                        <article className="benefit-card">

                            <span>03</span>

                            <div className="benefit-icon">
                                ♢
                            </div>

                            <h3>
                                Meaningful Experiences
                            </h3>

                            <p>
                                We go beyond sightseeing to create moments
                                you'll remember long after returning home.
                            </p>

                        </article>


                        <article className="benefit-card">

                            <span>04</span>

                            <div className="benefit-icon">
                                ∞
                            </div>

                            <h3>
                                We're With You
                            </h3>

                            <p>
                                From your first enquiry to the final day,
                                our team is always there when you need us.
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* ================= OFFICE ================= */}

            <section className="contact-office">

                <div className="office-image"></div>

                <div className="office-overlay"></div>

                <div className="container">

                    <div className="office-content">

                        <span>
                            ✦ FIND YOUR WAY TO US
                        </span>

                        <h2>
                            Meet us in
                            <strong>Jaipur.</strong>
                        </h2>

                        <p>
                            Our journey begins in Rajasthan's Pink City —
                            the perfect place to start planning your own story.
                        </p>

                        <div className="office-location">

                            <small>AVYORA TRAVELS</small>

                            <strong>
                                Jaipur, Rajasthan
                            </strong>

                            <span>
                                INDIA
                            </span>

                        </div>

                        <Link
                            to="/about"
                            className="office-btn"
                        >
                            DISCOVER AVYORA
                            <span>↗</span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="contact-final">

                <div className="final-glow"></div>

                <div className="container">

                    <div className="contact-final-content">

                        <span>
                            YOUR NEXT CHAPTER AWAITS
                        </span>

                        <h2>
                            Rajasthan is
                            <strong>calling.</strong>
                        </h2>

                        <p>
                            Don't just visit Rajasthan.
                            Experience it in a way that feels completely yours.
                        </p>

                        <div className="final-actions">

                            <Link
                                to="/custom-trip"
                                className="gold-btn"
                            >
                                CREATE MY JOURNEY
                                <span>→</span>
                            </Link>

                            <a
                                href="tel:+919XXXXXXXXX"
                                className="final-phone"
                            >
                                OR CALL OUR EXPERT
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Contact;