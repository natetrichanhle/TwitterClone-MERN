import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Home from './views/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect (() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials: true})
        .then(res => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<LoginForm setUser={setUser}/>} 
          />
          <Route 
            exact 
            path='/signup' 
            element={<SignupForm setUser={setUser}/>} 
          />
          <Route 
            exact 
            path='/home' 
            element={<Home user={user}/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
