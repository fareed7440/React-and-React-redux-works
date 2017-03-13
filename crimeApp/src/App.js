import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from "react-router"
import logo from './logo.svg';
import SearchList from './components/searchList'
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const style = {
  margin: 16,
  backgroundColor:'transparent'
};


class App extends Component {
  render() {
    return (
      <div className="App">
        
    <AppBar
    title="Crime App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
  <Link to='/searchList'>
  <RaisedButton type='submit' label="search Report" primary={true} style={style} /></Link>
  <Link to='/signup'>
  <RaisedButton type='submit' label="to submit Report plz signup first" primary={true} style={style} /></Link>
  </AppBar>
        
 <CardMedia
      overlay={<CardTitle title="Crime ...." subtitle="Crime..." />}
    >
      <img src="http://westorlandonews.com/wp-content/uploads/2015/10/Generic-Crime-Scene-Tape-Police-Lights-29697644.jpg" height='600' />
    </CardMedia>


      </div>
    );
  }
}


export default App;
