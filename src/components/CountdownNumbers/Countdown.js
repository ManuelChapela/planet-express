import React, {useEffect, useRef, useState} from 'react'

export const Countdown = ({numbers, timeUnit}) => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('Dec 31, 2021 23:59:59').getTime()
        interval = setInterval(() => {
           
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60) / 1000));

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        
        }, 1000);
    };

    useEffect(()=> {
        startTimer();
        return () => clearInterval(interval.current)
    })

    return (
        <div className='timer-container'>
         
            <div>
                <p className='timer-container__numbers'>{timerDays}</p>
                <p><small>Days</small></p>
            </div>
                
                <p>:</p>

            <div>
                <p className='timer-container__numbers'>{timerHours}</p>
                <p><small>Hours</small></p>
            </div>
               
                <p>:</p>

            <div>
                <p className='timer-container__numbers'>{timerMinutes}</p>
                <p><small>Minutes</small></p>
            </div>
               
                <p>:</p>

            <div>
                <p className='timer-container__numbers'>{timerSeconds}</p>
                <p><small>Seconds</small></p>
            </div>

        </div>
        
    )
}



