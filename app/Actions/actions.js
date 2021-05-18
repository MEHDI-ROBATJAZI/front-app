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