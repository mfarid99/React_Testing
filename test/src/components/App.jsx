import React from "react";
import {Other} from "./Other.jsx"
import {Another} from "./Another.jsx"
import {Well} from "./Well.jsx"



export const App = (props) => {

  const hello = "Hello World"
   
  return (<><h1> {hello} </h1>
  <Other/> 
  <Another/>
  <Well cheese= {<h1>Gouda</h1>} />
  </>)
};