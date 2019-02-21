import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const questions = {
  question1: {
    text: "If you were the King/Queen of Westeros, who would you choose as your Hand?",
    choices: [
      {
        name: "Tyrion Lannister",
        img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
        id: 1
      },
      {
        name: "Davos Seaworth",
        img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
        id: 2
      },
      {
        name: "Tywin Lannister",
        img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
        id: 3
      },
      {
        name: "Ned Stark",
        img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
        id: 4
      }
    ]
  }
}

ReactDOM.render(<App questions={questions}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
