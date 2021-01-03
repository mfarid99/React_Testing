import React, { useState} from "react"

export const Hand = (props)=> {

    const [name, setName]=useState("Mary");
    const [surname, setSurname] = useState("Smith")

    const handleNameChange = (e) => {
    setName(e.target.value = "Laura")
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value = "Wilson")
        }
    return (<> 
    
    
        <h1>{name} </h1>
        <button onClick={handleNameChange}>Click </button>
    

        
        <h1> {surname} </h1>
        <button onClick={handleSurnameChange}> Click</button>



    </>)

}