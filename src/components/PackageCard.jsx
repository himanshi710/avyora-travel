import { Link } from "react-router-dom";
import "./PackageCard.css";

const PackageCard = ({
  image,
  duration,
  title,
  location,
  description,
  price,
  tag,
}) => {
  return (
    <article className="package-card">

      {/* =========================
          IMAGE
      ========================= */}

      <div className="package-image">

        <img
          src={image}
          alt={title}
        />

        <div className="package-image-overlay"></div>


        {/* Package Number */}

        <span className="package-number">
          01
        </span>


        {/* Tag */}

        {tag && (
          <span className="package-tag">
            {tag}
          </span>
        )}


        {/* Duration */}

        <div className="package-duration">

          <span>
            DURATION
          </span>

          <strong>
            {duration}
          </strong>

        </div>


        {/* Image Bottom Location */}

        <div className="package-image-location">

          <span className="location-pin">
            ●
          </span>

          {location}

        </div>

      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="package-content">

        <div className="package-top">

          <span className="package-location">
            RAJASTHAN · {location}
          </span>

          <span className="package-line"></span>

        </div>


        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


        {/* =========================
            BOTTOM
        ========================= */}

        <div className="package-bottom">


          {/* Price */}

          <div className="package-price">

            <small>
              STARTING FROM
            </small>

            <div>

              <strong>
                {price}
              </strong>

              <span>
                / person
              </span>

            </div>

          </div>


          {/* Link */}

          <Link
            to="/tour-details"
            className="package-link"
          >

            <span>
              Explore Tour
            </span>

            <strong>
              ↗
            </strong>

          </Link>

        </div>

      </div>

    </article>
  );
};

export default PackageCard;