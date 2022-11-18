import Input from "./Input";

const DisplayRounds = ({currentRound, size, text, gap, ...props}) => {
	currentRound ||= 1
	gap ||= '5px'
	size ||= '5'
  	const handleChange = event => {
  	}
	return (
		<label style={{ fontSize: '20px' }}>
			{text}
			<Input type="text" size={size} style={{ marginLeft: gap }} value={currentRound} onChange={handleChange} {...props} />
		</label>
	)
}

export default DisplayRounds;