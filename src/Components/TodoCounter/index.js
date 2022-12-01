import React from "react";
import { TodoContext } from "../Context";

function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    
    return (
        <h3>You completed {completedTodos} task out of {totalTodos}</h3>
    )
}

export {TodoCounter};