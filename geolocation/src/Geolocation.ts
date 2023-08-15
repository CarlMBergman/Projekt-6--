type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

  function getPosition(setMessage: ReactSetState<string>) {

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

  const apiKey: string = '8aac0f952e762e729c70073368fd5947'
  const numOfResponses: number = 5

  async function reverseGeocode(lat: number, long: number, setAdress: ReactSetState<string>) {
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=${numOfResponses}&appid=${apiKey}`
    const response = await fetch(url)
    const data: Place[] = await response.json()
    console.log(data);
    const firstAdress = data[0].name
    setAdress(firstAdress)
  }

  interface Place {
    name: string;
  }

export  { getPosition, reverseGeocode }