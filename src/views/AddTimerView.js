import React from "react";
import styled from "styled-components";

import AddTimerComponent from "../components/addtimer/AddTimerComponent";

const Container = styled.div`
  display: grid;
  width: 50%;
  margin: 0 auto;
  grid-template-area: 
  	'title'
  	'component';
`;

const Title = styled.div`
  font-size: 2rem;
`;

const AddTimerView = () => {
	return (
		<Container>
      	<Title style={{gridItem: 'title'}}>Add Timer</Title>
  		  <AddTimerComponent style={{gridItem: 'component'}}/>
    </Container>
	)	
}

export default AddTimerView