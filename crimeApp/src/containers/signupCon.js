import * as React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Link } from "react-router"
const style1 = {
  height: 500,
  width: 500,
  margin: 60,

  textAlign: 'center',
  display: 'inline-block',
};

const style = {
  margin: 12,
};

export class  SigninComponent extends React.Component{
render(){
    return(
        <div>
 
<AppBar
    title="Sign Up"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
<center>
    <Paper style={style1} zDepth={4} >
           <form onSubmit={this.props.onsubmit}>

    <TextField
    name='firstname'
    type='text'
    style= {{margin:'15'}}
  value={this.props.signUpState.firstname}
   
    onChange={this.props.oninput}
  
      placeholder='Enter First Name'
    /><br />
    <TextField
    name='lastname'
     style= {{margin:'15'}}
  value={this.props.signUpState.lastname}
  
    onChange={this.props.oninput}
      
      placeholder="Last Name"
    /><br />

<TextField
    name='email'
     style= {{margin:'15'}}
    value={this.props.signUpState.email}
    onChange={this.props.oninput}
      
      placeholder='Enter Email'
    /><br />

<TextField
    name='password'
    type='password'
     style= {{margin:'15'}}
    value={this.props.signUpState.password}
    onChange={this.props.oninput}
      
      placeholder='Enter Password'
    /><br />


     {/*<select 
                        name="blood"
                         style= {{margin:'15'}}
                       value={this.props.signUpState.blood}
                        required
                        onChange={this.props.oninput}
                        
                        >
                        <option>Blood Type   </option>
                        <option value="A">A+   </option>
                        <option value="B">B+   </option>
                        <option value="O">O+   </option>
                        <option value="AB">AB+</option>
                    </select><br/>
                   */}
<RaisedButton type='submit' label="SignUp" primary={true} style={style} />


    </form>
    



    <div>
      Already have Account please  <Link to ='/login'>login</Link>
    </div>
</Paper>
</center>



    </div>

    )
}

}