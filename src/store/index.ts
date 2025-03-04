import {configureStore} from "@reduxjs/toolkit"
import appslice from "./features/app"


const store = configureStore({
    reducer:{ 
        app:appslice
     }
})


export type AppDispatch = typeof store.dispatch
export default  store