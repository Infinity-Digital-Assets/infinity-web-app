import React from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="countdown">
      <div className="pcountdown">
        <p>{value}</p>
      </div>
      <div className="tcountdown">
        <span>{type}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
