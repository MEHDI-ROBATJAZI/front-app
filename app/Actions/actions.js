export const UserInformation = (information) => {
  return {
    type: "USER_REGISTER",
    payload: information,
  };
};

export const CheckAdminAction = (isAdmin) => {
  return {
    type: "IS_ADMIN",
    payload: isAdmin,
  };
};

export const addTodo = ({newTodo,id}) => {
  return {
    type: "ADD_TODO",
    payload: {newTodo,id},
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};
export const isDoneTodo = (id) => {
  return {
    type: "CHECK_TODO",
    id,
  };
};

export const addRoom = (newRoom) => {
  return {
    type: "ADD_ROOM",
    payload: newRoom,
  };
};

export const removeRoom = (id) => {
  return {
    type: "REMOVE_ROOM",
    id,
  };
};
export const roomSetActive = (id) => {
  return {
    type: "ROOM_SET_ACTIVE",
    id,
  };
};

export const addTodoIdToRoom = ({taskId,roomId})=>{
  return{
    type:"ADD_TODO_ID_TO_ROOM",
    payload:{taskId,roomId}
  }
}