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

  //   addTask(){
  //   const listElement = document.createElement('li');
  //   const inputValue = document.getElementsByClassName('main-input').value;
  //   const text = document.createTextNode(inputValue);
  //   listElement.appendChild(text);
  // }


  render(){
    return(
    <div className="app">
      <div className="calendar">
        <p>Data i godzina</p>
      </div>

      <div className="addTask">
        <input className="main-input" type="text" placeholder="Add task..." /*value={this.state.newTask} onChange={this.addTask()}*/></input>
        <button /*onClick={}*/>Add</button>
      </div>

      <div className="list">
        <ul>
          <li>Agata</li>
        </ul>
      </div>
    </div>
    )
  }
}

export default App;
