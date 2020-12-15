import React from "react";
import "./style.scss";

const JobCard = ({
  companyLogo,
  company,
  title,
  type,
  location,
  created_at,
}) => {
  created_at = created_at.split(" ");

  delete created_at[3];
  delete created_at[4];
  return (
    <div className="wrapper">
      <div className="position-info">
        <div className="logo">
          <img src={companyLogo} alt="not found" height="90px" width="90px" />
        </div>
        <div className="position-details">
          <h5>{company}</h5>
          <h2>{title}</h2>

          <button>{type}</button>
        </div>
      </div>

      <div className="application-info">
        <div className="location">
          <i className="fas fa-globe-europe"></i>
          {location}
        </div>

        <div className="created">
          <i className="far fa-clock"></i>
          {created_at.join(" ")}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
