import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Pages/Home'
import Login from '../Component/Pages/Login'
import App from '../App'
import CreateUser from '../Component/Pages/CreateUser'
import About from '../Component/Pages/About'
import Contact from '../Component/Pages/Contact'
import Gallery from '../Component/Pages/Gallery'
import ReadMore from '../Component/Pages/ReadMore'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/createuser' element={<CreateUser/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/readmore' element={<ReadMore/>}/>
                
            </Routes>
        </>
    )
}

export default AllRoutes
