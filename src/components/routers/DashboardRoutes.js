import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutScreen } from '../screens/AboutScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { MainScreen } from '../screens/MainScreen'
import { NavBar } from '../ui/NavBar'

export const DashboardRoutes = () => {
  return (
  <>
    <NavBar/>

    <Routes>
      {/* <Route path='/' element={ MainScreen }/> */}
      <Route exact path='/tasklist' element={ <HomeScreen/> } />
      <Route exact path='/about' element={ <AboutScreen/> } />

      <Route path='/' element={ <MainScreen/> }/>
    </Routes>
  </>
  )
}
