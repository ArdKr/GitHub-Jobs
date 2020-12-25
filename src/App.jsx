import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "./index.scss";

// Views
import Main from "./views/Main";
import JobPage from "./views/JobPage";

// Components
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Logo />
        <Switch>
          <Route path="/:id">
            <JobPage />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
