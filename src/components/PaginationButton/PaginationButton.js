//React
import React from "react";
//styles
import "./style.css";

const PaginationButton = ({ action, text }) => {
  return (
    <div
      onClick={action}
      className={`posts-pagination-button posts-pagination-button-active`}
    >
      {text}
    </div>
  );
};

export default PaginationButton;
