import React from "react";

const Pagination = ({ pagesCount, setCurrentPage, currentPage }) => {
  currentPage = Number(currentPage);

  // Return page numbers that have to be displayed
  const buttons = () => {
    let buttonArray = [];

    // Push the current page into the array
    buttonArray.push(currentPage);

    // If currentPage is larger than 1 (ex. 2) then push (ex. 1) into the array
    if (currentPage > 1) {
      buttonArray.unshift(currentPage - 1);
    }

    // If currentPage is smaller than the total page numbers then push currentPage + 1 into array (ex. currentPage is 4 then push 5)
    if (currentPage < pagesCount) {
      buttonArray.push(currentPage + 1);
    }

    // If buttonArray doesn't have the total page count (last page) push it to array
    if (!buttonArray.includes(pagesCount)) {
      buttonArray.push(pagesCount);
    }

    // Handle the tree dots in the pagination
    if (currentPage < pagesCount - 1) {
      buttonArray.pop();
      buttonArray.push("dots");
      buttonArray.push(pagesCount);
    }

    buttonArray = buttonArray.filter((element) => {
      return element !== 0;
    });

    return buttonArray;
  };

  return (
    <div className="pagination-buttons">
      <button
        onClick={(e) => {
          setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage < 2 && "disabled"}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {buttons().map((pageNumber) => {
        if (pageNumber === "dots") {
          return (
            <i key={pageNumber} className="fas fa-ellipsis-h" id="dots"></i>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={(e) => {
              setCurrentPage(e.target.textContent);
            }}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={(e) => {
          setCurrentPage(currentPage + 1);
        }}
        disabled={
          (currentPage === pagesCount && "disabled") ||
          (currentPage + 1 > pagesCount && "disabled")
        }
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
