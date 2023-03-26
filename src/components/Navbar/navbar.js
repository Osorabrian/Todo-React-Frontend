import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='navbar'>
            <NavLink to='/' className={'navbar-brand'}>Todo</NavLink>
            <ul className='me-auto'>
                <NavLink to='/todos' className={'nav-item me-3'}>Todos</NavLink>
                <NavLink to='/create-todos' className={'nav-item me-3'}>Create Todos</NavLink>
                <NavLink to='/' className={'nav-item me-3'}>Log out</NavLink>
                <NavLink to='/' className={'nav-item me-3'}>Log in</NavLink>
                <NavLink to="/signup" className={'nav-item me-3'}>Sign up</NavLink>
            </ul>
        </div>
    )
}