import React from "react";

const ExperienceCard = ({
  company,
  title,
  logoSrc,
  dates,
  location,
  bulletPoints,
}) => {
  return (
    <section className="experience-card">
      <div className="topline">
        <div className="logo-frame">
          <img src={logoSrc} />
        </div>
        <div className="topline-text">
          <h3>
            {title} | {company}
          </h3>
          <p>{location}</p>
          <p>{dates}</p>
        </div>
      </div>
      <ul>
        {(bulletPoints || []).map((bullet, i) => (
          <li key={i} className="experience-bullet">
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceCard;
