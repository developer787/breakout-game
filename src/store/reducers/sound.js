const initialState = {
	music: "STOPPED",
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
		default:
			return state;
	}
}
