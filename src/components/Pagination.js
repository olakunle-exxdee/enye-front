import React from "react";

const Pagination = ({ postPerPage, totalPages, perPage }) => {
  let pageNumber = [];
  for (let index = 1; index <= Math.ceil(totalPages / postPerPage); index++) {
    pageNumber.push(index);
  }

  return (
    <div className="pagination">
      <nav className="">
        <ul className="">
          {pageNumber.map((page) => {
            return (
              <li key={page} className="page-item">
                <p onClick={() => perPage(page)} className="">
                  {page}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
