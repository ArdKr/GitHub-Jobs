import React, { useState, useEffect } from "react";
import "./style.scss";

import JobCard from "../JobCard/JobCard";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Rejected from "./Rejected";

import { useSelector } from "react-redux";
import { selectAllJobs } from "../../services/redux/slices/jobs/jobsSlice";

import { paginate } from "../../paginator";

const JobList = ({
  paginatedJobs,
  setPaginatedJobs,
  displayPaginationNumbers,
}) => {
  // const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState("1");
  const [pagesCount, setPagesCount] = useState(0);
  const [jobs, setJobs] = useState([]);

  const jobsSelector = useSelector(selectAllJobs);
  const requestStatus = useSelector((state) => state.jobs.status);

  // Load jobs into state when component mounts.
  useEffect(() => {
    setJobs(jobsSelector);

    // setPagesCount(Math.floor(jobsSelector.length / jobsPerPage));
  }, [jobsSelector]);

  // Handle what jobs are displayed
  useEffect(() => {
    const { items: paginatedJobs, pages } = paginate(jobs, currentPage);

    setPaginatedJobs(paginatedJobs);
    setPagesCount(pages);
  }, [currentPage, jobs, setPaginatedJobs]);

  if (requestStatus === "loading") {
    return <Loading />;
  }

  if (requestStatus === "rejected") {
    return <Rejected />;
  }

  if (paginatedJobs.length === 0 || jobs.length === 0) {
    return <h1 className="no-result">No results</h1>;
  }

  const PaginationButtons = () => {
    if (displayPaginationNumbers) {
      return (
        <Pagination
          pagesCount={pagesCount}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      );
    }

    return null;
  };

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

          return null;
        })}
      </div>

      <PaginationButtons />
    </div>
  );
};

export default JobList;
