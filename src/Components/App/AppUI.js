import React from "react";

import { TodoContext } from "../Context";
import { TodoButton } from '../TodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import { MyModal } from "../Modal";
import { MyLoader } from "../Loader";

function AppUI(){
    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>    
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <MyLoader/>}
                {(!loading && !searchTodos.length) && <p>Crea un nuevo todo</p>}
                {searchTodos.map (todo => (
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <MyModal />
            )}
            <TodoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    )
}

export {AppUI};