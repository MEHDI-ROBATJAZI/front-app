export const Change_Input_Data=(formname,tagname,data,ActivingSubmitButton,SubmitButtonElement)=>{
	return {
		type:"CHANGE_INPUT",
		payload:{
			formname,tagname,data,ActivingSubmitButton,SubmitButtonElement
		}
	}
}


export const CheckAdminAction=(isAdmin)=>{
	return {
		type:"IS_ADMIN",
		payload:isAdmin
	}
}

export const addTodo =(newTodo)=>{
	return{
		type:"ADD_TODO",
		payload : newTodo
	}
}
export const removeTodo=(id)=>{
	return{
		type:"REMOVE_TODO",
		id
	}
}
export const isDoneTodo=(id)=>{
	return{
		type:"CHECK_TODO",
		id
	}
}

export const addRome=(newRomeId)=>{
	return{
		type:"ADD_ROME",
		payload:newRomeId
	}	
}