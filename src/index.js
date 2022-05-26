import React from "react";
import ReactDOM from "react-dom/client";

/***** 리덕스 모듈 테스트 파일 ******/
//  import App from './Test_loadTour';
//  import App from './Test_petTravel';
//  import App from './Test1';

import App from './App';
import Meta from './Meta';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Meta/>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
