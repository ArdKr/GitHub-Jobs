import React from "react";

import JobList from "../components/JobList/JobList";
import Input from "../components/Input/Input";

const Main = () => {
  return (
    <div>
      <Input
        placeholder="Title, companies, expertise or benefits"
        icon="fas fa-briefcase"
      />
      <JobList />
    </div>
  );
};

export default Main;
