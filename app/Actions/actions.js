export const Change_Input_Data=(formname,tagname,data)=>{
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