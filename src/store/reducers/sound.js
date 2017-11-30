const initialState = {
	music: "STOPPED",
	pop: "STOPPED"
}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'PLAY_MUSIC':
			return update(state, {
				music: "PLAYING"
			})
		case 'STOP_MUSIC':
			return update(state, {
				music: "STOPPED"
			})
		case 'PLAY_POP':
			return update(state, {
				pop: "PLAYING"
			})
		case 'STOP_POP':
			return update(state, {
				pop: "STOPPED"
			})
		default:
			return state;
	}
}
