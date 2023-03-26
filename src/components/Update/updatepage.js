import React from "react";
import './update.css'
import UpdateForm from "./updateform";

export default function UpdatePage(){
    return(
        <div id='update-page'>
            <h1 className="text-primary">Update Todo</h1>
            <UpdateForm/>
        </div>
    )
}