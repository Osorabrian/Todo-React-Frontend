import React from "react";
import './create.css'

export default function CreateForm(){
    return(
        <form id='create-form'>
            <div className="row mb-2">
                <label className="form-label">Title:</label>
                <input className="form-control" placeholder='Enter Title' type={'text'} required/>
                <p className="form-text">Title must be between 5 and 20 characters</p>
            </div>

            <div className="row mb-2">
                <label className="form-label">Description:</label>
                <textarea className="form-control" rows='3' placeholder="Enter Description" required/>
                <p className="form-text">Description must be between not less than 20 characters</p>
            </div>

            <div className="row mb-4">

                <div className="col-6">
                     <label>Status:</label>
                     <select className="form-select">
                        <option selected value={0}>CREATED</option>
                        <option value={1}>STARTED</option>
                        <option value={2}>COMPLETED</option>
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
                <button className="btn btn-primary" style={{width: '300px'}}>Create Todo</button>
            </div>

        </form>
    )
}