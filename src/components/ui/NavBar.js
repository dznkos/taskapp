import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Task App
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">              
              <NavLink 
                class={ ( isActive ) => "nav-item nav-link" + ( isActive && 'active')}
                exact="true"
                to="/tasklist"
              >
                TaskList
              </NavLink>              
            
              <NavLink activeclassname="selected"
                class={ ( isActive ) => "nav-item nav-link" + ( isActive && 'active')} 
                exact="true"
                to="/about">
              About
              </NavLink>

              <NavLink 
                class={ ( isActive ) => "nav-item nav-link" + ( isActive && 'active')} 
                exact="true"
                to="/"
              >
              Blog
              </NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    
  )
}
