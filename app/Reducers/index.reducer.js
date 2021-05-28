import { combineReducers } from 'redux'
import form_reducer from './form.reducer'
import AdminReducer from './admin_reducer'
import todoReducer from './todo_reducer'
import roomReducer from './room_reducer'


const RootReducer = combineReducers({

	isAdmin : AdminReducer,
	form_data:form_reducer,
	todos : todoReducer,
	rooms:roomReducer
	
})


export default RootReducer