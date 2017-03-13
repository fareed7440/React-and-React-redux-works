import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'
import {Provider} from 'react-redux'
import {store} from './store/store'
import Login from './components/login'
import Donation from './components/donate'
import BloodReg from './components/signup'
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
                <Route path='/signup' component={BloodReg}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/donate' component={Donation}></Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),


  document.getElementById('root')
);
