import React from "react";
import './update.css'

export default function UpdateForm(){
    return(
        <form id='update-form'>

            <div className="row mb-3">
                <label className="form-label">Title:</label>
                <input className="form-control" type={'text'} placeholder='Enter Title' required/>
                <p className="form-text">Title must be between 8 and 20 characters</p>
            </div>

            <div className="row mb-3">
                <label className="form-label">Description:</label>
                <textarea className="form-control" row='3' placeholder='Enter Description' required/>
                <p className="form-text">Description should not have less than 20 characters</p>
            </div>

            <div className="row mb-3">

                <div className="col-6">
                    <label>Status:</label>
                    <select className="form-select">
                        <option selected value={0}>CREATED</option>
                        <option value={1}>STARTED</option>
                        <option vlaue={2}>COMPLETED</option>
                        <option value={3}>CANCELLED</option>
                    </select>
                </div>

                <div className="col-6">
                    <label>Priority:</label>
                    <select className="form-select">
                        <option selected value={0}>LOW</option>
                        <option value={1}>MEDIUM</option>
                        <option value={2}>HIGH</option>
                    </select>
                </div>

            </div>

            <div style={{textAlign: 'center'}}>
                <button  className='btn btn-primary' type="submit">Update Todo</button>
            </div>

        </form>
    )
}