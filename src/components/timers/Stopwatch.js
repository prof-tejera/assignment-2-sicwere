import SimpleTimer from './SimpleTimer';

const Stopwatch = ({endTime, index}) => {
	return (
		<SimpleTimer startTime="0" endTime={endTime} interval="1" index={index} />
	)
};

export default Stopwatch;
