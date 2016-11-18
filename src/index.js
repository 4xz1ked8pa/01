/* dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import './assets/css/reset';
import './index.css';

/* components */
import Home from './pages/Home/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
