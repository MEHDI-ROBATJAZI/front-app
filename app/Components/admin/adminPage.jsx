import React from "react";
import UsersCount from "./users-count";
import UsersTabs from "./users-tabs";
import Head from "next/head";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>you are admin</title>
      </Head>
      <Flex>
        <Flex>
          <Box id="sidebar" p={5}>
            <Box>
              <UsersCount />
            </Box>
          </Box>
        </Flex>
        <UsersTabs />
      </Flex>
    </Box>
  );
};

export default AdminPage;
