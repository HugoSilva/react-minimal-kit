import React from 'react';
    
import { render } from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'

import MainApp from './components/MainPage/MainPage.jsx';
import About from './components/AboutPage/AboutPage.jsx';
import NoMatch from './components/notfound.jsx';

render((
    <Router history={browserHistory}>
        <Route path="/" component={MainApp} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('app'))

//ReactDOM.render(<MainApp data={Data.init()} />, document.getElementById('app'));