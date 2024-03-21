import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importing react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing reactjs-popup css
import 'reactjs-popup/dist/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
