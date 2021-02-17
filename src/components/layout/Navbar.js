import React from 'react'

import  {Link} from 'react-router-dom'



function Navbar() {
    return (
        <React.Fragment>
        <nav className="nav-container aquaGradient bold">
           <Link to="/" className="logo bold">BUTEX NoteBOT</Link>
           <input className="menu-btn" type="checkbox" id="menu-btn" />
           <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
           <ul className="menu">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/notes">Notes</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/apps">Apps</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>
   </nav>    
   </React.Fragment>
    )
}

export default Navbar
