import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router.js';
import './assets/stylesheets/normalize.css';
import './assets/stylesheets/skeleton.css';
import './assets/stylesheets/main.css';


ReactDOM.render(
  <Router />,
  document.getElementById('root')
);