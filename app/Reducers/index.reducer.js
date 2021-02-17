import { combineReducers } from 'redux'
import forms from './formReducer'



const RootReducer = combineReducers({


  form : forms
})


export default RootReducer