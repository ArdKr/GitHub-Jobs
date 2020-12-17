import React from "react";

import "./style.scss";

import Button from "../Button/Button";

const Input = ({
  placeholder,
  icon,
  id = "default",
  onChange = null,
  buttonText,
  extraButtonClass = "",
}) => {
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

  const ButtonComponent = () => {
    if (buttonText) {
      return <Button buttonText={buttonText} extraClass={extraButtonClass} />;
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

      <ButtonComponent />
    </div>
  );
};

export default Input;
