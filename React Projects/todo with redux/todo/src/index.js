import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todo from './component/todo'
//import Home from './component/home';
import SignUp from './component/signup';
import Login from './component/login';
//import NestedHome from './components/homenestedroute';
//import NestedAbout from './components/aboutnestedroute';
// import Nav from './components/nav.js';
import './index.css';
// import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
    <Router history={hashHistory}>

        <Route path="/todo" component={Todo}></Route>

        <Route path="/login" component={Login}></Route>
        <Route path="/" component={App}>
            <IndexRoute component={SignUp} />
        </Route>


    </Router>
),
    document.getElementById('root')
);
