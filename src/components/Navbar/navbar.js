import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
    return(
        <div className='navbar' id='navbar'>

            <NavLink to='/' className={'navbar-brand'}>Todo</NavLink>

            <ul className='nav justify-content-center'>
                <NavLink to='/todos' className={'nav-link me-3'}>Todos</NavLink>
                <NavLink to='/create-todos' className={'nav-link me-3'}>Create Todos</NavLink>
            </ul>

            <ul className='nav justify-content-right'>
                <NavLink to='/' className={'nav-link me-3'}>Log out</NavLink>
                <NavLink to='/' className={'nav-link me-3'}>Log in</NavLink>
                <NavLink to="/signup" className={'nav-link me-3'}>Sign up</NavLink>
            </ul>
            
        </div>
    )
}