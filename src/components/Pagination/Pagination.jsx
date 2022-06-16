import React from "react";
import "./Pagination.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="container-pagination">
      {prev ? (
        <button className="button-arrow" onClick={handlePrevious}>
          <ChevronLeftIcon className="arrow" />
        </button>
      ) : null}
      {next ? (
        <button className="button-arrow" onClick={handleNext}>
          <ChevronRightIcon />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
