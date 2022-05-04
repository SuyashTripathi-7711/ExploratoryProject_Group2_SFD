import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to='/' className='navbar-brand h4 nav-link active'>
    Exploratory Project
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/point' className='nav-link active'>
            Point Force Case
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/uniform' className='nav-link active'>
            Uniform Force Case
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/variable' className='nav-link active'>
            Variable Force Case
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}
