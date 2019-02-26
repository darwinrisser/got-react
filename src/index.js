import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const questions = [
  {
    text: "If you were the King/Queen of Westeros, who would you choose as your Hand?",
    choices: [
      {
        name: "Tyrion Lannister",
        img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
        id: 1
      },
      {
        name: "Davos Seaworth",
        img: "https://vignette.wikia.nocookie.net/p__/images/b/b0/Davos_Seaworth_2.jpg/revision/latest?cb=20170125224137&path-prefix=protagonist",
        id: 2
      },
      {
        name: "Tywin Lannister",
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-game-of-thrones-charles-dance.jpg",
        id: 3
      },
      {
        name: "Ned Stark",
        img: "https://awoiaf.westeros.org/thumb.php?f=Sean_Bean_as_Eddard_Stark.png&width=300",
        id: 4
      }
    ]
  },
  {
    text: "If you were the King/Queen of Westeros, who would you choose to command your army?",
    choices: [
      {
        name: "Robb Stark",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Robb_Stark-Richard_Madden.jpg/220px-Robb_Stark-Richard_Madden.jpg",
        id: 1
      },
      {
        name: "Stannis Baratheon",
        img: "https://lh3.googleusercontent.com/-SebSthPnMv8/AAAAAAAAAAI/AAAAAAAAAhw/fi97BrPjwfY/photo.jpg?sz=328",
        id: 2
      },
      {
        name: "Jon Snow",
        img: "https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg",
        id: 3
      },
      {
        name: "Ramsay Bolton",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg",
        id: 4
      }
    ]
  },
  {
    text: "Of the following, who would you LEAST like to fight?",
    choices: [
      {
        name: "Gregor Clegane",
        img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Gregor_Clegane-The_Mountain-Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson.jpg",
        id: 1
      },
      {
        name: "Sandor Clegane",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Sandor_Clegane-The_Hound-Rory_McCann.jpg",
        id: 2
      },
      {
        name: "Bronn",
        img: "https://upload.wikimedia.org/wikipedia/en/1/1a/Bronn-Jerome_Flynn.jpg",
        id: 3
      },
      {
        name: "Jaime Lannister",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
        id: 4
      }
    ]
  },
  {
    text: "Who would you support as the King/Queen of Westeros?",
    choices: [
      {
        name: "Daenerys Targaryen",
        img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg",
        id: 1
      },
      {
        name: "Jon Snow",
        img: "https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg",
        id: 2
      },
      {
        name: "Stannis Baratheon",
        img: "https://lh3.googleusercontent.com/-SebSthPnMv8/AAAAAAAAAAI/AAAAAAAAAhw/fi97BrPjwfY/photo.jpg?sz=328",
        id: 3
      },
      {
        name: "Joffrey Lannister",
        img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg",
        id: 4
      }
    ]
  }
]

ReactDOM.render(<App questions={questions}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();