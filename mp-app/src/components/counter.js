import React, { useState }  from 'react'



function Counter() {
  const [Count , setCount] = useState(0);
  
  

  const increase = () =>{
    
    setCount(Count+1);
  }
     
  return (
    <>
      <h1>This is Counter </h1>
      <h1>{Count}</h1>
      <button onClick={increase}>Click Me </button>
      
    </>
  )
}

export default Counter
