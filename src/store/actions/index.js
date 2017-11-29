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
export const BALL_MOVE = () => ({ type: 'BALL_MOVE' })

export const PLAY_MUSIC = () => ({ type: 'PLAY_MUSIC' })
export const STOP_MUSIC = () => ({ type: 'STOP_MUSIC' })
