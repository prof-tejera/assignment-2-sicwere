import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../components/generic/Button";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { TimerContext } from '../App'

const Timers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div`
  font-family: Times New Roman, serif
`;

const TotalTime = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`
const StartButton = styled.div`
  text-align: center;
  margin-top: 15px;
`

const TimersView = () => {
  const { timers, setCurrentTimer, isWorkoutOngoing, setIsWorkoutOngoing } = useContext(TimerContext)
  const totalSeconds = timers.reduce((total, current) => {
    return total + parseInt(current.totalSeconds.totalSeconds)
  }, 0)

  const playStyle = {
    backgroundColor: isWorkoutOngoing ? 'green' : 'gray',
    width: "200px", 
    height: "50px"
  }

  return (
    <>
      <TotalTime>
        Total workout time: { totalSeconds } seconds.
      </TotalTime>
      <StartButton>
        <Button text="Restart Workout" style={playStyle} onClick={() => { setIsWorkoutOngoing(false); setCurrentTimer(0); }} />
      </StartButton>
      <Timers>
        {timers.map((timer, index) => {
          return <Timer key={`timer-${index}`}> 
                    <TimerTitle>{timer.title}</TimerTitle>
                    {timer.title === 'Countdown' ? <Countdown startTime={timer.time.time} index={index} /> : timer.title === 'Stopwatch' ? <Stopwatch endTime={timer.time.time} index={index} /> 
                    : timer.title === 'XY' ? <XY startTime={timer.time.time} rounds={timer.rounds.rounds} index={index} /> 
                    : <Tabata workTime={timer.time.time} restTime={timer.restTime.restTime} rounds={timer.rounds.rounds} index={index} />}
                  </Timer>
        })}
      </Timers>
    </>
  );
};

export default TimersView;
