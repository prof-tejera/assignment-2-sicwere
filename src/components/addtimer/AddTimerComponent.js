import React, { useState, useContext } from "react";
import { TimerContext } from '../../App'

const AddTimerComponent = () => {
	const [timerMessage, setTimerMessage] = useState('Start Time')
	const [roundsHidden, setRoundsHidden] = useState({ visibility: 'hidden' })
	const [restTimeHidden, setRestTimeHidden] = useState({ visibility: 'hidden' })

	const { addTimer } = useContext(TimerContext)
	
	const newTimer = () => {
		const radio = document.querySelector('input[name="timer"]:checked')
		if(!radio) {
			alert('Please select a timer.')
			return
		}
		const timer = radio.value
		const time = document.getElementById('time').value
		if(!time) {
			alert(`Please enter the ${timerMessage.toLowerCase()}.`)
			return
		}
		const restTime = document.getElementById('restTime').value
		if(timer === 'tabata' && !restTime) {
			alert('Please enter the rest time')
			return
		}
		const isRounder = radio.className.includes('rounder')
		const rounds = document.getElementById('rounds').value
		if(isRounder && !rounds) {
			alert('Please enter the number of rounds.')
			return
		}
		try
		{
			const seconds = parseInt(time)
			const totalSeconds = timer === 'XY' ? seconds * parseInt(rounds)  : timer === 'Tabata' ? (seconds + parseInt(restTime)) * parseInt(rounds) : seconds
			addTimer(timer === 'Countdown' ? { title: "Countdown", totalSeconds: {totalSeconds}, time: {time} } :
					timer === 'Stopwatch' ? { title: "Stopwatch", totalSeconds: {totalSeconds}, time: {time} } :
					timer === 'XY'        ? { title: "XY", totalSeconds: {totalSeconds}, time: {time}, rounds: {rounds} } :
					{ title: "Tabata", totalSeconds: {totalSeconds}, time: {time}, restTime: {restTime}, rounds: {rounds} })
			alert(`${timer} successfully created.`)
		}
		catch(error)
		{
			alert(error)
		}
	}
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<input type="radio" name="timer" value="Countdown" onChange={() => { setTimerMessage('Start Time'); setRoundsHidden({ visibility: 'hidden' }); setRestTimeHidden({ visibility: 'hidden' }); }} />Countdown
					</td>
					<td>
						<input type="radio" name="timer" value="Stopwatch" onChange={() => { setTimerMessage('End Time'); setRoundsHidden({ visibility: 'hidden' }); setRestTimeHidden({ visibility: 'hidden' }); }} />Stopwatch
					</td>
					<td>
						<input type="radio" name="timer" className="rounder" value="XY" onChange={() => { setTimerMessage('Start Time'); setRoundsHidden({ visibility: 'visible' }); setRestTimeHidden({ visibility: 'hidden' }); }} />XY
					</td>
					<td>
						<input type="radio" name="timer" className="rounder" value="Tabata" onChange={() => { setTimerMessage('Work Time'); setRoundsHidden({ visibility: 'visible' }); setRestTimeHidden({ visibility: 'visible' }); }} />Tabata
					</td>
				</tr>
				<tr>
					<td>
						{timerMessage}: <input type="number" size="10" name="time" id="time" min="1" defaultValue="1" />
					</td>
					<td style={restTimeHidden} >
						Rest Time: <input type="number" size="10" name="restTime" id="restTime" min="1" defaultValue="1" />
					</td>
					<td style={roundsHidden}>
						Rounds: <input type="number" size="10" name="rounds" id="rounds" min="1" defaultValue="1" />
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td colSpan="4">
						<button onClick={newTimer}>Add Timer</button>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default AddTimerComponent