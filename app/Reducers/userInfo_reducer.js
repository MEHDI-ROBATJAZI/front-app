

const userinfoReducer = (state={},action)=>{

  switch(action.type){
    case "USER_REGISTER":
      return Object.assign(state,action.payload)
    case "USER_LOGIN":
      return state
    case "USER_EDIT_PROFILE":
      return state
    default:
      return state
  }

}


export default userinfoReducer