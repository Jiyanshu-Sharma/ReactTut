import React, { useState } from 'react'

function Naming() {

  const fullname = ["Jiyanshu" , "Sharma"];
  const data = [1 , 20 , ...fullname , "Male"];
  console.log(fullname);
  console.log(data);

  const cityname = {
    first : "Jiyanshu",
    second : "Sharma"
  };
  const details  = {
    id : 1 , 
    ...cityname ,
    age : 20
  }
  console.log(cityname);
  console.log(details);



  const [Name , setName] = useState("");
  const [Fname , setFname] = useState("");
  const [Bg , setBg] = useState("red");
  const changed =(event)=>{
    setName(event.target.value);
  
  }
  const clicked = () => {
    setFname(Name); 
   
  }
  const clicked2 = () => { 
    setBg("purple")

  }
  return (
    <div style = {{backgroundColor:Bg}}>
      <h1>Hello {Fname}</h1>
      <input type="text" placeholder='Enter Name' defaultValue="" onChange={changed} />
      <button onClick={clicked} onMouseOver={clicked2} >Submit</button>
      
    </div>
  )
}

export default Naming
