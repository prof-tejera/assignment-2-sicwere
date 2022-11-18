import SimpleTimer from './SimpleTimer';

const Countdown = ({startTime, index}) => {
	return (
		<SimpleTimer startTime={startTime} endTime="0" interval="-1" index={index} />
	)
};
export default Countdown;
