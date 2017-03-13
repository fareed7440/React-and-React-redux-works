import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FindDonors } from '../store/auth'
import { FirebaseService } from '../firebase/firebase'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import AppBar from 'material-ui/AppBar';


class Donation extends Component {
    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
        this.logOut = this.logOut.bind(this)
        this.state = { arr: [] }
    }
    onSearch(e) {
        let _self = this;
        e.preventDefault()
        let ref = FirebaseService.ref.child("/users");
        _self.arr = [];
        ref.orderByChild(this.refs.demo.value).equalTo(true).once('value', function (snapshot) {
            snapshot.forEach(childSnapshot => {
                _self.arr.push(childSnapshot.val())
            })
            _self.props.findDonor(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.user
            })
        });
    }
logOut(){
    FirebaseService.auth.signOut().then((u)=> {
        // console.log(u)
         this.context.router.push({
                pathname: "/signup"
            })
  // Sign-out successful.
}, (error)=> {
    alert(error)
    console.log(error)
  // An error happened.
});
}
    render() {
        const btn = {
            margin: "10px"
        }
        const style = {
            fontSize: '17px',
    
        }

        const table = {
  height: 190,
  width: 280,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};


        return (
            <div className="App">

<AppBar
    title="Search your Group Donator"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
 <RaisedButton label="Logout" primary={true} style={btn} onClick={this.logOut} />
  </AppBar>


               <center>    
            
                <h1>Please Select Your Blood Group</h1>
                <form onSubmit={this.onSearch}>
                    <select style={style}
                        required
                        ref="demo">
                        <option>Blood Type   </option>
                        <option value="A">A+   </option>
                        <option value="B">B+   </option>
                        <option value="O">O+   </option>
                        <option value="AB">AB+</option>
                    </select>
                    <br />
                    <RaisedButton label="Check" type="submit" primary={true} style={btn} />
                </form>

                {this.state.arr.map((v, i) => {
                    return (
                <div>
                    
                    <Paper style={table} zDepth={2}>

                    <table key={i}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>
                            {v.firstname } {v.lastname} </td>
                            <hr/>
                            </tr>
                            
                             <hr/>
                            <tr>
                                <th>Email</th>
                                <td>
                            {v.email} </td>
                            </tr>
                            <hr/>
                            
                            <tr>
                                <th>Blood Group</th>
                                    <td>
                            {v.blood} </td>
                            </tr>
                        </tbody>
                    </table>
                    </Paper>
                </div>
                    )
                })
                }
                </center>
            </div>
        );
    }
}
Donation.contextTypes = {
    router: React.PropTypes.object.isRequired
}
const mapStateToProps = (state) => { 
    return {
        storeReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        findDonor: (data) => {
            console.log(data)
            dispatch(FindDonors(data))
        }
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(Donation);