import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {
	Box,
	Heading,
	Text,
	Flex,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	Divider,
	List,
	ListItem,
	UnorderedList
} from '@chakra-ui/react'

	
const UsersInfo = ()=>{

	const [Users , setUsers] = useState([])
	const [Males , setMale] = useState([])
	const [Females , setFemale] = useState([])

	useEffect(async()=>{
		const persons = await axios.get("http://localhost:5000/admin/getUsersInfo")
		setUsers(persons.data)
	},[])

	const getMales = async()=>{
		const males = await axios.get("http://localhost:5000/admin/getUsersInfo/males")
		setMale(males.data)
	}

	const getFemales=async()=>{
		const females = await axios.get("http://localhost:5000/admin/getUsersInfo/females")
		setFemale(females.data)
	}

	return(
		<Box className="admin-controller" style={{padding:"10px"}}>
			<Tabs variant="soft-rounded" colorScheme="green">
		  <TabList>
		    <Tab>all</Tab>
		    <Tab onClick={getMales}>male</Tab>
		    <Tab onClick={getFemales}>female</Tab>
		  </TabList>
		  <Divider />
		  <TabPanels id="users-information">
		    <TabPanel>
		    	<UnorderedList>
		    		{
		    			Users.map(item=>(
		    				<Box key={item.id} className="users-information-box">
			    				<ListItem className="user-name">{item.name+" "+item.family}</ListItem>
			    				<Text className="show-email">{item.email}</Text>
		    				</Box>
	    				))
	    			}		
		    	</UnorderedList>
		    </TabPanel>
		    <TabPanel>
		    	<UnorderedList>
		    		{
		    			Males.map(item=>(
		    				<Box key={item.id} className="users-information-box">
			    				<ListItem className="user-name">{item.name+" "+item.family}</ListItem>
			    				<Text className="show-email">{item.email}</Text>
		    				</Box>
	    				))
	    			}		
		    	</UnorderedList>
		    </TabPanel>
		    <TabPanel>
		    	<UnorderedList>
		    		{
		    			Females.map(item=>(
		    				<Box key={item.id} className="users-information-box">
			    				<ListItem className="user-name">{item.name+" "+item.family}</ListItem>
			    				<Text className="show-email">{item.email}</Text>
		    				</Box>
	    				))
	    			}		
		    	</UnorderedList>
		    </TabPanel>
		  </TabPanels>
		</Tabs>
		</Box>
	)
		
}


export default UsersInfo