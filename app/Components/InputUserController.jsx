import React from "react";
import {
  Box,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoConstruct } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiXOctagon } from "react-icons/fi";

const InputUserController = () => {
  return (
    <Container maxWidth={"960px"} h="140px" bg="white" border="1px solid black">
      <Flex>
        <Box mt="60px">
          <Flex>
            <IoConstruct color="orange" pt="5px" />
            <Text as="b"> you'r input's must be contain this items:</Text>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <List spacing={3}>
            <ListItem>
            <ListIcon color="green.500"><IoMdCheckmarkCircleOutline size="xl" /></ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon color="green.500"><IoMdCheckmarkCircleOutline size="xl" /></ListIcon>
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
            <ListIcon color="green.500"><IoMdCheckmarkCircleOutline size="xl" /></ListIcon>
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            
            <ListItem>
              <ListIcon color="red.300"><FiXOctagon size="lg" /></ListIcon>
              Quidem, ipsam illum quis sed voluptatum
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Container>
  );
};

export default InputUserController;
