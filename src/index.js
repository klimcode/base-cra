/* eslint-env browser */
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './css/index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
// registerServiceWorker();


if (module.hot) {
  module.hot.accept();
}
