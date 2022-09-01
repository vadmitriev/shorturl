import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "src/styles/App.scss";
import "antd/dist/antd.min.css";

import Router from "./routes";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
