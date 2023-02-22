import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HelloWorld from './HelloWorld';
import FormatName from './FormatName';
import GetGreeting from './GetGreeting';
import Timer01 from './Timer01';
import Timer02 from './Timer02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <FormatName />
    <GetGreeting />
    <Timer01 />
    <Timer02 />
  </React.StrictMode>
)

reportWebVitals();
