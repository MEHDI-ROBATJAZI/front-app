  import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";


const UserTable = (props) => {
  return (
    <Table variant="striped" colorScheme="teal">
      <TableCaption>your user info</TableCaption>
      <Thead>
        <Tr>
          <Th>name</Th>
          <Th>email</Th>
          <Th>created at</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.data.map((user) => (
          <Tr key={user._id}>
            <Td>{user.name + " " + user.family}</Td>
            <Td>{user.email}</Td>
            <Td>{user.createdAt}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>

      </Tfoot>
    </Table>
  );
};

const UsersTabs = () => {
  const [Users, setUsers] = useState([]);
  const [Males, setMale] = useState([]);
  const [Females, setFemale] = useState([]);

  useEffect(async () => {
    const persons = await axios.get("http://localhost:5000/admin/getUsersInfo");
    setUsers(persons.data);
  }, []);

  const getMales = async () => {
    const males = await axios.get(
      "http://localhost:5000/admin/getUsersInfo/males"
    );
    setMale(males.data);
  };

  const getFemales = async () => {
    const females = await axios.get(
      "http://localhost:5000/admin/getUsersInfo/females"
    );
    setFemale(females.data);
  };

  return (
    <Box style={{ padding: "25px", width: "100%" }}>
      <Box>
        <Input placeholder="search" />
      </Box>

      <Tabs variant="soft-rounded" colorScheme="green" mt="20px">
        <TabList>
          <Tab>all</Tab>
          <Tab onClick={() => getMales()}>mans</Tab>
          <Tab onClick={() => getFemales()}>womans</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserTable data={Users} />
          </TabPanel>
          <TabPanel>
            <UserTable data={Males} />
          </TabPanel>
          <TabPanel>
            <UserTable data={Females} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UsersTabs;
