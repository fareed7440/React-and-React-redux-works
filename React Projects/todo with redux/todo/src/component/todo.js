import React from 'react'
import firebase from 'firebase'
var React = require('react-native');
var listView = require('List')
// var{
//     Text,
//     View,
//     ListView
// }
import { ref, firebaseAuth } from '../Auth'
class Todo extends React.Component{
constructor(props){
    super(props);
var myFirebaseRef = new firebase('https://todoapp-c580a.firebaseio.com');
    this.itemRef=myFirebaseRef.child(email+"/item");
    this.state={
        newTodo:'',
        todoSource: new listView.DataSource({rowHasChanged:(row1,row2)=>row1 !=row2})
    };
    this.items = [];
}
componentDidMount(){
    this.itemRef.on('child_added',(dataSnapshot)=>{
        this.items.push({id:dataSnapshot.key(),text:dataSnapshot.val()});
        this.setState({
            todoSource:this.state.todoSource.cloneWithRows(this.items)
        });
    });
}

componentDidMount(){
    this.itemRef.on('child_removed',(dataSnapshot)=>{
        this.items=this.items.filter((x)=>x.id !=dataSnapshot.key());
        this.setState({
            todoSource:this.state.todoSource.cloneWithRows(this.items)
        });
    });
}

addTodo(){
if(this.state.newTodo !==''){
    this.itemRef.push({
        todo:this.state.newTodo
    });
    this.setState({
        newTodo:'',

    });

}
}
removeTodo(rowData){
    this.itemRef.child(rowData.id).remove();


}
render(){
    return(
        <div>
        <input type='text' onChange={(text)=>this.setState({
            newTodo:text
         } )} value={this.state.newTodo}/>
        <button onClick={this.addTodo()}></button>
        
<listView>
DataSource={this.state.todoSource}

</listView>


</div>
    )

}
renderRow(rowData){
    return(
        <button onClick={this.removeTodo.rowData}>
    
        </button>
    )
}

}