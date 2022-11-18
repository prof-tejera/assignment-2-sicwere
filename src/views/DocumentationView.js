import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Panel from "../components/generic/Panel";
import Input from "../components/generic/Input";
import Button from "../components/generic/Button";
import DisplayTime from "../components/generic/DisplayTime"
import DisplayRounds from "../components/generic/DisplayRounds"
import TimerControls from "../components/generic/TimerControls"
import SimpleTimer from "../components/timers/SimpleTimer"
import Stopwatch from "../components/timers/Stopwatch"
import Countdown from "../components/timers/Countdown"
import XY from "../components/timers/XY"
import Tabata from "../components/timers/Tabata"
import AddTimerComponent from '../components/addtimer/AddTimerComponent'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Panel " 
          component={<Panel />}
          propDocs={[
            {
              prop: "style",
              description: "Adds CSS styles to the Panel",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "props",
              description: "Any non-CSS properties for the component",
              type: "object",
              defaultValue: "{}",
            },
          ]}
        />
        <DocumentComponent
          title="Input " 
          component={<Input />}
          propDocs={[
            {
              prop: "props",
              description: "Any properties for the component",
              type: "object",
              defaultValue: "{}",
            },
          ]}
        />
      <DocumentComponent
          title="Button " 
          component={<Button />}
          propDocs={[
            {
              prop: "text",
              description: "The text to display on the Button",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "style",
              description: "Adds CSS styles to the Button",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "props",
              description: "Any additional properties for the component",
              type: "object",
              defaultValue: "{}",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime " 
          component={<DisplayTime />}
          propDocs={[
            {
              prop: "currentTime",
              description: "The current time displayed in the textbox",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "text",
              description: "The text that is shown in the label beside the textbox",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "size",
              description: "The size of the textbox, in number of characters",
              type: "number",
              defaultValue: "10",
            },
            {
              prop: "gap",
              description: "The space between the label text and the textbox",
              type: "string",
              defaultValue: "5px",
            },
            {
              prop: "props",
              description: "Any additional properties for the component",
              type: "object",
              defaultValue: "{}",
            },
          ]}
        />
         <DocumentComponent
          title="DisplayRounds " 
          component={<DisplayRounds />}
          propDocs={[
            {
              prop: "currentRound",
              description: "The current round displayed in the textbox",
              type: "number",
              defaultValue: "1",
            },
            {
              prop: "text",
              description: "The text that is shown in the label beside the textbox",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "size",
              description: "The size of the textbox, in number of characters",
              type: "number",
              defaultValue: "5",
            },
            {
              prop: "gap",
              description: "The space between the label text and the textbox",
              type: "string",
              defaultValue: "5px",
            },
            {
              prop: "props",
              description: "Any additional properties for the component",
              type: "object",
              defaultValue: "{}",
            },
          ]}
        />
        <DocumentComponent
          title="TimerControls " 
          component={<TimerControls />}
          propDocs={[
            {
              prop: "play",
              description: "The function to run when the play button is clicked.",
              type: "string",
              defaultValue: "",
            },
             {
              prop: "playDisabled",
              description: "Determines whether the play button is disabled. Pass string 'disabled' to disable.",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "reset",
              description: "A callback function that resets the timer",
              type: "function",
              defaultValue: "null",
            },
            {
              prop: "resetDisabled",
              description: "Determines whether the reset button is disabled. Pass string 'disabled' to disable.",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "fastForward",
              description: "A callback function that \"fast-forwards\" the timer to its end",
              type: "function",
              defaultValue: "null",
            },
            {
              prop: "fastForwardDisabled",
              description: "Determines whether the \"fast-forwards\" button is disabled. Pass string 'disabled' to disable.",
              type: "string",
              defaultValue: "",
            },
            {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "",
            }
          ]}
        />
        <DocumentComponent
          title="SimpleTimer " 
          component={<SimpleTimer />}
          propDocs={[
            {
              prop: "startTime",
              description: "The start time of the timer",
              type: "number",
              defaultValue: "",
            },
            {
              prop: "endTime",
              description: "The end time of the timer",
              type: "number",
              defaultValue: "",
            },
            {
              prop: "interval",
              description: "The number to add or subtract from the timer's time for each second",
              type: "number",
              defaultValue: "0",
            },
             {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "null",
            }
          ]}
        />
        <DocumentComponent
          title="Stopwatch " 
          component={<Stopwatch />}
          propDocs={[
            {
              prop: "endTime",
              description: "The end time of the timer",
              type: "number",
              defaultValue: "",
            },
            {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "",
            }
          ]}
        />
        <DocumentComponent
          title="Countdown " 
          component={<Countdown />}
          propDocs={[
            {
              prop: "startTime",
              description: "The start time of the timer",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "",
            },
          ]}
        />
        <DocumentComponent
          title="XY " 
          component={<XY />}
          propDocs={[
            {
              prop: "startTime",
              description: "The start time for each round of the timer",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "rounds",
              description: "The number of rounds",
              type: "number",
              defaultValue: "1",
            },
            {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "",
            }
          ]}
        />
        <DocumentComponent
          title="Tabata " 
          component={<Tabata />}
          propDocs={[
            {
              prop: "workTime",
              description: "The start time for the work phase of each round of the timer",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "restTime",
              description: "The start time for the rest phase of each round of the timer",
              type: "number",
              defaultValue: "0",
            },
            {
              prop: "rounds",
              description: "The number of rounds",
              type: "number",
              defaultValue: "1",
            },
            {
              prop: "index",
              description: "The order in which the associated timer appears in the workout.",
              type: "number",
              defaultValue: "",
            }
          ]}
        />
        <DocumentComponent
          title="AddTimerComponent " 
          component={<AddTimerComponent />}
          propDocs={[]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
