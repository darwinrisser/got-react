import React from 'react';

function Question (props) {
  const theClickFunction1 = () =>{
    props.addScore(1);
    props.changeQuestion();
  }
  const theClickFunction2 = () =>{
    props.addScore(2);
    props.changeQuestion();
  }
  const theClickFunction3 = () =>{
    props.addScore(3);
    props.changeQuestion();
  }
  const theClickFunction4 = () =>{
    props.addScore(4);
    props.changeQuestion();
  }
  
  return(
    <div>
       <h1>{props.question.text}</h1>
    <div onClick={()=>{
            theClickFunction1();            
        }}>
      <p>{props.question.choices[0].name}</p>
      <img src={props.question.choices[0].img} alt="Person 1"/>
    </div>
    <div onClick={()=>{
            theClickFunction2();            
        }}>
    <p>{props.question.choices[1].name}</p>
      <img src={props.question.choices[1].img} alt="Person 2"/>
    </div>
    <div onClick={()=>{
            theClickFunction3();            
        }}>
      <p>{props.question.choices[2].name}</p>
      <img src={props.question.choices[2].img} alt="Person"/>
    </div>
    <div onClick={()=>{
            theClickFunction4();            
        }}>
      <p>{props.question.choices[3].name}</p>
      <img src={props.question.choices[3].img} alt="Ned"/>
    </div>
    </div>
  )
}

export default Question;