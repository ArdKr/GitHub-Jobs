import React from "react";
import { Link, useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
};

export default JobPage;
