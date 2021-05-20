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
	CircularProgress,
	CircularProgressLabel
} from '@chakra-ui/react'


const UsersCount = ()=>{
	const [usersCount,changeCount] = useState(0)
	const [goal,setGoal] = useState(0)
	const [malesPercent,setMalesPercent] = useState(0)
	const [femalesPercent,setFemalesPercent] = useState(0)
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

		axios.get("http://localhost:5000/admin/getUsersCount/length").then(resp=>{
			const males = resp.data.males
			const females = resp.data.females

			const malesPercent =Math.round((males*100)/usersCount)
			const femalesPercent = Math.round((females*100)/usersCount)
			setMalesPercent(malesPercent)
			setFemalesPercent(femalesPercent)
		})
	},[usersCount])

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
					  	width="200px">
				    <NumberInputField 
				    	ref={InputAdminGoal}
				    	onChange={(e)=>changeGoal()} />
				    <NumberInputStepper>
				      <NumberIncrementStepper onClick={changeGoal}/>
				      <NumberDecrementStepper onClick={changeGoal}/>
				    </NumberInputStepper>
				  </NumberInput>
				  <Button colorScheme={"green"} onClick={saveAdminGoal}>SET</Button>
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
								colorScheme="green"
								hasStripe 
								value={calculatePercentUsersAndGoal()}
							/>
						</Box>	
					)
				}
				</Box>
				<Box className="progress-box" display="flex" justifyContent="space-around">
					<CircularProgress thickness="2px" fontSize="50px" size="70px" value={malesPercent} color="red.400">
					    <CircularProgressLabel>males:{malesPercent}%</CircularProgressLabel>
					</CircularProgress>

					<CircularProgress thickness="2px" fontSize="50px" size="70px" value={femalesPercent} color="blue.400">
					    <CircularProgressLabel>females:{femalesPercent}%</CircularProgressLabel>
					</CircularProgress>
				</Box>
		</Box>
	)
}
export default UsersCount