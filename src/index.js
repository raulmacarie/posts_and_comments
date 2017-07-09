import React from 'react';
import ReactDOM from 'react-dom';

const container = document.createElement('div');
container.setAttribute('id', 'container');

document.body.appendChild(container);

// Render it to DOM
ReactDOM.render(
  <div>Initial Structure</div>,
  container,
);
