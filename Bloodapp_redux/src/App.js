import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const style1 = {
  height: 350,
  width: 400,
  margin: 120,

  textAlign: 'center',
  display: 'inline-block',
};


const style = {
  margin: 12,
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AppBar
    title="Blood Bank"
    
    iconClassNameRight="muidocs-icon-navigation-expand-more"
>
<Link to='/signup'>
  <RaisedButton type='submit' label="SignUp" secondary={true} style={style} /></Link>
  <Link to='/login'>
  <RaisedButton type='submit' label="Sign In" secondary={true} style={style} /></Link><br />
 </AppBar>


<center>
  <CardMedia
      overlay={<CardTitle title="Donate Blood ...." subtitle="Blood..." />}
    >
      <img src="http://www.reachyourdoctors.com/admin/post_image/1444212258_Donate-Blood.png" height='600' />
    </CardMedia>

</center>
          
          </div>
      </div>
    );
  }
}

export default App;
