import React,{Component} from 'react'
import * as firebase from 'firebase'
import {FirebaseService} from '../firebase/firebaseConfig'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {signUp} from '../store/auth'
import {SigninComponent} from '../containers/signupCon'

  export class Signup extends Component{
constructor(props){
    console.log('countttttt');
    super(props);
    this.state= {
        firstname : '',
        lastname :'',
        email:'',
        password:''
    }

      this.oninput=this.oninput.bind(this);
          this.onsubmit = this.onsubmit.bind(this);
    
}

oninput(e){
this.setState({
    [e.target.name]: e.target.value
});
}
onsubmit(e){
    e.preventDefault();
    let multipath={};
    let enterUser={
firstname:this.state.firstname,
lastname:this.state.lastname,
email:this.state.email,
password:this.state.password,
//   blood:this.state.blood,
//   A:["A","O"].indexOf(this.state.blood) !== -1 ? true:null,
//    AB:["A","B","O","AB"].indexOf(this.state.blood) !== -1 ? true:null,
//    B:["B","O"].indexOf(this.state.blood) !== -1 ? true:null,
//    O:["O"].indexOf(this.state.blood) !== -1 ? true:null,
//  // A:["A","A-","O"].indexOf(this.state.blood) ! = -1 ? true:null,
  //A:["A","A-","O"].indexOf(this.state.blood) ! = -1 ? true:null,
  //A:["A","A-","O"].indexOf(this.state.blood) ! = -1 ? true:null,
  //A:["A","A-","O"].indexOf(this.state.blood) ! = -1 ? true:null
}

//console.log('hhhhh',enterUser)

FirebaseService.customAuth(enterUser).then((user)=>{
      multipath[`CrimeUserList/${user.uid}`] = enterUser;
            FirebaseService.saveMultipath(multipath)

enterUser['uid']=this.state.uid
this.props.signUp(this.state)
console.log('jdcdjcedkjcdekj',enterUser)
this.context.router.push({
  pathname: '/login'
})

}).catch((error)=>{
alert(error.message)
})

}
render(){
    
    return(
        <div><SigninComponent signUpState={this.state} oninput={this.oninput} onsubmit={this.onsubmit}/>

               <Link to='/signup'></Link>
    
    </div>
    );
}

}//main function 



 Signup.contextTypes = {
      router: React.PropTypes.object.isRequired}
 const mapStateToprops=(state)=>{
     return{
         authReducer:state
     }
 }


 const mapDispatchToProps=(dispatch)=>{

return{
    signUp: (data)=>{
        dispatch(signUp(data))
    }
}

 }

 export default connect(mapStateToprops,mapDispatchToProps)(Signup);



