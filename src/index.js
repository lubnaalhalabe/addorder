import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router }  from "react-router-dom"
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
   
    </Router>
    
  </React.StrictMode> ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
