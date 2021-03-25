import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import {CheckAdminAction} from '../Actions/actions'
import {
  Box,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
} from "@chakra-ui/react";

const CheckAdmin = () => {

  const alert_input = useRef()
  const alert_message = useRef();
  const dispatch = useDispatch();
  const [AlertAdminCodeIsOpen, AlertAdminCodeSetIsOpen] = React.useState(false);
  const onClose = () => AlertAdminCodeSetIsOpen(false);
  const [New_Admin_Code, ChangeAdminCode] = useState("");

  
  const sendAdminCode=async(localCode="")=>{
    try{
      let data = {} 
      if(localCode===''){
       data = {Admin_Code: New_Admin_Code};
      }else{
        data = {Admin_Code:localCode}
      }
      let resp = await axios.post("http://localhost:5000/admin/check-password",data)
   
      return resp.data.result
    }catch(err){
      console.error(err)
    }
  }
  
  
  const show_error_message = ()=>{
    // wrong code
    alert_message.current.innerText = "you'r password is wrong please set another password";
    alert_message.current.style.backgroundColor = "red";
    alert_message.current.style.color = "white";
    alert_message.current.style.fontWeight = "bold";
    alert_message.current.style.padding = "10px";
    alert_input.current.value = "";
  }
  
  
  const setAdminCode = async() => {
    // change store redux : isAdmin
    const result = await sendAdminCode()
    console.log(result)

    if (result) {
      // is admin
      dispatch(CheckAdminAction(result));
      window.localStorage.setItem("admin-code",New_Admin_Code)
    }else{
      show_error_message()
    }
  };

  useEffect(() => {
    const admin_code = window.localStorage.getItem("admin-code");
    if (admin_code == null) {
      AlertAdminCodeSetIsOpen(true);
    } else {
      sendAdminCode(admin_code).then(result=>{

        console.log(result);

        if(result){
          dispatch(CheckAdminAction(result));
        }else{
          show_error_message()
          window.localStorage.removeItem("admin-code")
        }
      })
    }
  }, []);



  return (
    <Box>
      <AlertDialog
        isOpen={AlertAdminCodeIsOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Are you admin?
            </AlertDialogHeader>
            <Divider />
            <AlertDialogBody>
              <Text ref={alert_message}>please write your admin code</Text>
              <InputGroup size="md" mt={3}>
                <Input
                  style={{fontWeight:"bold",letterSpacing:"2px"}}
                  pr="1.5rem"
                  type={"text"}
                  placeholder="Enter You'r admin code"
                  onChange={(e) => ChangeAdminCode(e.target.value)}
                  ref={alert_input}
                />
                <InputLeftElement width="4.5rem">
                  <Button colorScheme={"blue"} h="1.75rem" size="md" onClick={setAdminCode}>
                    send
                  </Button>
                </InputLeftElement>
              </InputGroup>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default CheckAdmin;
