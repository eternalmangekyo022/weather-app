import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

// https://api.api-ninjas.com/v1/geocoding

const key = '1JR6bWdRG8I9CttLyT9+Zg==F0TGXt3ywpL014Ov';
const weatherKey = '85d9690f3f9bf9eabf651293a1047621';
const dev = true

export default function App() {
  const [location, setLocation] = useState<GeoLocation>();
  const [circleActive, setCircleActive] = useState(false);
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      setErrors([]);
      const locationStatus = await navigator.permissions.query({ name: 'geolocation' })
      
      if(locationStatus.state === 'denied') setErrors(prev => [...prev, 'Please enable location permissions!'])
      //navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lon } }) => {
      //  const { data } = axios.get('');
      //})
    }

    loadData()
  }, [])

  useEffect(() => {
    if(!location) return

  }, [location])


  return <div className='w-screen h-screen relative bg-[#15207e]'>
    <div className={`loading-circle${circleActive ? ' active': ''}`}>

    </div>
    <input className='absolute left-1/2 -translate-x-1/2 top-32 rounded-md h-10 text-center text-xl tracking-wider' type="text" disabled={circleActive} value={input} onChange={e => setInput(e.target.value)} onKeyDown={({ key }) => {
      if(key === 'Enter' && !circleActive) {
        setCircleActive(true)
        setTimeout(() => setCircleActive(false), 3000)
      }
    }} />
    {errors.length ? <div 
      className='absolute right-10 bottom-10 w-[20rem] max-h-[80vh]
      flex flex-col gap-[2vh]'
      style={{ height: `${errors.length * 10 + (errors.length - 1) * 2}vh` }}
    >
     {errors.map((i, idx) => <div key={idx} className='w-full h-[10vh] bg-neutral-300 rounded-3xl flex 
      justify-center items-center relative transition-[.3s] hover:bg-red-100'>
        <span style={{ fontFamily: 'Roboto Mono' }} className='text-lg text-center'>{i}</span>
      </div>)}
    </div>: null}
  </div>
}