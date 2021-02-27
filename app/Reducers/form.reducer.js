import * as types  from '../Actions/types'


const initialState ={which_form_active:"",name:"",family:"",email:"",password:"",gender:""} 


const form_reducer=(state=initialState ,action)=>{


	console.log(action.payload)

	switch(action.type){
		case types.CHANGE_INPUT:

			return {
				...state 
			}

		default:
			return state
	}
}



export default form_reducer