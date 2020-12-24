import React, { useState, useEffect } from "react";

import "./style.scss";

import Input from "../Input/Input";

import { useSelector } from "react-redux";
import { selectAllJobs } from "../../services/redux/slices/jobs/jobsSlice";

import { paginate } from "../../paginator";

const Filter = ({
  setPaginatedJobs,
  setDisplayPaginationNumbers,
  location,
  setLocation,
}) => {
  const [fullTime, setFullTime] = useState(false);

  const jobs = useSelector(selectAllJobs);

  const onLocationUpdate = (e) => {
    setLocation(e.target.value.toLowerCase());
  };

  const onJobTypeUpdate = (e) => {
    if (fullTime !== "true") {
      setFullTime("true");
    } else {
      setFullTime(false);
    }
  };

  useEffect(() => {
    let newData = [];
    // If location changed
    if (location) {
      const newJobList = jobs.filter((job) => {
        return job.location.toLowerCase().includes(location);
      });

      newData = [...newData, ...newJobList];
    }

    // If fulltime status changed
    if (fullTime === "true") {
      if (newData.length === 0) {
        newData = [...jobs];
      }

      const newJobList = newData.filter((job) => {
        return job.type.toLowerCase().includes("full time");
      });

      newData = [...newJobList];
    }

    // If any filter option changed
    // then display new results
    // ! IGNORE THE DUMB SOLUTION FOR A PROBLEM I WAS HAVING
    if ((location !== "null" && location !== "") || fullTime === "true") {
      setPaginatedJobs(newData);
      setDisplayPaginationNumbers(false);

      return;
    }

    // if no option changed or they are empty (default state) then display all jobs
    setDisplayPaginationNumbers(true);
    setPaginatedJobs(paginate(jobs, 1).items);
  }, [location, fullTime, jobs, setPaginatedJobs, setDisplayPaginationNumbers]);

  return (
    <div className="filter-wrapper">
      <div className="checkbox">
        <input
          type="checkbox"
          name="type"
          id="job-type"
          onChange={onJobTypeUpdate}
        />

        <label htmlFor="job-type" id="label">
          Full time
        </label>
      </div>

      <h2 id="location-label">Location</h2>
      <Input
        placeholder="City, state, zip code or country"
        icon="fas fa-globe-europe"
        id="location-input"
        onChange={onLocationUpdate}
      />
      <div className="choices">
        <div className="choice">
          <input
            type="radio"
            name="location"
            onChange={onLocationUpdate}
            id="london"
            value="london"
          />
          <label htmlFor="london">London</label>
        </div>

        <div className="choice">
          <input
            type="radio"
            name="location"
            id="amsterdam"
            value="amsterdam"
            onChange={onLocationUpdate}
          />
          <label htmlFor="amsterdam">Amsterdam</label>
        </div>

        <div className="choice">
          <input
            type="radio"
            name="location"
            onChange={onLocationUpdate}
            id="newyork"
            value="new york"
          />
          <label htmlFor="newyork">New York</label>
        </div>

        <div className="choice">
          <input
            type="radio"
            name="location"
            onChange={onLocationUpdate}
            id="berlin"
            value="berlin"
          />
          <label htmlFor="berlin">Berlin</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
