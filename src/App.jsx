import React from "react";

// Styles
import "./index.scss";

import JobList from "./components/JobList/JobList";

const App = () => {
  return (
    <div className="container">
      <h1>App</h1>
      <JobList />
    </div>
  );
};

export default App;
