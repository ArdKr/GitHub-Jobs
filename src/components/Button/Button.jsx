import React from "react";

import "./style.scss";

const Button = ({ buttonText, onClick = null, extraClass = "" }) => {
  return (
    <React.Fragment>
      <button className={"button " + extraClass} onClick={onClick}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
