import { Link } from "react-router-dom";
import "./DestinationCard.css";

const DestinationCard = ({
  image,
  name,
  description,
  places,
}) => {
  return (
    <article className="destination-card">

      {/* =========================
          IMAGE
      ========================= */}

      <div className="destination-image">

        <img
          src={image}
          alt={name}
        />

        <div className="destination-overlay"></div>


        {/* Destination Number */}

        <span className="destination-number">
          01
        </span>


        {/* Location */}

        <div className="destination-location">

          <span className="location-icon">
            ●
          </span>

          RAJASTHAN

        </div>


        {/* =========================
            CONTENT
        ========================= */}

        <div className="destination-content">

          <span className="destination-label">
            DISCOVER THE CITY
          </span>


          <h3>
            {name}
          </h3>


          <div className="destination-title-line"></div>


          <p>
            {description}
          </p>


          {/* Places */}

          {places && places.length > 0 && (
            <div className="destination-places">

              {places.map((place, index) => (
                <span key={index}>
                  {place}
                </span>
              ))}

            </div>
          )}


          {/* Explore */}

          <Link
            to="/destinations"
            className="destination-explore"
          >

            <span>
              Explore Destination
            </span>

            <strong>
              ↗
            </strong>

          </Link>

        </div>


        {/* Bottom line */}

        <div className="destination-bottom-line"></div>

      </div>

    </article>
  );
};

export default DestinationCard;