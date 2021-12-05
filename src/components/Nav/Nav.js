import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-container__title'>
        <span className='nav-container__title--first-three'>nom</span>
        <span className='nav-container__title--last-three'>nom</span>
      </div>
      <div className='nav-container__links'>
        <a className='nav-container__links--login' href='/#'>
          Login
        </a>
        <a className='nav-container__links--signup' href='/#'>
          Signup
        </a>
        <FontAwesomeIcon className='moon' icon={faMoon} color='white' />
      </div>
    </nav>
  );
};

export default Nav;
