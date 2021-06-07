import { combineReducers } from 'redux'
import adminReducer from './admin_reducer'
import todoReducer from './todo_reducer'
import roomReducer from './room_reducer'
import userinfoReducer from "./userInfo_reducer"

const RootReducer = combineReducers({
	userdata : userinfoReducer,
	isAdmin : adminReducer,
	todos : todoReducer,
	rooms:roomReducer
	
})


export default RootReducer