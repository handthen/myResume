import { combineReducers } from "redux";
import counter from "./counter"
import app from "./app"
import { countWatch } from "./counter"
import { appWatch } from "./app"


export default combineReducers({
    counter,
    app
})

export const Watchs = [appWatch(), countWatch()]
