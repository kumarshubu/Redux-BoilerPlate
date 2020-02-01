import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import ProfileReducer from './Profiles/ProfileReducer'
import IdReducer from './Ids/IdReducer.js'
import UserReducer from './Users/UserReducer'

const rootReducer = combineReducers({
	Profile:ProfileReducer,
	Id:IdReducer,
	User:UserReducer
})

const store = createStore(rootReducer,applyMiddleware(logger,thunk))
export default store