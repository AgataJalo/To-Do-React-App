import React, { Component } from 'react';
import './App.css';

class App extends Component{
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
    let listArr = this.state.list;
    listArr.push(input);

    this.setState({
      list: listArr,
      newTask: ''  
    })
  }
    

  render(){
    return(
    <div className="app">
      <div className="calendar">
        <p>Data i godzina</p>
      </div>

      <div className="addTask">
        <input 
        className="main-input" 
        type="text" 
        placeholder="Add task..." 
        value={this.state.newTask}
        onChange={(e)=>this.changeTask(e.target.value)}
        />
        <button onClick={()=>this.addElement(this.state.newTask)}>Add</button>
      </div>

      <div className="list">
        <ul>
    {this.state.list.map((value)=> <li>{value}</li>)}
        </ul>
      </div>
    </div>
    )
  }
}

export default App;
