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
  
  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '65rem',
    height: '50%',
    borderRadius: '10px',
    color: 'white',
    marginTop: '5rem',
    fontFamily: 'Merriweather',
    fontSize: '1rem'
  }

  const itemStyle = {
    padding: '1rem'
  }

  const imgStyle = {
    borderRadius: '75px',
    width: '200px',
    height: '200px'
  }

  const pStyle = {
    fontSize: '1.25rem'
  }

  return(
    <div style={divStyle}>
       <h1>{props.question.text}</h1>
    <div onClick={()=>{
            theClickFunction1();            
        }}
        style={itemStyle}>
      <p style={pStyle}>{props.question.choices[0].name}</p>
      <img src={props.question.choices[0].img} style={imgStyle} alt="Person 1"/>
    </div>
    <div onClick={()=>{
            theClickFunction2();            
        }}
        style={itemStyle}>
    <p style={pStyle}>{props.question.choices[1].name}</p>
      <img src={props.question.choices[1].img} style={imgStyle} alt="Person 2"/>
    </div>
    <div onClick={()=>{
            theClickFunction3();            
        }}
        style={itemStyle}>
      <p style={pStyle}>{props.question.choices[2].name}</p>
      <img src={props.question.choices[2].img} style={imgStyle} alt="Person"/>
    </div>
    <div onClick={()=>{
            theClickFunction4();            
        }}
        style={itemStyle}>
      <p style={pStyle}>{props.question.choices[3].name}</p>
      <img src={props.question.choices[3].img} style={imgStyle} alt="Ned"/>
    </div>
    </div>
  )
}

export default Question;