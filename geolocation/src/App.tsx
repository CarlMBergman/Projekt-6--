import './App.css'
import { useState } from 'react'
import { getPosition, reverseGeocode } from './Geolocation'

function App() {
  const [message, setMessage] = useState<string>('')
  const [adress, setAdress] = useState<string>('')
  const lat: number = 9.3297408
  const long: number = 18.0224

  return (
    <div className='vertical-layout'>
      <header>
        <h1>Geolocation</h1>
      </header>
      <main>
        
      <button onClick={ () => getPosition(setMessage) }>Hitta position</button>
        <p>{ message }</p>
        <button onClick={ () => reverseGeocode(lat, long, setAdress) }>Hämta närmsta adress!</button>
        <p>{ adress }</p>
      </main>
    </div>
  )
}

export default App
