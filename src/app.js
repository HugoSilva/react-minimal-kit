import React from 'react';
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import MainApp from './components/MainPage/MainPage.jsx';
import About from './components/AboutPage/AboutPage.jsx';
import NoMatch from './components/notfound.jsx';
import createHistory from 'history/lib/createHashHistory'

let history = createHistory({
    queryKey: false
})

render((
    <Router history={history}>
        <Route path="/" component={MainApp} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('app'))