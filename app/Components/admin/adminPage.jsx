import React from 'react'
import UsersCount from './users-count'
import UsersInfo from './users-info'
import {
	Box,
	Heading,
	Text,
	Flex,
} from '@chakra-ui/react'

const AdminPage = ()=>{


	return(
		<Box>
			<Flex>
				<UsersCount />
				<UsersInfo />
			</Flex>
		</Box>
	)
		
}


export default AdminPage