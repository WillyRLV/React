import React from 'react';
import ReactDOM from 'react-dom';
//para impórtar bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import PrimerComponente from './App';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <PrimerComponente /> */}
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
