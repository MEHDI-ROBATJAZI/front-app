import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";

import { TiUserAdd } from "react-icons/ti";
import {AiFillProfile} from "react-icons/ai"
import {RiLoginCircleFill} from 'react-icons/ri'
import Link from "next/link";

const Header = () => {
  return (
    <Box fontFamily="Titillium Web" >
      <Flex bg="teal" w={"100%"} h={45} p="0 200px 0 200px">
        <Heading
          size={"md"}
          pt={4}
          fontFamily="Titillium Web"
          color="white"
          lineHeight={3}
        >
          my cv app
        </Heading>

        <Spacer />

        <Text color="orange" mr={"20px"} mt={"11px"} className="header_routes" >
          <Link href="/">Home</Link>
        </Text>


        <Menu>
          <MenuButton color="orange"  m={"20px"} className="header_routes">
            profile
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/profile">Profile</Link> <Spacer /> <AiFillProfile />
            </MenuItem>
            <MenuItem>
              <Link href="/signup">SignUp</Link> <Spacer /> <TiUserAdd /> 
            </MenuItem>
            <MenuItem>
              <Link href="/login">Login</Link> <Spacer /> <RiLoginCircleFill />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
