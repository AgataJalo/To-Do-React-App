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
    const newTask ={
      id: 1+ Math.random(),
      value:this.state.list.slice()
    }
    //console.log(newTask.id)
    let list= [...this.state.list]
    list.push(input);

    this.setState({
      list: list,
      newTask: ''  
    })
  }

  removeElement = id =>{
    const list =this.state.list.filter(item => {
      return item.id !== id
    });
    
    this.setState({
    list
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
          {this.state.list.map((item,id)=> <li key={id}>{item}
          </li>)}
        </ul>
        <button onClick={()=>this.removeElement()}>Clear List!</button>
      </div>
    </div>
    )
  }
}

export default App;
