import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App1 from './ReactRouter/App1';
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  {/* <App /> */}
  <App1 />
  </BrowserRouter>

);
