import { Link } from "react-router-dom";
import "./ExperienceCard.css";

const ExperienceCard = ({
  image,
  icon,
  title,
  description,
}) => {
  return (
    <article className="experience-card">

      {/* Image */}
      <div className="experience-image">

        <img src={image} alt={title} />

        <div className="experience-overlay"></div>

        <div className="experience-icon">
          {icon}
        </div>

      </div>

      {/* Content */}
      <div className="experience-content">

        <span className="experience-number">
          EXPERIENCE
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          to="/experiences"
          className="experience-link"
        >
          Discover More
          <span>→</span>
        </Link>

      </div>

    </article>
  );
};

export default ExperienceCard;