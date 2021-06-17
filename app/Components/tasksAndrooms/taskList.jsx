import React from "react";
import { Box, Flex, Spacer, Text, Heading, Divider } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, isDoneTodo } from "../../Actions/actions";

const TaskList = () => {
  const allTodos = useSelector((state) => state.todos);
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  function removeItem(id) {
    dispatch(removeTodo(id));
  }
  function checkTask(id) {
    dispatch(isDoneTodo(id));
  }

  const activeRoomIds = rooms.map((room) => {
    if (room.active) {
      return room.roomTodosId;
    }
  });

  // console.log(activeRoomIds);
  if(activeRoomIds.length !== 0 && activeRoomIds[0] !== undefined){
    // debugger
  const roomTodos = allTodos.map(todo=>{
    if(activeRoomIds.includes(todo.id)){
      return todo
    }
  })

  console.log(roomTodos);
  }
  return (
    <Box>
      {activeRoomIds.length === 0
        ? allTodos.map((item) => (
            <Box key={item.id} m={35} className="TaskBox">
              <Flex>
                <CheckIcon
                  fontSize="1.6rem"
                  onClick={() => checkTask(item.id)}
                  mt="15px"
                  mr="15px"
                  cursor="pointer"
                  color={item.isDone ? "gray" : "black"}
                />

                <Text
                  maxWidth="600px"
                  // wordWrap="breakWord"
                  style={{wordWrap:"break-word"}}
                  color={item.isDone ? "gray" : "black"}
                >
                  {item.todo}
                </Text>
                <Spacer />
                <DeleteIcon
                  fontSize="1.6rem"
                  onClick={() => removeItem(item.id)}
                  mt="15px"
                  cursor="pointer"
                />
              </Flex>
              <Divider />
            </Box>
          ))
        : activeRoomIds.map((id) => {
            allTodos.forEach((todo) => {
              todo.id === id && (
                <Box key={todo.id} m={35} className="TaskBox">
                  <Flex>
                    <CheckIcon
                      fontSize="1.6rem"
                      onClick={() => checkTask(todo.id)}
                      mt="15px"
                      mr="15px"
                      color={todo.isDone ? "gray" : "black"}
                      cursor="pointer"
                    />

                    <Text
                      maxWidth="600px"
                      wordWrap="breakWord"
                      color={todo.isDone ? "gray" : "black"}
                    >
                      {todo.todo}
                    </Text>
                    <Spacer />
                    <DeleteIcon
                      fontSize="1.6rem"
                      onClick={() => removeItem(todo.id)}
                      mt="15px"
                      cursor="pointer"
                    />
                  </Flex>
                  <Divider />
                </Box>
              );
            });
          })}
    </Box>
  );
};

export default TaskList;
