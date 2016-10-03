import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

$(function() {
  $(document).foundation();
  ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
  );
});
