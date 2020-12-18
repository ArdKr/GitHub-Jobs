import React, { useState } from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";

import { store } from "../services/redux/store";

import { fetchJobs } from "../services/redux/slices/jobs/jobsSlice";

const Main = () => {
  const [description, setDescription] = useState("");

  const searchData = () => {
    store.dispatch(fetchJobs({ description }));
  };

  return (
    <div>
      <Input
        placeholder="Title, companies, expertise or benefits"
        icon="fas fa-briefcase"
        buttonText="Search"
        extraButtonClass="input-button"
        onButtonClick={searchData}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <JobList />
    </div>
  );
};

export default Main;
