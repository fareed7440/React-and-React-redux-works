import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'
import {Provider} from 'react-redux'
import {store} from './store/store'
import Login from './components/login'
import CrimeList from './components/crimeList'
import SearchList from './components/searchList'
//import Donation from './components/donate'
import Signup from './components/signup'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();





ReactDOM.render((
   <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>

                <Route path="/" component={App}>
                    <IndexRoute component={App} />

                </Route>
                <Route path='/signup' component={Signup}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/crimeList' component={CrimeList}></Route>
                <Route path='/searchList' component={SearchList}></Route>
               
            </Router>
        </Provider>
    </MuiThemeProvider>
),


  document.getElementById('root')
);
