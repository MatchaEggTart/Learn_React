import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HelloWorld from './HelloWorld';
import FormatName from './FormatName';
import GetGreeting from './GetGreeting';
import Timer01 from './Timer01';
import Timer02 from './Timer02';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <FormatName />
    <GetGreeting />
    <Timer01 />
    <Timer02 />
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
    <Clock date={new Date()} />
  </React.StrictMode>
)

reportWebVitals();
