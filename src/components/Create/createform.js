import React, {useState} from "react";
import './create.css'
import { useNavigate } from "react-router-dom";

export default function CreateForm(){

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[status, setStatus] = useState('')
    const[priority, setPriority] = useState('')

    const navigate = useNavigate()

    const formData = {title, description, status: parseInt(status), priority: parseInt(priority)}

    function handleCreate(e){
        e.preventDefault()
        console.log(formData)
        navigate('/todos')
    }

    return(
        <form id='create-form' onSubmit={handleCreate}>
            <div className="row mb-2">
                <label className="form-label">Title:</label>
                <input className="form-control" placeholder='Enter Title' type={'text'} required onChange={(e) => setTitle(e.target.value)}/>
                <p className="form-text">Title must be between 5 and 20 characters</p>
            </div>

            <div className="row mb-2">
                <label className="form-label">Description:</label>
                <textarea className="form-control" rows='3' placeholder="Enter Description" required onChange={(e) => setDescription(e.target.value)}/>
                <p className="form-text">Description should not have less than 20 characters</p>
            </div>

            <div className="row mb-4">

                <div className="col-6" >
                     <label>Status:</label>
                     <select className="form-select" onChange={(e) => {setStatus(e.target.value)}}>
                        <option >Choose...</option>
                        <option value={0}>CREATED</option>
                        <option value={1}>STARTED</option>
                        <option value={2}>COMPLETED</option>
                        <option value={3}>CANCELLED</option>
                     </select>
                </div>

                <div className="col-6">
                    <label>Priority:</label>
                    <select className="form-select"  onChange={(e) => {setPriority(e.target.value)}}>
                        <option>Choose...</option>
                        <option value={0}>LOW</option>
                        <option value={1}>MEDIUM</option>
                        <option value={2}>HIGH</option>
                    </select>
                </div>

            </div>

            <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary" style={{width: '200px'}}>Create Todo</button>
            </div>

        </form>
    )
}