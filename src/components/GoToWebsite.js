import React from "react";

const GoToWebsite = ({ website }) => {
  return (
    <button
      style={{ color: "black" }}
      onClick={() => window.open(`${website}`)}
    >
      Go To Website
    </button>
  );
};

export default GoToWebsite;
