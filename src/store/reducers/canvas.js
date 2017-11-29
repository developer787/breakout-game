const initialState = {}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'CANVAS_INIT':
			const { canvas, width, height, ctx } = action.payload
			return update(state, {
				canvas: canvas,
				ctx: ctx,
				width: width,
				height: height
			})
		default:
			return state;
	}
}
