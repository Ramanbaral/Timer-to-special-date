import React, {useState, useEffect, useRef} from 'react'
import './App.css';

function App() {
  const [days,  setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const countDownDate = new Date('November 23, 2021 00:00:00')

  let interval = useRef()

  function setTime() {
    const currentTime = new Date()
    let diff = Math.floor((countDownDate - currentTime)/1000)
    if(diff === 0){
      clearInterval(interval.current)
    }

    else{
      const day = Math.floor((diff/86400))
      diff = diff - (day*86400)
      const hour  = Math.floor((diff/3600))
      diff = diff - (hour*3600)
      const min = Math.floor(diff/60)
      diff = diff - (min*60)
      const sec = Math.floor(diff)
  
      setDays(day)
      setHours(hour)
      setMinutes(min)
      setSeconds(sec)

    }

  }

  useEffect(() =>{
    setTime()
    interval = setInterval(() => {
      setTime()
    }, 1000)

    return () => {
      clearInterval(interval.current)
    }
  },[])


  return(
    <React.Fragment>
    <div className="text">My Birthday is coming in </div>
    <div className='center'>
      <div className="timer-container">

        <div className="timebox">
          <div className="digit">{days}</div>
          <div className="unit">Days</div>
        </div>

        <div className="timebox">
          <div className="digit">{hours}</div>
          <div className="unit">Hours</div>
        </div>

        <div className="timebox">
          <div className="digit">{minutes}</div>
          <div className="unit">Minutes</div>
        </div>

        <div className="timebox">
          <div className="digit">{seconds}</div>
          <div className="unit">Seconds</div>
        </div>
        
      </div>
    </div>
    </React.Fragment>
  )
}

export default App
