import React from "react";
import { addRoom, removeRoom ,roomSetActive } from "../../Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Box,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  UnorderedList,
  ListItem,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Rooms = () => {
  const [newRoom, setRoom] = React.useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();

  function addNewRoom() {
    if (newRoom === "") alert("please write your room name");
    else{
      dispatch(addRoom(newRoom));
    }
  }

  const rooms = useSelector((state) => state.rooms);

  return (
    <>
      <Button
        w="50%"
        variant="outline"
        size="md"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        ROOMS
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>make your room</DrawerHeader>

          <DrawerBody>
            <InputGroup mb={5} size="md">
              <Input
                placeholder="Type your room name"
                onChange={(e) => setRoom(e.target.value)}
              />
              <InputRightElement width="5rem">
                <Button h="1.75rem" w="4rem" variant="outline" onClick={addNewRoom}>
                  Save
                </Button>
              </InputRightElement>
            </InputGroup>

            <Divider />

            <DrawerHeader m="20px 0">your rooms</DrawerHeader>

            <Box>
              <UnorderedList>
                {rooms.map((item) => (
                  <Flex key={item.roomId} className="TaskBox">
                    <ListItem style={{ cursor: "pointer" }} ml="20px" h="50px" onClick={()=>dispatch(roomSetActive(item.roomId))}>
                      {item.roomName}
                    </ListItem>

                    <Spacer />
                    <DeleteIcon
                      fontSize="1rem"
                      m="15px 15px 0 0 "
                      cursor="pointer"
                      onClick={() => dispatch(removeRoom(item.roomId))}
                    />
                  </Flex>
                ))}
              </UnorderedList>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Rooms;
