import React from "react"

export default function TodosTable(){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>Morning Standup</td>
                    <td>Attend morning standup</td>
                    <td>STARTED</td>
                    <td>HIGH</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Feedback Session</td>
                    <td>Attend friday feedback session</td>
                    <td>CREATED</td>
                    <td>MEDIUM</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Shopping</td>
                    <td>Go for shopping</td>
                    <td>COMPLETED</td>
                    <td>MEDIUM</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Wash clothes</td>
                    <td>WAsh my clothes</td>
                    <td>COMPLETED</td>
                    <td>LOW</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Watch Movie</td>
                    <td>Watch breaking bad season 2</td>
                    <td>CANCELLED</td>
                    <td>LOW</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Code Challenge</td>
                    <td>Do my weekly code challenge</td>
                    <td>STARTED</td>
                    <td>HIGH</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}