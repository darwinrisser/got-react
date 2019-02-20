import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch('http://172.16.0.162:3001/characters', {mode: 'no-cors'})
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
      Hi
        {this.state.data}
      </div>
    );
  }
}

export default App;
