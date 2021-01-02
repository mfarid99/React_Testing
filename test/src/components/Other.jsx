import React from "react";

export const Other = (props) => {

   const [letter, setLetter] = React.useState(1)


  const addOne = () => {
    setLetter (letter * -2)
    console.log(letter)
    
  }

  return (<> 
  
  <h1> {letter} </h1>
  <button onClick={addOne}>click me</button>
  
   </>)
};