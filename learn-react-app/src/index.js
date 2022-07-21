import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import HelloWorld from './HelloWorld.js';
import JSX from './JSX.js';
import FormatName from './FormatName';
import GetGreeting from './GetGreeting.js';
import Tick from './Tick';
import HelloSara from './HelloSara';
import Comment from './Comment';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <JSX /> 
    <FormatName />
    <GetGreeting />
    <Tick />
    <HelloSara />
    <Comment />
  </React.StrictMode>
);

reportWebVitals();


