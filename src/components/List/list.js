import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import './list.css'

class List extends Component{
    constructor(props){
      super(props);
      
      this.state={
        newTask: '',
        list:[],
        idCounter:0
      }

      this.toggleClass= this.toggleClass.bind(this);
      console.log(this.state)
    }

  toggleClass (id) {
    const itemToChange = this.state.list.find(item => item.id == id)
    itemToChange.done = !itemToChange.done
    this.setState({
      list: this.state.list
    })
  }

 
  changeTask(input) {
    this.setState({
      newTask: input
    });
  } 

  addElement(input){
    let list= [...this.state.list]
    
    if(input === ''){
      
      swal("Ouups...", "You have to write something, before adding!", "info");
      
    } else{
      list.push({
        id: this.state.idCounter,
        value:input,
        done: false
      });
    }
    this.setState({
      list: list,
      newTask: '',
      idCounter: this.state.idCounter + 1
    })
    
  }

  clearList(){
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
          list:[]
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
      <h2>My list</h2>
      <div className="addTask">
        <input
        id="newTaskInput"
        className="mainInput" 
        type="text" 
        placeholder="Add task..." 
        value={this.state.newTask}
        onChange={(e)=>this.changeTask(e.target.value)}
        />
        <button className ="addBtn Btn" onClick={()=>this.addElement(this.state.newTask)}>+</button>
      </div>

      <div className="list">
        <ul className="ulList">
    {this.state.list.map((item,id)=> <li className="listElement"  key={id}>
      <div className={item.done ? 'toggle': null} onClick={()=>this.toggleClass(item.id)}>{item.value}</div>

          <button className="deleteBtn Btn" onClick={()=>this.deleteElement()}><span>x</span></button>
          </li>
          )}
        </ul>
        <button className= "clearBtn" onClick={()=>this.clearList()}>Clear!</button>
      </div>
    </div>
    )
  }
}

export default List;