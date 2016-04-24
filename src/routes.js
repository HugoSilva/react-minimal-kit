import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
    
import Main from './components/MainPage/MainPage.jsx';
import About from './components/AboutPage/AboutPage.jsx';
import NoMatch from './components/notfound.jsx';

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch}/>
    </Router>
);

export default routes;