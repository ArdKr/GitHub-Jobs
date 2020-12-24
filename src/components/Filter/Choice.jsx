import React from "react";

const Choice = ({ onLocationUpdate, value, label }) => {
  return (
    <div className="choice">
      <input
        type="radio"
        name="location"
        onChange={onLocationUpdate}
        id={value}
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default Choice;
