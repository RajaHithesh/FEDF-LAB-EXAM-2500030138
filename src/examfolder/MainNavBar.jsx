import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ViewBooks from './ViewBooks'
import Api from './Api'
import AddBook from './AddBook'


import './style.css'

export default function MainNavBar() {
  return (
    <div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddBook">ADD Book</Link></li>
       <li><Link to="/ViewBooks">View Books</Link></li>
        <li><Link to="/Api">API</Link></li>
      </ul>
          




        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AddBook' element={<AddBook/>}/>
            <Route path='/ViewBooks' element={<ViewBooks/>}/>
           
            <Route path='/Api' element={<Api/>}/>
        </Routes>
    </div>
  )
}
