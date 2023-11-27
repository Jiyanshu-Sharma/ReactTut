import React, { useState } from 'react'

const cssStyle = {};

let cdate = new Date();
cdate = cdate.getHours();                

let text = "";
if(cdate >= 1 && cdate < 12)
{
      text = "Good Morning";
      cssStyle.color = "green";
      
      
}
else if(cdate >= 12 && cdate < 19)
{
      text = "Good Afternoon";
      cssStyle.color = "red";
} 
else { 
      text = "Good Evening";
      cssStyle.color = "blue";
}

function Greetings() {
      const [gen , setgen] = useState("Sir");
      const gender =()=>{
            setgen("Madam");
      }
  return (
    <div>
      <button onClick = {gender}>Female</button>
         <h1>Hello {gen} , <span  style = {cssStyle} > {text} </span>  </h1>
      
    </div>
  )
}

export default Greetings
