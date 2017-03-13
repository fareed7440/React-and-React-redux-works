import { createStore,combineReducers } from 'redux'


import AuthReducer from './reducer/authreducer'
import UserReducer from './reducer/userreducer'

export const rootReducer = createStore(
    combineReducers({
        AuthReducer,
        UserReducer
    })

)
export let store = rootReducer;