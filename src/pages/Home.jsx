import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Home = (props) => {
   
  return (
    <>
      <Navbar isUserL={props.isUserIn} homeActive={"active"}/>
      <h1>Home </h1>
    </>
  )
}

export default Home