import React from "react";

const JobCard = ({
  companyLogo,
  company,
  title,
  type,
  location,
  created_at,
}) => {
  return (
    <div>
      <div className="logo">
        <img src={companyLogo} alt="Company logo" height="90px" width="90px" />
      </div>
      <div className="position-info">
        <h5>{company}</h5>
        <h2>{title}</h2>

        <button>{type}</button>
      </div>

      <div className="application-info">
        <div className="location">{location}</div>

        <div className="created">{created_at}</div>
      </div>
    </div>
  );
};

export default JobCard;
