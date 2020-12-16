import React from "react";

const Pagination = ({ pagesCount, setCurrentPage, currentPage }) => {
  return (
    <div className="pagination-buttons">
      {Array.from({ length: pagesCount }, (v, i) => i).map((i) => {
        return (
          <button
            key={i}
            onClick={(e) => {
              setCurrentPage(e.target.textContent);
            }}
            className={currentPage === String(i + 1) ? "active" : ""}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
