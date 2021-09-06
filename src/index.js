import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

const datas = [
  { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
  { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
  { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
];

ReactDOM.render(
  <React.StrictMode>
    <App datas={datas} />
  </React.StrictMode>,
  document.getElementById('root')
);
