import React, { Component } from 'react'
import { signIn } from '../store/auth'
import { connect } from 'react-redux'
import { FirebaseService } from '../firebase/firebase'
import { LoginComponent } from '../container/login'


class Login extends Component{
constructor(props){
super(props);
this.state = {
    email:'',
    password:''
}
this.inputHandle=this.inputHandle.bind(this);
this.signin=this.signin.bind(this);

}


inputHandle(e){
    this.setState({
[e.target.name]:e.target.value
})
}

signin(e){
e.preventDefault()
console.log('............',this.state)
FirebaseService.customLogin(this.state)
.then((user)=>{
    this.props.signInUser(user)
  //   localStorage.setItem('currentUser', user.uid);
    
    this.context.router.push({
        pathname:'/donate'
    })
})

.catch((error)=>{
    alert(error.message)
})
}


render(){
    return(
        <div>

<LoginComponent inputHandle={this.inputHandle} signin={this.signin}/>

        </div>
    )
}
}//main 

Login.contextTypes = {
     router: React.PropTypes.object.isRequired
 }


const mapStateToProps=(state)=>{
    return{
        authReducer:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signInUser:(data)=>{
            dispatch(signIn(data))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);