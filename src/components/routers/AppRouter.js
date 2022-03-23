import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutScreen } from '../screens/AboutScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/tasklist' 
          element={ <HomeScreen/> } 
        />
        <Route path='/about' 
          element={ <AboutScreen/> } 
        /> */}
        <Route path='/*' 
          element={ <DashboardRoutes/> } 
        /> 
      </Routes>    
    </BrowserRouter>
  )
}
