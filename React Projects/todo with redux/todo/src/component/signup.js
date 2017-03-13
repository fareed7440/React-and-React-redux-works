import React, { Component } from 'react'
import { ref, firebaseAuth } from '../Auth'
import { Link } from 'react-router';
//import Todo from 'todo`'

class Register extends Component {
    constructor() { 
        super();
        this.handleDataSubmit = this.handleDataSubmit.bind(this);
    }
    handleDataSubmit(data) {
        return firebaseAuth().createUserWithEmailAndPassword(data.email, data.pass)

            .then((user) => {
                return ref.child(`users/${user.uid}`)
                    .set({
                        email: user.email,
                        uid: user.uid,
                        name: data.username,
                        
                    })
                    .then(() =>
                        this.props.router.push("/"),
                    
                    )
            })
            .catch((error) => alert(error.message))
    }
    render() {
        return (
            <div>
                <Form getData={this.handleDataSubmit} />
                
            </div>
        );
    }
}

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getData({
            email: this.email.value,
            pass: this.pass.value,
            username: this.username.value,
            
        })
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"  ref={(email) => this.email = email} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" placeholder="Password" ref={(pass) => this.pass = pass} />
                    </div>
                    <div>
                        <label>
                        User name</label>
                        <input type="text" placeholder="UserName"  ref={(username) => this.username = username} />
                    </div>
                    <button type="submit">Register</button>
                </form>

                <Link to="/login">Login</Link>

            </div>
        )
    }
}

 Register.contextTypes = {
   router: React.PropTypes.object.isRequired
 }
export default Register;
