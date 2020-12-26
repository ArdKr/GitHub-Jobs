import React from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectJobById } from "../services/redux/slices/jobs/jobsSlice";

import Loading from "../components/JobList/Loading";

import "./jobpage.scss";

const JobPage = () => {
  const { id } = useParams();

  const job = useSelector((state) => selectJobById(state, id));

  const HowTo = () => {
    return (
      <div
        className="how-to-apply"
        dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
      />
    );
  };
  // TODO: fix footer appearing in mid page
  const Description = () => {
    return (
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: job.description }}
      ></div>
    );
  };

  if (job === undefined) {
    return <Loading />;
  }

  return (
    <div className="jobpage-wrapper">
      <div className="howto-wrapper">
        <Link to="/" className="back-to-search">
          &larr;&nbsp;&nbsp; Back to search
        </Link>

        <h2 className="label">How to apply</h2>
        <HowTo />
      </div>

      <div className="job-wrapper">
        <h2>{job.title}</h2>

        <button className="transparent-button" style={{ marginTop: "5px" }}>
          {job.type}
        </button>

        <div className="gray-label">
          <i className="far fa-clock"></i>
          {job.created_at.split(" ").join(" ")}
        </div>

        <div className="company-info">
          <div className="flex">
            <div className="logo">
              <img
                src={job.company_logo}
                alt="Company logo"
                height="42px"
                width="42px"
              />
            </div>

            <div className="info">
              <p>{job.company}</p>
              <div className="gray-label">
                <i className="fas fa-globe-europe"></i>
                {job.location}
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
