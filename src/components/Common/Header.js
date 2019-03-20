import React from 'react'
import {NavLink} from 'react-router-dom';

const activeStyle = { color: '#f15b2a' };

function Header() {
    return (
       <nav>
           <NavLink to='/' activeStyle={activeStyle} exact>Take a Quiz</NavLink>
           {' | '}
           <NavLink to='/addEdit' activeStyle={activeStyle}>Add a Quiz</NavLink>
       </nav>
    ) ;
}

export default Header;