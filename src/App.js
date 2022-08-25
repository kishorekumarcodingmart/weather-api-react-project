import React, { useState } from 'react'
import Content from './Content'
import './App.css'


function App() {

  const [city, setCity] = useState("")

  const [api, setApi] = useState({})

  const [control, setControl] = useState(false)

  
  const getApi = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2a2f3ef6345388be6f495bd087fbf06`)
    .then(async (data)=>{ 
      setApi(await data.json())
      setControl(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='App'>
      <form onSubmit={getApi}>
        <input 
          placeholder='Enter the City'
          val = {city}
          onChange={(e)=>{setCity(e.target.value)}}
        />
        <button type='submit'>GET</button>
      </form> 
      {control && <Content details={api}/>}
    </div>
  )
}

export default App