import {v4 as uuidv4} from 'uuid'


const roomReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return [
        ...state,
        {
          roomId: uuidv4(),
          roomName: action.payload,
          active: false,
          roomTodosId: [],
        },
      ];

    case "REMOVE_ROOM":
      return state.filter((item) => item.roomId !== action.id);

    case "ROOM_SET_ACTIVE":
      
      return state.map((item) => {
        if (item.roomId === action.id) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      });

    case "ADD_TODO_ID_TO_ROOM":
        console.log(action.payload.roomId)
        console.log(action.payload.taskId)
        return state.map(room=>{
          if(room.roomId === action.payload.roomId){
           
            return {
              ...room , roomTodosId : [...room.roomTodosId,action.payload.taskId]
            }

          }else{
            return room
          }
        })
    default:
      return state;
  }
};

export default roomReducer;
