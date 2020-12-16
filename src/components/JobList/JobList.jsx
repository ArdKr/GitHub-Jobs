import React, { useState, useEffect } from "react";
import "./style.scss";

import JobCard from "../JobCard/JobCard";
import Pagination from "./Pagination";

import { useSelector } from "react-redux";
import { selectAllJobs } from "../../services/redux/slices/jobs/jobsSlice";

const JobList = () => {
  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState("1");
  const [pagesCount, setPagesCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [paginatedJobs, setPaginatedJobs] = useState([]);

  const jobsSelector = useSelector(selectAllJobs);

  // Load jobs into state when component mounts.
  useEffect(() => {
    setJobs(jobsSelector);

    setJobsCount(jobsSelector.length);

    setPagesCount(Math.floor(jobsSelector.length / jobsPerPage));
  }, [jobsSelector]);

  //
  useEffect(() => {
    const newJobList = [];

    const endCount = currentPage * jobsPerPage - 1;
    const startCount = endCount - (jobsPerPage - 1);

    for (let i = startCount; i <= endCount; i++) {
      newJobList.push(jobs[i]);
    }

    setPaginatedJobs(newJobList);
    setPagesCount(Math.floor(jobs.length / jobsPerPage));
    setJobsCount(jobs.length);
  }, [currentPage, jobs]);

  // Buttons to show
  const buttonsArray = Array.from({ length: pagesCount }, (v, i) => i);

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
                key={job.id}
              />
            );
          }
        })}
      </div>

      <Pagination
        pagesCount={pagesCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default JobList;
