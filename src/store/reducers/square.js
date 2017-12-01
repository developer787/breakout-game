const initialState = {
	cuadroX: 0,
	cuadroY: 0,
	cuadroAltura: 200,
	cuadroAnchura: 200
}
export default (state = initialState, action) => {
	const update = (
		state,
		mutations) => Object.assign({}, state, mutations)
	switch (action.type) {
		case 'SQUARE_INIT':
			return update(state, {
				cuadroX: action.payload.cuadroX,
				cuadroY: action.payload.cuadroY,
				cuadroAltura: action.payload.cuadroAltura,
				cuadroAnchura: action.payload.cuadroAnchura
			})
		default:
			return state;
	}
}
