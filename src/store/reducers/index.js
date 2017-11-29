import { combineReducers } from "redux"
import classNames from "./classNames"
import canvas from "./canvas"
import messages from "./messages"
import balls from "./balls"

import sound from "./sound"

const appReducer = combineReducers({
    canvas,
    classNames,
    messages,
    balls,
    sound
})
const rootReducer = (state, action) => {
  if (action.type === 'HARD_RESET') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
