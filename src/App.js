import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/pages/Home';

import Whyus from "../src/Components/Why Us/Whyus"
import Features from './Components/Features/Features';
const App = () => {
  let isuser = true;
  return (
    <>
      <Router> 
        <Routes>
          
          <Route path='/' element={<Home isUserIn = {isuser}/>}/>
          <Route path = '/Whyus' element={<Whyus isUserIn = {isuser}/>}/>
          <Route path = '/features' element={<Features isUserIn = {isuser}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;