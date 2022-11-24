import React from "react";
import './ToDoList.css'

function TodoList (props){
    return (
        <ul className="toDoList">
            {props.children}
        </ul>
    )
}

export {TodoList};