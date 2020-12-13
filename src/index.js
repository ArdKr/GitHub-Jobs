import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Components
import App from "./App.jsx";

// Redux store
import { store } from "./services/redux/store";

// Redux thunk
import { fetchJobs } from "./services/redux/slices/jobs/jobsSlice";

// Fetch jobs when page loads
// store.dispatch(fetchJobs());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
