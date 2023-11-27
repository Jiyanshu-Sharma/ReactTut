import React from 'react'
import './books.css'

function books(props) {
  return (
    <div className='container'>

       

        <h1>{props.title}</h1>
        <img src={props.imgsrc} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quisquam blanditiis expedita similique, sed suscipit ad. Similique perferendis ratione aspernatur.</p>
        <h3>Price : {props.fee}</h3>
        <a href="https://picsum.photos/" target='blank'> <button>Buy Now</button></a>
        
      
    </div>
  )
}

export default books
