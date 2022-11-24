import React from "react";

function TodoCounter({completedTodos, totalTodos}){
    return (
        <h3>You completed {completedTodos} task out of {totalTodos}</h3>
    )
}

export {TodoCounter};