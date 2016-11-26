/* dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import './assets/css/reset.css';
import './assets/css/settings.css';
import './assets/css/grid.css';
import './assets/css/fonts.css';

/* components */
import Home from './pages/Home/Home';
import About from './pages/About/About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
