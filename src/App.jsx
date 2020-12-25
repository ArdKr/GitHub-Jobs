import React from "react";

// Styles
import "./index.scss";

import Main from "./views/Main";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Logo />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
