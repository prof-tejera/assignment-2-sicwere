import React, { useState, useEffect, useContext } from 'react';
import Panel from "../generic/Panel";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import TimerControls from "../generic/TimerControls";
import { TimerContext } from '../../App'

const XY = ({startTime, rounds, index}) => {
	startTime = parseInt(startTime)
	rounds = parseInt(rounds)
	const [currentTime, setCurrentTime] = useState(startTime)
	const [currentRound, setCurrentRound] = useState(1)
	const [timerIsRunning, setTimerIsRunning] = useState(false)
	const [currentMessage, setCurrentMessage] = useState(`${currentRound} of ${rounds}`)
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
		setCurrentRound(1)
		setPlayDisabled('')
		setResetDisabled('disabled')
		setFastForwardDisabled('disabled')
		setCurrentMessage(`1 of ${rounds}`)
		setTimerIsRunning(false)
	}
	const endTimer = () => {
		setCurrentTime(0)
	 	setCurrentRound(rounds)
		setPlayDisabled('disabled')
		setResetDisabled('disabled')
		setFastForwardDisabled('disabled')
		setCurrentMessage(`${rounds} of ${rounds}`)
		setTimerIsRunning(false)
		setCurrentTimer(currentTimer + 1)
	}
	useEffect(() => {
		if(isWorkoutOngoing && currentTimer === index) {
			startTimer(true)
		}
	}, [isWorkoutOngoing, currentTimer, index])
	useEffect(() => {
		if(!isWorkoutOngoing) {
			setTimerIsRunning(false)
			setCurrentTime(startTime)
			setCurrentRound(1)
			setCurrentMessage(`${currentRound} of ${rounds}`)
			setPlayDisabled('disabled')
			setResetDisabled('disabled')
			setFastForwardDisabled('disabled')
		}
		if(currentTimer === index)
			setPlayDisabled('')
	}, [isWorkoutOngoing, currentTimer, index, setTimerIsRunning, startTime, currentRound, rounds])
	useEffect(() => {
		const t = setInterval(() => {
			console.log(currentTime)
			if(timerIsRunning) {
				if(currentTime > 1)
					setCurrentTime(currentTime - 1)
				else {
					if(currentRound < rounds) {
						setCurrentRound(currentRound + 1)
						setCurrentTime(startTime)
						setCurrentMessage(`${currentRound + 1} of ${rounds}`)
					}
					else {
						setCurrentTime(0)
						setPlayDisabled('disabled')
						setResetDisabled('disabled')
						setFastForwardDisabled('disabled')
						setTimerIsRunning(false)
						setCurrentTimer(currentTimer + 1)
					}
				}
			}
			else
				clearInterval(t)
		}, 1000)
		return () => {
			clearInterval(t)
		}
	}, [timerIsRunning, startTime, rounds, currentTime, currentRound, currentTimer, setCurrentTimer])
	return (
			<Panel>
				<Panel>
					<DisplayTime currentTime={currentTime} size="7" text="Time:" gap="20px"/>
				</Panel>
				<Panel>
					<DisplayRounds currentRound={currentMessage} size="7" text="Round:" />
				</Panel>
				<TimerControls play={startTimer} playDisabled={playDisabled} reset={resetTimer} fastForward={endTimer} resetDisabled={resetDisabled} 
					fastForwardDisabled={fastForwardDisabled} index={index} />
			</Panel>
		)
	};

export default XY;
