import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker'
import Paper from 'material-ui/Paper';
import * as firebase from 'firebase'

const style1 = {
  height: 500,
  width: 500,
  margin: 60,

  textAlign: 'center',
  display: 'inline-block',
};


class CrimeList extends Component{
    cities;
    constructor(props){
        super(props);
        this.cities=[
            "karachi",
            'lahore',
            'islamabad',
            'peshawar',
            'quetta'
        ]



this.state = {
    name:'', gender:'', incidentType:'', address:'', cityname:'',incidentDate:new Date(),

}

this.handleSubmit=this.handleSubmit.bind(this)
this.handleDateChange=this.handleDateChange.bind(this)
  }

 handleCity = (event, index, value) => this.setState({ cityname: value });
handleGender=(e,index,value)=>this.setState({gender:value});
handleIncidentType=(e,index,value)=>this.setState({incidentType:value});

handleSubmit(e){
e.preventDefault();
var name = this.refs.name.getValue();
var gender = this.state.gender==1?'male':'female'
var incidentType = this.state.incidentType==1 ? 'Crime':'Missing'
var address= this.refs.address.getValue();
var cityname = this.state.cityname;
var incidentDate = this.state.incidentDate.getDate()
//incidentDate.toString('MMM dd')
var objSave = {
   // userEmail: this.props.application.user.email,
    address:address,
    name:name,
    incidentType:incidentType,
    gender:gender,
    cityname:cityname,
    incidentDate:incidentDate,
}
console.log('jskggg',objSave)
//this.props.addNewReports(objSave);
firebase.database().ref('CrimeList').push(objSave)
this.context.router.push({
  pathname: '/searchList'
})

}


handleinputChange(e){
 const target = e.target
 const value = target.type === 'checkedbox' ? target.checked:target.value
  

const name= target.name
this.setState({
[name]:value
});
}


handleDateChange=(e,date)=>{
    this.setState({
        incidentDate:date})
}



render(){
    return(
        <div>


 <AppBar
    title="Generate Report"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />

  <center>
      <Paper style={style1} zDepth={4} >
 <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>

<TextField
                        
                                
                             hintText="Enter Person name"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <SelectField
                                ref="gender"
                                name="gender"
                                  hintText="Select Gender"
                                placeholder='select Gender'
                                onChange={this.handleGender}
                                hint text='male'
                                value={this.state.gender}
                                required={true}
                                D
                                >
                                <MenuItem value={1} primaryText="Male" />
                                <MenuItem value={2} primaryText="Female" />
                            </SelectField>
                            <DatePicker
                                ref="inicidentDate"
                             
                              hintText="Select Date"
                                value={this.state.incidentDate}
                                onChange={this.handleDateChange}
                            />
                              <SelectField
                               hintText="Select his/her city"
                                ref="cityname"
                                name="cityname"
                               onChange={this.handleCity}
                                value={this.state.cityname}
                                className="full-width-container"
                                required={true}
                                >
                                {
                                    this.cities.map(cities => {
                                        return <MenuItem key={cities} value={cities} primaryText={cities} />
                                    })
                                }
                            </SelectField>
                            <br/>
                            <SelectField
                                ref="inicidentType"
                                type="text"
                                name="inicidentType"
                         hintText="Select incidentType"
                                onChange={this.handleIncidentType}
                                className="full-width-container"
                                value={this.state.incidentType}
                                required={true}
                                >
                                <MenuItem value={1} primaryText="Crime" />
                                <MenuItem value={2} primaryText="Missing" />
                                
                            </SelectField>
                            <br/>
                            <TextField
                                
                                multiLine={true}
                                 hintText="Enter address"
                                rows={2}
                                rowsMax={2}
                                ref="address"
                                name="address"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <RaisedButton type="submit" label="Submit" primary={true} />
                

     </form>
     </Paper>
</center>
        </div>
    )
}



}//main


CrimeList.contextTypes = {
      router: React.PropTypes.object.isRequired}


export default CrimeList