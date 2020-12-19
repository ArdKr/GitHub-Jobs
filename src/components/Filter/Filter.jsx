import React from "react";

import "./style.scss";

import Input from "../Input/Input";

const Filter = () => {
  return (
    <div className="filter-wrapper">
      <input type="checkbox" name="type" id="job-type" /> Full time
      <h2>Location</h2>
      <Input
        placeholder="City, state, zip code or country"
        icon="fas fa-globe-europe"
      />
      <div className="choices">
        <div className="choice">
          <input type="radio" name="location" id="london" value="london" />
          <label htmlFor="job-location">London</label>
        </div>

        <div className="choice">
          <input
            type="radio"
            name="location"
            id="amsterdam"
            value="amsterdam"
          />
          <label htmlFor="job-location">Amsterdam</label>
        </div>

        <div className="choice">
          <input type="radio" name="location" id="newyork" value="newyork" />
          <label htmlFor="job-location">New York</label>
        </div>

        <div className="choice">
          <input type="radio" name="location" id="berlin" value="berlin" />
          <label htmlFor="job-location">Berlin</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
