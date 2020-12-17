import React from "react";

import "./style.scss";

const Input = ({ placeholder, icon, id = "default", onChange = null }) => {
  const Icon = () => {
    if (icon) {
      return (
        <React.Fragment>
          <i className={icon}></i>
        </React.Fragment>
      );
    }

    return null;
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />

      <Icon />
    </div>
  );
};

export default Input;
