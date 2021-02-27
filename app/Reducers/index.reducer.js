import { combineReducers } from 'redux'
import form_reducer from './form.reducer'


const RootReducer = combineReducers({
	form_data:form_reducer
})


export default RootReducer