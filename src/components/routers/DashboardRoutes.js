import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutScreen } from '../screens/AboutScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { NavBar } from '../ui/NavBar'

export const DashboardRoutes = () => {
  return (
  <>
    <NavBar/>

    <Routes>
      <Route exact path='/market' element={ HomeScreen } />
      <Route exact path='/about' element={ AboutScreen } />

      <Route path='/' element={ HomeScreen }/>
    </Routes>
  </>
  )
}
