const initialState = {
	mainWrapper: "mainWrapper"
}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'HIDE_ALL_WINDOWS':
			return update(state, {
				mainWrapper: "hide"

			})
		case 'SHOW_ALL_WINDOWS':
			return update(state, {
				mainWrapper: "mainWrapper"

			})
		default:
			return state;
	}
}
