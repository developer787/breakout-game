import { combineReducers } from "redux"
import classNames from "./classNames"
import canvas from "./canvas"
import messages from "./messages"
import sound from "./sound"

const appReducer = combineReducers({
    canvas,
    classNames,
    messages,
    sound
})
const rootReducer = (state, action) => {
  if (action.type === 'HARD_RESET') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
