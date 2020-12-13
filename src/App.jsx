import React from "react";

// Styles
import "./index.scss";

import JobCard from "./components/JobCard/JobCard";

const App = () => {
  return (
    <div className="container">
      <h1>App</h1>
      <JobCard
        companyLogo="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg"
        company="Company nyme"
        title="Job Position Title m/w/a"
        type="Full time"
        location="Germany"
        created_at="5 days ago"
      />
    </div>
  );
};

export default App;
