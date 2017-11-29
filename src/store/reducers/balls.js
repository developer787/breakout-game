const initialState = {
	ballColor: "blue",
	ballRadius: "50",
	ballX: 150,
	ballY: 150
}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'BALL_INIT':
			return update(state, {
				ballColor: "red",
				ballRadius: "150"
			})
		default:
			return state;
	}
}
