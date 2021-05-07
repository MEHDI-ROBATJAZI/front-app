import * as types  from '../Actions/types'


const initialState ={which_form_active:"",name:"",family:"",email:"",passwd:"",gender:""} 


const form_reducer=(state=initialState ,action)=>{


	switch(action.type){
		case types.CHANGE_INPUT:
			state.which_form_active = action.payload.formname
			let data = action.payload.data
			
			switch (action.payload.tagname){
				case "name":
					state.name = data
					break
				case "family":
					state.family = data
					break
				case "email":
					state.email = data
					break
				case "gender":
					state.gender = data
					break
				case "password":
					state.passwd = data
					break
			}

			return state

		default:
			return state
	}
}



export default form_reducer