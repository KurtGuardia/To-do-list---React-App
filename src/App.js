import React, { Component } from 'react';
//import Todos from './Components/Todos';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Study React',
        compleated: false
      },
      {
        id: 2,
        title: 'Do Business Plan',
        compleated: false
      },
      {
        id: 3,
        title: 'Make JS project',
        compleated: false
      },
    ]
  }

  render(){  
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
