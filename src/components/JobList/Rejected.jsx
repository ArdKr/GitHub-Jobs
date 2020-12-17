import React from "react";

const Rejected = () => {
  return (
    <div className="rejected">
      <h1>Upss! Something went wrong. Please check back later</h1>
      <h3>
        If this takes longer than 1 hour, please open an&nbsp;
        <a href="https://github.com/ArdKr/GitHub-Jobs/issues">issue</a> to
        inform us.
      </h3>
    </div>
  );
};

export default Rejected;
