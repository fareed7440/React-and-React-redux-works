import { createStore,combineReducers } from 'redux'


import AuthReducer from './action/authReducer'
import UserReducer from './action/userReducer'

export const rootReducer = createStore(
    combineReducers({
        AuthReducer,
        UserReducer
    })

)
export let store = rootReducer;