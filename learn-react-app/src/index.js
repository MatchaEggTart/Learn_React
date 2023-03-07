import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HelloWorld from './HelloWorld';
import FormatName from './FormatName';
import GetGreeting from './GetGreeting';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelloWorld />
    <FormatName />
    <GetGreeting />
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Comment />
    <Clock />
  </React.StrictMode>
)

reportWebVitals();
