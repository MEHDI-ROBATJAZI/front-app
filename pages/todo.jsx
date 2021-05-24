import React from "react";
import {
  Box,
  Flex,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import Header from "../app/Components/header";
import TaskList from "../app/Components/tasks/taskList";
import { addTodo ,addRome } from "../app/Actions/actions";
import { useDispatch } from "react-redux";

const Todo = () => {
  const [newTodo, setTodo] = React.useState("");
  const [newRome, setRome] = React.useState("");
  const dispatch = useDispatch();
  const [State, setState] = React.useState("AddTodo");

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
        <RadioGroup
          onChange={setState}
          value={State}
          position="relative"
          top="60px"
          left="20px"
        >
          <Stack direction="row">
            <Radio value="Add Todo">Add Todo</Radio>
            <Radio value="Add Rome">Add Rome</Radio>
          </Stack>
        </RadioGroup>
        <Box m="20px 0">
          <Center>
            <Heading>write your todo</Heading>
          </Center>
        </Box>
        {State === "Add Todo" && (
          // Add ToDo
          <Box m="20px 30px">
            <Flex>
              <Input 
                placeholder="write your task"
                size="lg" 
                onChange={(e) => setTodo(e.target.value)} />
              <Button
                size="lg"
                colorScheme="blue"
                onClick={() => dispatch(addTodo(newTodo))}
              >
                ADD TODO
              </Button>
            </Flex>
          </Box>
        )}
        {State === "Add Rome" && (
          // Add Rome
          <Box m="20px 30px">
            <Flex>
              <Input
                placeholder="write your rome"
                size="lg" 
                onChange={(e) => setRome(e.target.value)} />
              <Button
                size="lg"
                colorScheme="blue"
                onClick={() => dispatch(addRome(newRome))}
              >
                ADD ROME
              </Button>
            </Flex>
          </Box>
        )}
        <Box>
          <TaskList />
        </Box>
      </Box>
    </Box>
  );
};

export default Todo;
