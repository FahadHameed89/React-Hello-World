import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';
import HelloStudents from './components/HelloStudents';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Jordash" cost="1MP" effect="Flash Fire"/>
    <HelloStudent name="Marcu" cost="1MP" effect="Aqua Body"/>
    <HelloStudent name="Slash" cost="1MP" effect="Lightning Rod"/>
    <HelloStudent name="Spike" cost="1MP" effect="Levitate"/>
    <HelloStudents />
  </React.StrictMode>,
  document.getElementById('root')
);
