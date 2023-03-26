import React from "react";
import { NavLink } from "react-router-dom";
import './signup.css'

export default function SignUpForm(){
    return(
        <form id='signup-form'>

            <h2>Sign Up</h2>

            <div className="row mb-3">
                <label className="form-label">Username:</label>
                <input className='form-control' placeholder='Enter User name' type='text' id='signup-email' required/>
            </div>

            <div className="row mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" placeholder="Enter Email" type={'email'} id='signup-email' required/>
            </div>

            <div className="row mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" placeholder="Enter Password" type={'password'} id='password' required/>
            </div>

            <div className="row mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" placeholder="Repeat Password" type={'password'} id='repeat-password' required/>
            </div>

            <div className="row mb-3">
                <NavLink className={'form-text'} to='/'>Already have an account ? </NavLink>
            </div>

            <button className="btn btn-primary">Create account</button>

        </form>
    )
}