import React from "react";

export const Other = (props) => {

   const [num, setNum] = React.useState(1)


  const addOne = () => {
    setNum (num + 2)
    
  }

  return (<> 
  
  <h1> {num} </h1>
  <button onClick={addOne}>click me</button>
  
   </>)
};