
let defaultState = {all:[]}

const roomReducer = (state=defaultState , action)=>{
  switch(action.type){
    
    case "ADD_ROME":
      console.log(action.payload)
      return state
    case "REMOVE_ROME":
      return state

    default:
      return state
    
  }
}


export default roomReducer