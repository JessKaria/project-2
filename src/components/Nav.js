import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import 'bulma'
import DINOMENU from '../images/DINOMENU.png'

const Nav = () => {
  const [menu, showMenu] = useState(false)

  let nav

  if (menu) {
    nav = <div className="dropdown">
      <ul className="menu-list">
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/' }}>Home</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Horror' }}>Horror</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Comedy' }}>Comedy</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Family' }}>Family</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Thriller' }}>Thriller</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/SciFi' }}>Scifi</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Action' }}>Action</Link></li>
        <li className="mob-menu"><Link className="navitem" onClick={() => showMenu(!menu)}>Close</Link></li>
      </ul>
    </div>
  }

  return <>
    <div className="navbar">
      <Link className="rexHeader" to={{ pathname: '/project-2/' }}>REXFLIX</Link>
      {nav}
      <a role="button" className="navbar-burger" onClick={() => showMenu(!menu)}>
        <img src={DINOMENU} className="dinosmall" height="70px"></img>
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">

          <div className="navbar-item">
            <img className="burger" src={DINOMENU} onClick={() => showMenu(!menu)} />
          </div>

        </div>
      </div>
    </div>
  </>
}

export default Nav