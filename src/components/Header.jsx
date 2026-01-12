import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <header>
        <a href=""><img src="/img/Arrow-left-icon.svg" alt="" /></a>
        <a href=""><img src="/img/main-logo-icon.svg" alt="" /></a>
        <a href=""><img src="/img/burger-menu-icon.svg" alt="" /></a>
    </header>
  )
}

export default Header