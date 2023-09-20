import React, {useState} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(60);
    setTimeout(() => {
        if(timer!==1){
            setTimer(timer-1);
        }else {
            setTimer(60);
            window. location. reload();
        }
    }, 1000);
  return (
    <div className="timer-circle">
        {timer}
    </div>
  )
}

export default Timer;