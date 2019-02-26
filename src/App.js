import React, { Component } from 'react';
import Question from './Question';
import './App.css';

class App extends Component {
 
  state = {
    display: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0
  }

  reset = () => {
    this.setState(()=>{
      return {display:0, a:0, b:0, c:0, d:0}
    })
  }

  addScore = (num) => {
    if (num === 1){
      let aCurrent = this.state.a;
      this.setState(()=>{
        return{a:aCurrent+1}
     })
    } else if (num === 2){
      let bCurrent = this.state.b;
      this.setState(()=>{
        return{b:bCurrent+1} 
      }) 
    } else if (num === 3){
    let cCurrent = this.state.c;
    this.setState(()=>{
      return{c:cCurrent+1}
      })
    } else if (num === 4){
    let dCurrent = this.state.d;
    this.setState(()=>{
      return{d:dCurrent+1}
      })
    }
  }

  changeQuestion = () => {
    if (this.state.display === 0){
    this.setState(()=>{
      return {display:1}
      })
    } else if (this.state.display === 1){
      this.setState(()=>{
        return {display:2}
      })
    } else if (this.state.display === 2){
      this.setState(()=>{
        return {display:3}
      }) 
    } else {
      this.setState(()=>{
        return {display:4}
      })
    }
  }

  render() {
    const appStyle = {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2015/11/Game-of-Thrones-Desktop-Background-1920x1080.jpg')"
    }

    const buttonStyle = {
      height: '30px',
      width: '50px',
      borderRadius: '15px'
    }

    let content = null;
    if (this.state.display < 4){
      content = <Question 
      question={this.props.questions[this.state.display]}
      changeQuestion={this.changeQuestion}
      addScore={this.addScore}
      />
    } else {
      if (this.state.a === 4){
        content = <h1>You have survived all the way until season 8! Good luck!</h1>
      } else if (this.state.a === 3){
        content = <h1>'Good job, you died in season 6!'</h1>
      } else if (this.state.a === 2){
        content = <h1>Not bad, you died in season 4!</h1>
      } else if (this.state.a === 1){
        content = <h1>You died in season 2.</h1>
      } else content = <h1>You died in season 1.</h1>
    }

    return (
      <div className="App" style={appStyle}>
        <button onClick={this.reset} style={buttonStyle}>Reset</button>
        {content}
      </div>
    );
  }
}

export default App;