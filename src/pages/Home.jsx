import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Home = (props) => {
   
  return (
    <>
      <Navbar isUserL={props.isUserIn} homeActive={"active"}/>
      
    </>
  )
}

export default Home