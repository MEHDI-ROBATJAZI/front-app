import React from "react";
import { Box, Flex, Spacer, Text, Heading, Divider } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,isDoneTodo } from "../../Actions/actions";

const TaskList = () => {
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  
  function removeItem(id) {
    dispatch(removeTodo(id));
  }
  function checkTask(id){
    dispatch(isDoneTodo(id))
  }

  return (
    <Box>
      {todos.map((item) => (
        <Box key={item.id} m={35} className="TaskBox">
          <Flex>
            <CheckIcon 
              fontSize="1.6rem"
              onClick={() => checkTask(item.id)} 
              mt="15px"
              mr="15px"
              color={item.isDone ? "gray" : "black"}
              cursor="pointer"
            />

            <Text
              maxWidth="600px"
              wordWrap="breakWord"   
              color={item.isDone ? "gray" : "black"}
            >{item.todo}</Text>
            <Spacer />
            <DeleteIcon
              fontSize="1.6rem"
              onClick={() => removeItem(item.id)} mt="15px"
              cursor="pointer"
            />
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default TaskList;
