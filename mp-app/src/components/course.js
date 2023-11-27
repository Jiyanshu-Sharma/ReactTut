import React from 'react'
import './course.css'

function course(props) {
  return (
    <div className='container'>
    <div className="heading">
    <h1>{props.title} </h1>
  </div>
  <h3>fees : {props.fee}/- </h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae
     iste nobis accusamus fuga recusandae est, saepe, illo dolores, quam nesciunt veniam omnis eum molestias sint. Alias provident consequatur illo nulla consectetur, optio dolorum perspiciatis.</p>
  <button>Enroll !!</button>
        
      
    </div>
  )
}

export default course
