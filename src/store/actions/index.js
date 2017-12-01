export const hardreset = () => ({ type: 'HARD_RESET' })
export const welcome = (action) => ({
	type: 'WELCOME',
	payload: action.payload
})
export const CANVAS_INIT = (action) => {
	return {
		type: 'CANVAS_INIT',
		payload: action
	}
}
export const BALL_MOVE_LEFT = () => ({ type: 'BALL_MOVE_LEFT' })
export const BALL_MOVE_RIGHT = () => ({ type: 'BALL_MOVE_RIGHT' })
export const INVERT_DIRECTION_X = () => ({ type: 'INVERT_DIRECTION_X' })
export const INVERT_DIRECTION_Y = () => ({ type: 'INVERT_DIRECTION_Y' })
export const PLAY_POP = () => ({ type: 'PLAY_POP' })
export const STOP_POP = () => ({ type: 'STOP_POP' })
export const DONE = () => ({ type: 'STOP_POP' })





export const BALL_MOVE = () => ({ type: 'BALL_MOVE' })
export const SQUARE_INIT = (action) => {
	return {
		type: 'SQUARE_INIT',
		payload: action
	}
}
export const UPDATE_POSITION = (action) => {
	return {
		type: 'UPDATE_POSITION',
		payload: action
	}
}


export const PLAY_MUSIC = () => ({ type: 'PLAY_MUSIC' })
export const STOP_MUSIC = () => ({ type: 'STOP_MUSIC' })
