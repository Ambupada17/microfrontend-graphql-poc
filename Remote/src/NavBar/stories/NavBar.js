import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <ul className='nav-bar__list'>
            <li className='nav-bar__item'>
                <a href='#features'>Features</a>
            </li>

            <li className='nav-bar__item'>
                <a href='#about'>About</a>
            </li>

            <li className='nav-bar__item'>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar