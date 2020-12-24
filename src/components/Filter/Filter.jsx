import React, { useState, useEffect } from "react";

import "./style.scss";

import Input from "../Input/Input";
import Choice from "./Choice";

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
        {[
          { value: "london", label: "London" },
          { value: "amsterdam", label: "Amsterdam" },
          { value: "newyork", label: "New York" },
          { value: "berlin", label: "Berlin" },
        ].map((choice) => {
          return (
            <Choice
              key={choice.value}
              value={choice.value}
              label={choice.label}
              onLocationUpdate={onLocationUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
