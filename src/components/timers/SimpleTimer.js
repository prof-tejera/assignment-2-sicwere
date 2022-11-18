import React, { useState, useEffect, useContext } from 'react';
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import TimerControls from "../generic/TimerControls";
import { TimerContext } from '../../App'

const SimpleTimer = ({startTime, endTime, interval, index}) => {
	startTime = parseInt(startTime)
	endTime = parseInt(endTime)
	interval = parseInt(interval)
	index = parseInt(index)
	const [currentTime, setCurrentTime] = useState(startTime)
	const [timerIsRunning, setTimerIsRunning] = useState(false)
	const { isWorkoutOngoing, currentTimer, setCurrentTimer } = useContext(TimerContext)
	const [playDisabled, setPlayDisabled] = useState(index === currentTimer ? '' : 'disabled')
	const [resetDisabled, setResetDisabled] = useState('disabled')
	const [fastForwardDisabled, setFastForwardDisabled] = useState('disabled')
	const startTimer = (isRunning) => {
		setTimerIsRunning(isRunning)
		setResetDisabled('')
		setFastForwardDisabled('')
	}
	const resetTimer = () => {
		setCurrentTime(startTime)
		setPlayDisabled('')
		setResetDisabled('disabled')
		setFastForwardDisabled('disabled')
		setTimerIsRunning(false)
	}
	const endTimer = () => {
		setCurrentTime(endTime)
		setPlayDisabled('disabled')
		setResetDisabled('disabled')
		setFastForwardDisabled('disabled')
		setTimerIsRunning(false)
		setCurrentTimer(currentTimer + 1)
	}

	useEffect(() => {
		if(!isWorkoutOngoing) {
			setTimerIsRunning(false)
			setCurrentTime(startTime)
			setPlayDisabled('disabled')
			setResetDisabled('disabled')
			setFastForwardDisabled('disabled')
		}
		if(currentTimer === index)
			setPlayDisabled('')
		if(isWorkoutOngoing && currentTimer === index) {
			startTimer(true)
		}
	}, [isWorkoutOngoing, currentTimer, index, setTimerIsRunning, startTime])
	
	useEffect(() => {
		const t = setInterval(() => {
			console.log(currentTime)
			if(timerIsRunning) {
				if(currentTime !== endTime + (-interval))
					setCurrentTime(currentTime + interval)
				else {
					setPlayDisabled('disabled')
					setResetDisabled('disabled')
					setFastForwardDisabled('disabled')
					setTimerIsRunning(false)
					setCurrentTime(endTime)
					setCurrentTimer(currentTimer + 1)
				}
			} 
			else
				clearInterval(t)
		}, 1000)
		return () => {
			clearInterval(t)
		}
	}, [timerIsRunning, currentTime, endTime, interval, currentTimer, setCurrentTimer, index])
	return (
		<Panel>
			<DisplayTime currentTime={currentTime} size="9" text="Time: " />
			<TimerControls play={startTimer} playDisabled={playDisabled} reset={resetTimer} fastForward={endTimer} resetDisabled={resetDisabled} 
				fastForwardDisabled={fastForwardDisabled} index={index} />
		</Panel>
	)
};
export default SimpleTimer;