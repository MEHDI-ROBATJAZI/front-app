import { combineReducers } from 'redux'
import form_reducer from './form.reducer'
import AdminReducer from './admin_reducer'

const RootReducer = combineReducers({
	isAdmin : AdminReducer,
	form_data:form_reducer
})


export default RootReducer