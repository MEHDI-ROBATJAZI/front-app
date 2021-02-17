import React from "react";
import Header from "../app/Components/header";
import Head from "next/head";
import Signup from '../app/Components/signup_form'

const SignupPage = ()=>{

  const handleSubmit=(value)=>{
    console.log(value);
  }

  return(
    <div>
      <Head>
        <title>register page</title>
      </Head>
      <Header />
      <Signup onSubmit={handleSubmit} />
    </div>
  )
}

export default SignupPage
