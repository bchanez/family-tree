import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

const datas = {
  persons: [
    {
      id: 1,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
    {
      id: 2,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
    {
      id: 3,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
    {
      id: 4,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
    {
      id: 5,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
    {
      id: 6,
      identity: { firstName: 'firstName', lastName: 'lastName', birthName: 'birthName', birthDate: 'MM/JJ/YYYY', deathDate: 'MM/JJ/YYYY' },
    },
  ],
  families: [{ id: 1, wife: 1, husband: 2, children: [3, 4, 5, 6] }],
};

ReactDOM.render(
  <React.StrictMode>
    <App datas={datas} />
  </React.StrictMode>,
  document.getElementById('root')
);
