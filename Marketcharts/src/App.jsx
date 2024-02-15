import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[data,SetData] = useState();
  
 

  return (
    <div>     
      <input
      
      id={'my-input'}
      type={'text'}
      value={data}
      placeholder={'Enter Color'}
      onChange={event =>{
      SetData(event.target.value)
      }}
      
      >
      </input>
      <br /> 
      <br />
      You Entered : {data} 
      <br />
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="100" x="100" y="50" rx="20" ry="20" fill={data}/> 
      </svg>    
    </div>
  )
}

export default App
