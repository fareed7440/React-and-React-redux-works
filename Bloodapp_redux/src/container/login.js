import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
  import Paper from 'material-ui/Paper';


  const style1 = {
  height: 300,
  width: 600,
  margin: 120,

  textAlign: 'center',
  display: 'inline-block',
};

  export class LoginComponent extends React.Component{

    

render(){

return(
<div>

    <AppBar
    title="Login Page"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <center>
    <Paper style={style1} zDepth={5} >
<form onSubmit={this.props.signin}>
<TextField
  style={{margin:'32'}}
      name='email'
      placeholder='Enter Email'
      onChange={this.props.inputHandle}
       
    /><br />
    <TextField
    name='password'
    type='password'
  style={{margin:'20'}}
      placeholder='Enter Password'
      onChange={this.props.inputHandle}
      
    /><br />
    <RaisedButton type="submit" label="Sign in" primary={true} /><br/>
    <br />
    Dont have Account <Link to = '/signup'>Please Create Account First</Link>
</form></Paper>
</center>
<div>

</div>
  </div>
)


}

  }



  
// LoginComponent.PropTypes = {
//      inputHandle: React.PropTypes.func.isRequired,
//      signin: React.PropTypes.func.isRequired
//  }