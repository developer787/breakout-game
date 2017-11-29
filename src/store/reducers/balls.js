const initialState = {
	ballColor: "blue",
	ballRadius: "50",
	ballX: 150,
	ballY: 150,
	dx: 2,
	dy: -2
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
		case 'BALL_MOVE_RIGHT':
			return update(state, {
				ballX: state.ballX + 2
			})
		case 'BALL_MOVE_LEFT':
			return update(state, {
				ballX: state.ballX - 2
			})
		default:
			return state;
	}
}
