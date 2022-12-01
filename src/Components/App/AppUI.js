import React from "react";

import { TodoContext } from "../Context";
import { TodoButton } from '../TodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import {TodoSearch} from '../TodoSearch';

function AppUI(){
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>
                    {error && <p>Hubo un error</p>}
                    {loading && <p>Está cargando</p>}
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
                )}
            </TodoContext.Consumer>
            <TodoButton/>
        </React.Fragment>
    )
}

export {AppUI};