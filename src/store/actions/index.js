export const hardreset = () => ({ type: 'HARD_RESET' })
export const welcome = (action) => ({ 
	type: 'WELCOME', 
	payload: action.payload 
})
export const PLAY_MUSIC = () => ({ type: 'PLAY_MUSIC'})
export const STOP_MUSIC = () => ({ type: 'STOP_MUSIC'})
