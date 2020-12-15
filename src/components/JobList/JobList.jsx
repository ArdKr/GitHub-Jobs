import React, { useState, useEffect } from "react";
import "./style.scss";

import JobCard from "../JobCard/JobCard";

import { useSelector } from "react-redux";
import { selectAllJobs } from "../../services/redux/slices/jobs/jobsSlice";

const JobList = () => {
  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [paginatedJobs, setPaginatedJobs] = useState([]);

  const jobsSelector = useSelector(selectAllJobs);

  useEffect(() => {
    setJobs(jobsSelector);

    setJobsCount(jobsSelector.length);

    setPagesCount(Math.floor(jobsSelector.length / jobsPerPage));
  }, [jobsSelector]);

  useEffect(() => {
    const newJobList = [];

    const endCount = currentPage * jobsPerPage - 1;
    const startCount = endCount - (jobsPerPage - 1);

    for (let i = startCount; i <= endCount; i++) {
      newJobList.push(jobs[i]);
    }

    setPaginatedJobs(newJobList);
  }, [currentPage, jobs]);

  return (
    <div className="joblist-wrapper">
      <div>
        {paginatedJobs.map((job) => {
          if (job) {
            return (
              <JobCard
                companyLogo={job.company_logo}
                company={job.company}
                title={job.title}
                type={job.type}
                location={job.location}
                created_at={job.created_at}
              />
            );
          }
        })}
      </div>

      <div className="pagination-buttons">
        {Array.from({ length: pagesCount }, (v, i) => i).map((i) => {
          return (
            <button
              onClick={(e) => {
                setCurrentPage(e.target.textContent);
              }}
              key={i}
              className={currentPage === String(i +1) && "active"}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default JobList;
