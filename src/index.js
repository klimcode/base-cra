/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './common_bundle/App';
import './css/critical.css';
// import registerServiceWorker from './registerServiceWorker';
// lazy loading
import('./css/rest.css');


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


if (module.hot) {
  module.hot.accept();
}
