import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Fahad" age="30"/>

  </React.StrictMode>,
  document.getElementById('root')
);
