import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

export default function Login(){
    return(
        <div id='login-page'>
            <form id='login-form'>

                <h2 style={{textAlign:'center'}}>Log in</h2>

                <div className='row mb-3'>
                    <label className='form-label'>User name:</label>
                    <input placeholder='Enter User Name'className='form-control' type='text' />
                </div>
                
                <div className='row mb-3'>
                    <label className='form-label'>Password</label>
                    <input placeholder='Enter Password' className='form-control' type = 'password'/>
                </div>

                <p className='form-text'>Don't have an account ? <NavLink to='/signup'> Create an acount.</NavLink></p>
                
                <button className='btn btn-primary'>Log in</button>
            </form>
        </div>
    )
}