import {combineReducers} from "redux"
import { reducer as formReducer } from 'redux-form'


const forms = combineReducers({
  signupform : formReducer
})

export default forms