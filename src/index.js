import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Fahad" age="30"/>
    <HelloStudent name="Richter" age="72"/>
    <HelloStudent name="Mako" age="44"/>

  </React.StrictMode>,
  document.getElementById('root')
);
