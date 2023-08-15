import './App.css'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState<string>('')

  function getPosition() {

    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        // let p = position
        console.log('position is: ', position);
        let lat: number = position.coords.latitude
        let long: number = position.coords.longitude
        
        setMessage(`Din position är: lat:${lat} long:${long}`)
      }, error => {
        console.log('vi blev nekade', error);
        setMessage('Vi behöver åtkomst till din platsinformation')
      })
    }
  }

  return (
    <div className='vertical-layout'>
      <header>
        <h1>Geolocation</h1>
      </header>
      <main>
        <button onClick={ getPosition }>Hitta position</button>
        <p>{ message }</p>
      </main>
    </div>
  )
}

export default App
