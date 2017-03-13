import React,{Component} from 'react'
import {ref,firebaseAuth} from '../Auth'

class Login extends Component{
    handleSubmit=(e)=>{
e.preventDefault()

return firebaseAuth().signInWithEmailAndPassword(this.email,this.password)
.then((user)=>{
    console.log(user)
})    

.catch((error)=>alert(error.message))
}
render(){
    return(
<div>
<h1>login</h1>
            <div>

            <label> Email</label>
            <input type='email'ref={(email)=>this.email=email} placeholder='Email'/>
            
            </div>
            <div>

            <label>Password</label>
            <input type='password'ref={(password)=>this.password=password} placeholder='password'/>
            
            </div>
            <button type='submit' onClick={'/todo'}>login</button>



</div>

    )
}

}


export default Login;