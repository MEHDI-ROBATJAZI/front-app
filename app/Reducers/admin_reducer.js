import * as types from "../Actions/types";



const adminReducer =(state=false,action)=>{
  switch(action.type){
    case types.IS_ADMIN:
      return state = action.payload
    default:
      return state
  }
}

export default adminReducer