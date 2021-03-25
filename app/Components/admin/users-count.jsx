import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {
	Box,
	Heading,
	Text,
	Button,
	Input,
	Flex,
	Progress,
	FormHelperText,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react'





const UsersCount = ()=>{
	const [usersCount,changeCount] = useState(0)
	const [goal,setGoal] = useState(0)
	const InputAdminGoal = useRef(null)

	const changeGoal=()=>{
		setGoal(InputAdminGoal.current.value)
	}


	useEffect(()=>{
		axios.get("http://localhost:5000/admin/getUsersCount").then(resp=>{
			changeCount(resp.data.count)
			let admin_goal = window.localStorage.getItem("admin-goal")
			setGoal(admin_goal)
		})
	},[])

	const saveAdminGoal=()=>{
		window.localStorage.setItem("admin-goal", goal)
	}

	const calculatePercentUsersAndGoal=()=>{
		return Math.round(usersCount/goal*100)
	}

	return(
		<Box className="admin-controller">
			<Box className="heading-box">
				<Heading id="head-box">users count : {usersCount}</Heading>
			</Box>
			<Box className="body-box">
			<FormControl className="email">
			  	<FormLabel>choose you'r goal</FormLabel>
			  	<Flex>
				  	<NumberInput
					  	dir="rtl"
					  	width="200px">
				    <NumberInputField 
				    	ref={InputAdminGoal}
				    	onChange={(e)=>changeGoal()} />
				    <NumberInputStepper>
				      <NumberIncrementStepper onClick={changeGoal}/>
				      <NumberDecrementStepper onClick={changeGoal}/>
				    </NumberInputStepper>
				  </NumberInput>
				  <Button colorScheme={"red"} onClick={saveAdminGoal}>SET</Button>
				</Flex>
			  	<FormHelperText>then click the button ---- you'r goal is {goal}</FormHelperText>
			</FormControl>
				{
					goal !== null && (
						<Box className="progress-box">
							<Text
								style={{color:"gray"}}
								>Percent : {calculatePercentUsersAndGoal()}%</Text>
							<Progress 
								colorScheme="red"
								hasStripe 
								value={calculatePercentUsersAndGoal()}
							/>
						</Box>	
					)
				}
				</Box>
		</Box>
	)
}
export default UsersCount