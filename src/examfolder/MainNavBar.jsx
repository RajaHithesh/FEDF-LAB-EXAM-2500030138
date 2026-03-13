import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import BookRegistration from './BookRegistration'
import ViewBooks from './ViewBooks'
import Api from './Api'

export default function MainNavBar() {
  return (
    <div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BookRegistration">ADD Book</Link></li>
        <li><Link to="/ViewBooks">ViewBooks</Link></li>
        <li><Link to="/Api">API</Link></li>
      </ul>
          




        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/BookRegistration' element={<BookRegistration/>}/>
            <Route path='/ViewBooks' element={<ViewBooks/>}/>
            <Route path='/Api' element={<Api/>}/>
        </Routes>
    </div>
  )
}
