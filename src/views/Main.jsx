import React, { useState } from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";
import Filter from "../components/Filter/Filter";

import { store } from "../services/redux/store";

import { fetchJobs } from "../services/redux/slices/jobs/jobsSlice";

import "./main.scss";

const Main = () => {
  const [description, setDescription] = useState("");
  const [paginatedJobs, setPaginatedJobs] = useState([]);
  const [displayPaginationNumbers, setDisplayPaginationNumbers] = useState(
    true
  );
  const [location, setLocation] = useState("");

  const searchData = () => {
    store.dispatch(fetchJobs({ description }));
    setDisplayPaginationNumbers(true);
    setLocation("null");
  };

  return (
    <div>
      <div className="input-wrapper">
        <Input
          placeholder="Title, companies, expertise or benefits"
          icon="fas fa-briefcase"
          buttonText="Search"
          extraButtonClass="input-button"
          onButtonClick={searchData}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="search-input"
        />
      </div>

      <div className="main-wrapper">
        <Filter
          setPaginatedJobs={setPaginatedJobs}
          setDisplayPaginationNumbers={setDisplayPaginationNumbers}
          location={location}
          setLocation={setLocation}
        />
        <JobList
          paginatedJobs={paginatedJobs}
          setPaginatedJobs={setPaginatedJobs}
          displayPaginationNumbers={displayPaginationNumbers}
        />
      </div>
    </div>
  );
};

export default Main;
