import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import './assets/css/vendors/tabs.css';
import './assets/css/reset.css';
import './assets/css/settings.css';
import './assets/css/grid.css';
import './assets/css/fonts.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Gardens from './pages/Gardens/Gardens';
import Partners from './pages/Partners/Partners';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/gardens' component={Gardens} />
      <Route path='/partners' component={Partners} />
    </Route>
  </Router>,
  document.getElementById('root')
);
