export const Form_Action=(formname,tagname,data)=>{
	return {
		type:"CHANGE_INPUT",
		payload:{
			formname,tagname,data
		}
	}
}

export const CheckAdminAction=(isAdmin)=>{
	return {
		type:"IS_ADMIN",
		payload:isAdmin
	}
}