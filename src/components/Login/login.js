import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

export default function Login(){
    return(
        <div id='login-page'>
            <form id='login-form'>

                <h2 style={{textAlign:'center'}} className='mb-4'>Log in</h2>

                <div className='row mb-4'>
                    <label className='form-label'>User Name:</label>
                    <input placeholder='Enter User Name'className='form-control' type='text' required/>
                </div>
                
                <div className='row mb-4'>
                    <label className='form-label'>Password</label>
                    <input placeholder='Enter Password' className='form-control' type = 'password' required/>
                </div>

                <p className='form-text'>Don't have an account ? <NavLink to='/signup'> Create an acount.</NavLink></p>
                
                <div style={{textAlign: 'center'}}>
                    <button className='btn btn-primary' style={{width: '100px'}}>Log in</button>
                </div>

            </form>
        </div>
    )
}