import React from 'react';
import Data from '../../data';
import { Link } from 'react-router';
require('./MainPage.scss');

export default class MainApp extends React.Component {
    
    render() {    
        var data = Data.init();

        return (
            <div>
                <h1>{data.name}</h1>
                <Link to={'/about'}>About</Link>
                <br/>
                <Link to={'/asd'}>Invalid</Link>
            </div>
        );
    }
}