import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path if necessary
import './index.css'; // Adjust the path if necessary
import './styles/global.css';


const container = document.getElementById('root'); // Make sure 'root' exists in your index.html
const root = createRoot(container); // Use createRoot API




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
