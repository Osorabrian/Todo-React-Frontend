import React from 'react'

export default function Login(){
    return(
        <>
            <form>
                <div className='row mb-3'>
                    <label className='form-label'>User name:</label>
                    <input placeholder='Enter User name'className='form-control' type='text' />
                </div>
                
                <div className='row mb-3'>
                    <label className='form-label'>Password</label>
                    <input placeholder='password' className='form-control' type = 'password'/>
                </div>
                
            </form>
        </>
    )
}