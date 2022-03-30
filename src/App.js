import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';

import Whyus from "./pages/Why Us/Whyus"
import Features from './pages/Features/Features';
import Login from './pages/LogIn/Login';
import Signup from './pages/SignUp/Signup';
const App = () => {
  let isuser = false;
  return (
    <>
      <Router> 
        <Routes>
          
          <Route path='/' element={<Home isUserIn = {isuser}/>}/>
          <Route path = '/Whyus' element={<Whyus isUserIn = {isuser}/>}/>
          <Route path = '/features' element={<Features isUserIn = {isuser}/>}/>
          <Route path = '/log-in' element={<Login/>}/>
          <Route path = '/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;