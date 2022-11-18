import React, { useState, useEffect, useContext } from 'react';
import Panel from "./Panel";
import Button from "./Button";
import { TimerContext } from '../../App'

const TimerControls = ({play, playDisabled, reset, resetDisabled, fastForward, fastForwardDisabled, index }) => {
	const { currentTimer, removeTimer, isWorkoutOngoing, setIsWorkoutOngoing } = useContext(TimerContext)
	const playIcon = String.fromCodePoint(0x25B6)
	const pauseIcon = String.fromCodePoint(0x23F8)
	const [toggleTime, setTimerToggle] = useState(true)
	const [playButtonText, setPlayButtonText] = useState(playIcon)
	const playStyle = {
		backgroundColor: playDisabled ? 'gray' : 'green'
	}
	const resetStyle = {
		backgroundColor: resetDisabled ? 'gray' : 'blue',
		fontWeight: 'bold'
	}
	const fastForwardStyle = {
		backgroundColor: fastForwardDisabled ? 'gray' : 'red',
	}
	const togglePlay = () => {
		setIsWorkoutOngoing(true)
		play(toggleTime)
		setPlayButtonText(toggleTime ? pauseIcon : playIcon)
		setTimerToggle(!toggleTime)
	}
	useEffect(() => {
		if(isWorkoutOngoing && currentTimer === index) {
			setTimerToggle(false)
			setPlayButtonText(pauseIcon)
		}
	}, [isWorkoutOngoing, currentTimer, index, pauseIcon])
	useEffect(() => {
		if(resetDisabled === 'disabled') {
			setTimerToggle(true)
			setPlayButtonText(playIcon)
		}
	},[resetDisabled, playIcon])
	return (
		<Panel style={{ marginTop: '15px' }}>
			<Button text={playButtonText} style={playStyle} disabled={playDisabled} onClick={() => { togglePlay() }} />
			<Button text="&#8634;" style={resetStyle} disabled={resetDisabled} onClick={() => { reset() }} />
			<Button text="&#9658;&#9658;" disabled={fastForwardDisabled} style={fastForwardStyle} onClick={() => { fastForward() }} />
			<Button text="X" style={{ backgroundColor: 'black' }} onClick={() => { play(false); removeTimer(index) }} />
		</Panel>
	)
}

export default TimerControls;