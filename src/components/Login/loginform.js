import React, {useState} from 'react'
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'


export default function LogInForm(){

    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const naviagte = useNavigate()

    const formData = {username: userName, password}

    function handleLogIn(e){
        e.preventDefault()
        console.log(formData)
        naviagte('/todos')
    }


    return(
        <form id='login-form' onSubmit={handleLogIn}>

                <h2 style={{textAlign:'center'}} className='mb-4'>Log in</h2>

                <div className='row mb-4'>
                    <label className='form-label'>User Name:</label>
                    <input placeholder='Enter User Name'className='form-control' type='text' required onChange={e => setUserName(e.target.value)}/>
                </div>
                
                <div className='row mb-4'>
                    <label className='form-label'>Password</label>
                    <input placeholder='Enter Password' className='form-control' type = 'password' autoComplete = 'on' required onChange={e => setPassword(e.target.value)}/>
                </div>

                <p className='form-text'>Don't have an account ? <NavLink to='/signup'> Create an acount.</NavLink></p>
                
                <div style={{textAlign: 'center'}}>
                    <button type= 'submit' className='btn btn-primary' style={{width: '100px'}}>Log in</button>
                </div>

            </form>
    )
}