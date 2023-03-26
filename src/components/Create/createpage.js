import React from "react";
import CreateForm from "./createform";
import './create.css'

export default function CreatePage(){
    return(
        <div id='create-page'>
            <h1 className="text-primary">Create a Todo</h1>
            <CreateForm/>
        </div>
    )
}