import React from 'react' 
import Greetings from './components/Greetings.js'; 
import Books from './components/Books.js'
import Naming from './components/naming';
import Navbar from './components/Navbar.js'

import Counter from './components/counter';



import './App.css'




function App() {
  return (
    <>
  
      <Naming />
      <Counter />

      <Greetings></Greetings> 
      <input type="search" placeholder='Search courses' className='searchbox' />
      <Books title = "Java Programming" imgsrc = "https://picsum.photos/200/300" fee = "1000"></Books>
      <Books title = "Python Programming" imgsrc = "https://picsum.photos/250/300" fee = "2000"></Books>
      <Books title = "C Programming" imgsrc = "https://picsum.photos/300/300" fee = "1500"></Books>
      <Books title = "C++ Programming" imgsrc = "https://picsum.photos/350/300" fee = "6000"></Books>
      <Books title = "React JS Development" imgsrc = "https://picsum.photos/400/300" fee = "8000"></Books>
      
      
      <Navbar />


     
    </>
  )
}

export default App






