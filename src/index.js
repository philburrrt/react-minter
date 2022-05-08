import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './Background';
import MintApp from './MintApp/MintApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <MintApp />
  </React.StrictMode>
);
