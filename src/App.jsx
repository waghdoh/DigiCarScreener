import React from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store"; // adjust the path if necessary
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
