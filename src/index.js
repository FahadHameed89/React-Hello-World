import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';
import HelloStudents from './components/HelloStudents';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Jordash" cost="12MP" effect="Flash Fire"/>
    <HelloStudent name="Marco" cost="8MP" effect="Drizzle"/>
    <HelloStudent name="Slash" cost="16MP" effect="Lightning Rod"/>
    <HelloStudent name="Eris" cost="22MP" effect="Mist Form"/>
    <HelloStudents />
  </React.StrictMode>,
  document.getElementById('root')
);
