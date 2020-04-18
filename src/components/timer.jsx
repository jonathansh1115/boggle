import React, { useState } from 'react'
import './styles/timer.css'
import {GAME_STATE} from '../game_state_enum.js';


export default (props) => {

    const { setGameState, setButtonText } = props

    const [timeLeft, setTimeLeft] = useState(120000)    // 2 min

    // this func deduct time 
    const timer = (sec, time) => {
        setTimeout(() => {
            let tempTime = time - sec
            setTimeLeft(tempTime)
        }, sec);
    }

    timer(1000, timeLeft)
    
    // this func just makes the display looks nice
    const display_min = () => {
        
        let min = Math.floor(timeLeft/1000/60)
        
        if (min < 0) {
            return '0'
        } else {
            return min
        }
        
    }

    // this func also just makes the display looks nice
    const display_sec = () => {

        let sec = timeLeft/1000%60

        if (sec === 0) {
            return '00'
        }

        if (sec < 10 && sec >=0) {
            return `0${sec}`
        }

        if (sec < 0) {
            return '00'
        }

        if (!(sec === 0) || !(sec < 10) || !(sec < 0)){
            return sec
        }
    }
    
    // change the GAME_STATE to ended and change the button text
    const updateGameState = (time) => {
        if (time === 0) {
            setGameState(GAME_STATE.ENDED)
            setButtonText('Start a new game!')
        }
    }

    updateGameState(timeLeft)
    
    return (
        <div className='timer_box'>
            <h4>Time Remaining: </h4>
            &nbsp;
            &nbsp;
            <h2>{display_min()}:{display_sec()}</h2>
        </div>
    )
}