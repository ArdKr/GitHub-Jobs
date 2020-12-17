import React from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";

const Main = () => {
  return (
    <div>
      <Input
        placeholder="Title, companies, expertise or benefits"
        icon="fas fa-briefcase"
        buttonText="Search"
        extraButtonClass="input-button"
      />
      <JobList />
    </div>
  );
};

export default Main;
