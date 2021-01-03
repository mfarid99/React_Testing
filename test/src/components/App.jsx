import React from "react";
import {Other} from "./Other.jsx"
// import {Another} from "./Another.jsx"
// import {Well} from "./Well.jsx"
import {Hand} from "./Hand.jsx"



export const App = (props) => {

  const hello = "Hello World"
   
  return (<><h1> {hello} </h1>
  <Other/> 
  {/* <Another commando = {<h1>Terminator</h1>} />
  <Well cheese= {<h1>Gouda</h1>} /> */}
  <Hand />
  </>)
};