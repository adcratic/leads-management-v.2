import React from 'react'
import Navbar from '../Navbar/Navbar'

const Whyus = (props) => {
  return (
    <>
      <Navbar isUserL = {props.isUserIn} whyActive = {"active"}/>
      <div>Whyus</div>  
    </>
  )
}

export default Whyus