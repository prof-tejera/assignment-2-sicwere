import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddTimerView from './views/AddTimerView'

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Timers</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
        <li>
          <Link to="/add">Add Timer</Link>
        </li>
      </ul>
    </nav>
  );
};

export const TimerContext = createContext(null)

const App = () => {
  const [timers, setTimer] = useState([])
  const [currentTimer, setCurrentTimer] = useState(0)
  const [isWorkoutOngoing, setIsWorkoutOngoing] = useState(false)
  
  const addTimer = (timer) => {
    setTimer([...timers, timer])
  }

  const removeTimer = (removeIndex) => {
    setTimer(timers.filter((_, index) => { return index !== removeIndex }))
  }

  const timerObj = {
    timers,
    addTimer,
    removeTimer,
    currentTimer,
    setCurrentTimer,
    isWorkoutOngoing,
    setIsWorkoutOngoing
  }

  return (
    <TimerContext.Provider value={timerObj}>
      <Container>
        <Router>
          <Nav />
          <Routes>
            <Route path="/docs" element={<DocumentationView />} />
            <Route path="/" element={<TimersView />} />
            <Route path="/add" element={<AddTimerView />} />
          </Routes>
        </Router>
      </Container>
    </TimerContext.Provider>
  );
};

export default App;
