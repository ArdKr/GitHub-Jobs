import React from "react";

// Styles
import "./index.scss";

import Main from "./views/Main";
import Logo from "./components/Logo/Logo";

const App = () => {
  return (
    <div className="container">
      <Logo />
      <Main />
    </div>
  );
};

export default App;
