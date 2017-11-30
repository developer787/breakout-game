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
		case 'UPDATE_POSITION':
			return update(state, {
				ballX: action.payload.ballX,
				ballY: action.payload.ballY
			})
		case 'BALL_MOVE_RIGHT':
			return update(state, {
				ballX: state.ballX + state.dx
			})
		case 'INVERT_DIRECTION_X':
			return update(state, {
				dx: -state.dx
			})
			case 'INVERT_DIRECTION_Y':
			return update(state, {
				dy: -state.dy
			})
		default:
			return state;
	}
}
