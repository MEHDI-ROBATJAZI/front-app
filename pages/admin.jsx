import React,{useState,useEffect}from 'react'
import CheckAdmin from '../app/Components/checkAdmin'
import {Box,Heading} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import AdminPage from '../app/Components/admin/adminPage'
import Header from "../app/Components/header"

const Admin = () => {

  const getData=()=>{
    axios.get("http://localhost:5000/admin").then(resp=>{
      console.log(resp.data);
    })
  }


  const isAdmin = useSelector(state => state.isAdmin)
  return (
    <Box>
      <Header />
      {
        isAdmin === false ?(<CheckAdmin />):(
          <AdminPage />
        ) 
      }
    </Box>
  )
}

export default Admin
