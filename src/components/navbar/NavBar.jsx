import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='nav'>
                <div className='nav-title'>
                    Code With Nora
                </div>
                <div>
                    <a className='nav-link' href="/#home-section">Home</a>
                    <a className='nav-link' href="/#courses-section">Courses</a>
                    <a className='nav-link' href="/#contact-section">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
