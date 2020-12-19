import React from "react";

import "./style.scss";

import Input from "../Input/Input";

const Filter = () => {
  return (
    <div className="filter-wrapper">
      <div className="checkbox">
        <input type="checkbox" name="type" id="job-type" />

        <label htmlFor="job-type" id="label">
          Full time
        </label>
      </div>

      <h2 id="location-label">Location</h2>
      <Input
        placeholder="City, state, zip code or country"
        icon="fas fa-globe-europe"
        id="location-input"
      />
      <div className="choices">
        <div className="choice">
          <input type="radio" name="location" id="london" value="london" />
          <label htmlFor="london">London</label>
        </div>

        <div className="choice">
          <input
            type="radio"
            name="location"
            id="amsterdam"
            value="amsterdam"
          />
          <label htmlFor="amsterdam">Amsterdam</label>
        </div>

        <div className="choice">
          <input type="radio" name="location" id="newyork" value="newyork" />
          <label htmlFor="newyork">New York</label>
        </div>

        <div className="choice">
          <input type="radio" name="location" id="berlin" value="berlin" />
          <label htmlFor="berlin">Berlin</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
