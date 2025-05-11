import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import { onLogoutUser } from './../../redux/user/actions';

import logo from './../../assets/logo.png';

import './Header.scss';

const Header = () => {
  const componentClassName = 'header-container';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector(state => state.user);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    if (loggedInUser) {
      dispatch(onLogoutUser());
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${componentClassName}`}>
      <Link to='/'>
        <img
          alt={'Vaccinate portal logo'}
          src={logo}
          className={`${componentClassName}--logo`}
        />
      </Link>

      <nav className={`${componentClassName}--ctas ${menuOpen ? 'open' : ''}`}>
        {loggedInUser && (
          <div className='links'>
            <Link to='/students' className='nav__link'>Add/Manage Students</Link>
            <Link to='/status' className='nav__link'>Vaccination Status</Link>
            <Link to='/reports' className='nav__link'>Reports</Link>
          </div>
        )}
        <Button variant='white' onClick={handleClick}>
          {loggedInUser ? 'Logout' : 'Sign In!'}
        </Button>
      </nav>

      <div className={`${componentClassName}--menu-icon`} onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </div>
    </header>
  )
};

export default Header;