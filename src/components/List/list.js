import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import './list.css'

class List extends Component{
    constructor(props){
      super(props);

      this.state={
        newTask: '',
        list:[]
      }
    }

  changeTask(input) {
    this.setState({
      newTask: input
    });
  } 

  addElement(input){
    const newTask ={
      id: 1+ Math.random(),
      value:this.state.list
    }
    //console.log(newTask.id)
    let list= [...this.state.list]
    
    if(input === ''){
      
      swal("Ouups...", "You have to write something, before adding!", "info");
      
    } else{
      list.push(input);
    }

    this.setState({
      list: list,
      newTask: ''  
    })
  }


  clearList = id =>{
    const list =this.state.list.filter(item => {
      return item.id !== id
    });

    swal({
      title: "Are you sure?",
      text: "You delete all positions from the list.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.setState({
          list
          })
        swal("You clear your list. Start a new one!", {
          icon: "success",
        });
      } else {
        swal("Back to your list");
      }
    });
  }

  deleteElement = (key) => {
    const list = this.state.list;
    list.splice(key, 1);
    
    this.setState({ 
      list: list 
    })
  }
  render(){
    return(
    <div className="bodyList">
      <h3>My list</h3>
      <div className="addTask">
        <input 
        className="mainInput" 
        type="text" 
        placeholder="Add task..." 
        value={this.state.newTask}
        onChange={(e)=>this.changeTask(e.target.value)}
        />
        <button className ="addBtn" onClick={()=>this.addElement(this.state.newTask)}>+</button>
      </div>

      <div className="list">
        <ul className="ulList">
          {this.state.list.map((item,id)=> <li className="listElement"key={id}><span className="textSpan">{item}</span>
          <button className="deleteBtn" onClick={()=>this.deleteElement()}><span>x</span></button>
          </li>
          )}
        </ul>
        <button className= "clearBtn" onClick={()=>this.clearList()}>Clear List!</button>
      </div>
    </div>
    )
  }
}

export default List;