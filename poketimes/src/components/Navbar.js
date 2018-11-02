import React from 'react'
import {Link, NavLink} from 'react-router-dom'

// link to tags prevenst redirecting requests to server
// so that no reloading is done
const Navbar = ()=>{
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke' Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar