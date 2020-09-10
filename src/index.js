import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Strike" cost="1MP" effect="Deals 10 Damage"/>
    <HelloStudent name="Defend" cost="1MP" effect="Deals 10 Damage"/>
    <HelloStudent name="Dual Slash" cost="1MP" effect="Deals 8 Damage twice"/>
    <HelloStudent name="Circle Slash" cost="1MP" effect="Deals 8 Damage to all enemies"/>
  </React.StrictMode>,
  document.getElementById('root')
);
