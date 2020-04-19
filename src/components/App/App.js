import React, { Component } from 'react';
import './App.css';
import Clock from '../Clock/clock';
import List from '../List/list'


class App extends Component{

  render(){
    return(
    <div className="app">
      <Clock></Clock>
      <List></List>
    </div>
    )
  }
}

export default App;
