import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './signup.css'

export default function SignUpForm(){

    const[userName, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[repeatPassword, setRepeatPassword] = useState('')

    const navigate = useNavigate()

    const signUpData = {username: userName, email, password, password_confirmation: repeatPassword}

    function handleSignUp(e){
        e.preventDefault()
        if(password === repeatPassword){
            console.log(signUpData)
            navigate('/todos')
        }else{
            alert('Passwords do not match')
        }
        
    }


    return(
        <form id='signup-form'onSubmit={handleSignUp} >

            <h2 className="mb-2" style={{textAlign: 'center'}}>Sign Up</h2>

            <div className="row mb-3">

                <label className="form-label">User Name:</label>
                <input className='form-control' placeholder='Enter User name' type='text' id='signup-username' required onChange={e => setUserName(e.target.value)}/>

            </div>

            <div className="row mb-3">

                <label className="form-label">Email</label>
                <input className="form-control" placeholder="Enter Email" type={'email'} id='signup-email' required onChange={e => setEmail(e.target.value)}/>

            </div>

            <div className="row mb-3">

                <div className="col-6">
                    <label className="form-label">Password</label>
                    <input className="form-control" placeholder="Enter Password" type={'password'} id='password' autoComplete='on' required onChange={e => setPassword(e.target.value)}/>
                </div>
               
               <div className="col-6">
                    <label className="form-label">Password</label>
                    <input className="form-control" placeholder="Repeat Password" type={'password'} id='repeat-password' autoComplete='on' required onChange={e => setRepeatPassword(e.target.value)}/>
               </div>
    
            </div>

            <div className="row mb-3">
                <NavLink className={'form-text'} to='/'>Already have an account ? </NavLink>
            </div>

            <div style={{textAlign: 'center'}}>
            <button type='submit' className="btn btn-primary" style={{width: '190px'}}>Create account</button>
            </div>

        </form>
    )
}