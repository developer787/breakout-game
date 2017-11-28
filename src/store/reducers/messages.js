const initialState = {
	welcome: "Hello!"
}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'WELCOME':
			return update(state, {
				welcome: action.payload
			})
		default:
			return state;
	}
}
