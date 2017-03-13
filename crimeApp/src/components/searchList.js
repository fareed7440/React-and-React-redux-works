import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FindList } from '../store/auth'
import { FirebaseService } from '../firebase/firebaseConfig'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
//import Date from 'react-moment';
import AppBar from 'material-ui/AppBar';


class SearchList extends Component{
    constructor(props){
        super(props);
        this.onsearch=this.onsearch.bind(this)
        this.state={arr:[] }
 }


onsearch(e){
  
    e.preventDefault()
    let ref = FirebaseService.ref.child('/CrimeList');
    
    var arr1=[];
    console.log("0", this.refs.demo.value);
    ref.orderByChild('cityname').equalTo(this.refs.demo.value).once('value',(snapshot)=>{
        console.log("1",snapshot.val());
        var snapData = snapshot.val();


         snapshot.forEach(childSnapshot => {
                arr1.push(childSnapshot.val())
                console.log("8",arr1);
            })
             this.setState({
                arr: arr1
            })

            console.log("7",this.state.arr);

    //    Object.keys(snapData).forEach(key=>{
    //        console.log(key);
    //        console.log(snapData[key]);
    //        this.state.arr.push(snapData[key]);
    //        console.log("5" ,this.state.arr);
    //    })
        // console.log("2",snapData);
        // snapData.forEach(childSnapshot=>{
        //     console.log("4",childSnapshot );
        //     _search.arr.push(childSnapshot.val())
        // })
console.log('sgqjhsg',)
        this.props.FindLists(this.arr)
        this.setState({
        arr:this.props.storeReducer.user    
        })
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
  height: 280,
  width: 280,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};


        return (
            <div className="App">

<AppBar
    title="Search crime / missing poeples"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />


                  
            
                <h1>Select City</h1>
                <form onSubmit={this.onsearch}>
                    <select style={style}
                        required
                        ref="demo">
                        <option>City Name  </option>
                        <option value="karachi">karachi   </option>
                        <option value="lahore">lahore   </option>
                        <option value="islamabad">islamabad </option>
                        <option value="peshawar">peshawar</option>
                        <option value="quetta">quetta</option>
                    </select>
                    <br />
                    <RaisedButton label="Check" type="submit" primary={true} style={btn} />
                </form>

                {this.state.arr.map((v, i) => {
                    return (
                <div>
                    
                    <Paper style={table} zDepth={2}>

                    <table >
                        <tbody >
                            <tr key={i}>
                                <th>Name</th>
                                <td>{v.name}
                             </td>
                            <hr/>
                            </tr>
                            
                             <hr/>
                            <tr>
                                <th>Address</th>
                                <td>
                        {v.address} </td>
                            </tr>
                            <hr/>
                            
                            <tr>
                                <th>incidentType</th>
                                    <td>
                            {v.incidentType} </td>
                            </tr>

<hr/>

 <tr>
                                <th>gender</th>
                                    <td>
                            {v.gender} </td>
                            </tr>
<hr/>
                             <tr>
                                <th>cityname</th>
                                    <td>
                            {v.cityname} </td>
                            </tr>
                            <hr/>
 <tr>
                                <th>incidentDate</th>
                                    <td>
                            {v.incidentDate} </td>
                            </tr>



                        </tbody>
                    </table>
                    </Paper>
                </div>
                    )
                })
                }
            </div>
        );
    }
}
// Donation.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
const mapStateToProps = (state) => { 
    return {
        storeReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        FindLists: (data) => {
            console.log(data)
            dispatch(FindList(data))
        }
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList);




