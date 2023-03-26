import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='navbar'>
            <NavLink to='/' className={'navbar-brand'}>Todo</NavLink>
            <ul>
                <NavLink to='/' className={'nav-item'}>Log in</NavLink>
                <NavLink to="/signup" className={'nav-item mb-3'}>Sign up</NavLink>
                <NavLink to='/logout' className={'nav-item'}>Log out</NavLink>
                <NavLink to='/home' className={'nav-item'}>Home</NavLink>
            </ul>
        </div>
    )
}