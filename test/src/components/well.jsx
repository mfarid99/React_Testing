import React from "react";
 

export const Well = (props) => {

  const hello = "Hello Gangsta"
  const [level, setLevel] = React.useState(11)

  const addOne = () => {
    setLevel (level * 4)
  }
   
  return (<>
  <h1> {level} </h1>
  <button onClick={addOne}>Quad</button>
  {props.cheese} 
  
  </>)
};