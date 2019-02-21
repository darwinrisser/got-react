import React, { Component } from 'react';
import './App.css';

// const questions = {
//   question1: {
//     text: "If you were the King/Queen of Westeros, who would you choose as your Hand? A. Tyrion Lannister  B. Davos Seaworth C. Tywin Lannister D. Ned Stark ",
//     choices: [
//       {
//         name: "Tyrion Lannister",
//         img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
//         id: 1
//       }

class App extends Component {
  state = {
    data: null
  }

  render() {
    return (
      <div className="App">
         {this.props.questions.question1.text}
         <div>
           {this.props.questions.question1.choices[0].name}
           <br></br>
           <img src={this.props.question.question1.choices[0].img} alt="Tyrion"/>    
         </div>
         <div>
          
           {this.props.questions.question1.choices[1].name}
           <br></br>
           <img src={this.props.question.question1.choices[1].img} alt="Tyrion"/>    
         </div>
         <div>
          
           {this.props.questions.question1.choices[2].name}
           <br></br>
           <img src={this.props.question.question1.choices[2].img} alt="Tyrion"/>    
        </div>
        <div>
          
          {this.props.questions.question1.choices[3].name}
          <br></br>
          <img src={this.props.question.question1.choices[3].img} alt="Tyrion"/>    
         </div>
      </div>
    );
  }
}

export default App;
