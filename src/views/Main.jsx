import React, { useState } from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";
import Filter from "../components/Filter/Filter";

import { store } from "../services/redux/store";

import { fetchJobs } from "../services/redux/slices/jobs/jobsSlice";

import "./main.scss";

const Main = () => {
  const [description, setDescription] = useState("");

  const searchData = () => {
    store.dispatch(fetchJobs({ description }));
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
        <Filter />
        <JobList />
      </div>
    </div>
  );
};

export default Main;
