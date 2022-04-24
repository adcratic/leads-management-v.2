import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Whyus from "./pages/Whyus"
import Features from './pages/Features';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const App = () => {
  let isuser = true;
  return (
    <>
      <Router>
        <Routes>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home isUserIn={isuser} />} />
          <Route path='/why-us' element={<Whyus isUserIn={isuser} />} />
          <Route path='/features' element={<Features isUserIn={isuser} />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;