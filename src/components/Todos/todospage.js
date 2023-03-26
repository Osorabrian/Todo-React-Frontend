import React from "react";
import TodosTable from "./todostable";
import './todos.css'

export default function Todos(){
    return(
        <div id='todos-page'>
            <h1 className="mb-3 text-primary">My Todos</h1>
            <TodosTable/>
        </div>
    )
}