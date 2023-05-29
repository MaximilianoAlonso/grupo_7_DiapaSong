import React from 'react'

export const TopBar = () => {
  return (
    <nav className="header">
    
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
      <i className="fa fa-bars"></i>
    </button>

    <ul className="header__section--user-navigation-logged">
  
      <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
          <i className="fas fa-bell fa-fw"></i>
          <span className="badge badge-danger badge-counter">3+</span>
        </a>
      </li>
  
      <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
          <i className="fas fa-envelope fa-fw"></i>
          <span className="badge badge-danger badge-counter">7</span>
        </a>
      </li>

      <div className="topbar-divider d-none d-sm-block"></div>

      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
          <img className="img-profile rounded-circle" src="/jordan-walke.png" alt="" width="60"/>
        </a>
      </li>
    </ul>

  </nav>		
  )
}
