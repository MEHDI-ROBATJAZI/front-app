import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Input, Heading, Center, Button, Divider } from "@chakra-ui/react";
import Header from "../app/Components/header";
import TaskList from "../app/Components/tasksAndrooms/taskList";
import { addTodo, addTodoIdToRoom } from "../app/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Rooms from "../app/Components/tasksAndrooms/rooms";

const Todo = () => {
  const [newTodo, setTodo] = React.useState("");
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  return (
    <Box>
      <Header />
      <Box className="gradiant3 Blur" height="50vh"></Box>
      <Box
        position="absolute"
        top="65"
        left="25%"
        bg="white"
        w={780}
        boxShadow="dark-lg"
        minHeight={"100vh"}
      >
        <Box m="20px 0">
          <Center>
            <Heading>write your todo</Heading>
          </Center>
        </Box>
        <Box m="20px 30px">
          <Input
            mb="1rem"
            placeholder="write your task"
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            w="50%"
            variant="outline"
            colorScheme="blue"
            onClick={() => {
              const id = uuidv4()
              // add new task to todo reducer
              dispatch(addTodo({ newTodo, id }));

              // add task id to room
              rooms.forEach((item) => {
                if (item.active) {
                  dispatch(
                    addTodoIdToRoom({ taskId: id, roomId: item.roomId })
                  );
                }
              });
            }}
          >
            ADD TODO
          </Button>
          <Rooms />
        </Box>
        <Box>
          <Center color="red">
            {rooms.map((item) => {
              if (item.active === true) {
                return <Heading key={item.roomId}>{item.roomName}</Heading>;
              }
            })}
          </Center>
        </Box>
        <Divider />
        <Box>
          <TaskList />
        </Box>
      </Box>
    </Box>
  );
};

export default Todo;
