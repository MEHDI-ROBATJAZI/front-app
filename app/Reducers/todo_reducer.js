import { ADD_TODO , REMOVE_TODO,CHECK_TODO} from "../Actions/types"





const todoReducer=(state=[],action)=>{
  switch(action.type){
    case ADD_TODO :
      const id = Date.now()
      return [...state,{id,todo:action.payload,isDone:false}]
    case REMOVE_TODO :
      return state.filter(item=>item.id !== action.id)
    case CHECK_TODO:
      return state.map(item=>{
        if(item.id===action.id){
          return Object.assign(item,{isDone:!item.isDone})
        }else{
          return item
        }
      }) 
    default:
      return state
  }
}

export default todoReducer