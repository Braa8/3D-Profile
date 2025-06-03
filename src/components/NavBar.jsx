import React from 'react'
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <header className='navbar bg-black rounded-lg'>

        <div className='inner'>
            <a href="#hero" className='logo'>
                BRAA | Al-Shoumary
            </a>

            <nav className='desktop '>
                <ul>
                    {navLinks.map(({link , name }) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline'></span>
                            </a>
                        </li>
                    )
                )}
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                <span>Contact Me</span>
                </div>
            </a>

        </div>

    </header>
  )
}

export default NavBar;
