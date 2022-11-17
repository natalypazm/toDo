import React from 'react';

import './App.css';
import { TodoButton } from './TodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import {TodoSearch} from './TodoSearch';

const toDos = [
  {text:'Learn every day', completed: true},
  {text:'Read for 30 minutes twice a day', completed: true},
  {text:'Practice english', completed: false}
]

function App() {
  let searchTodos = [];
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(toDos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  let totalTodos = todos.length;
  
  if(searchValue.length < 1 ){
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  
  return (
    <React.Fragment>
      <TodoCounter
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
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
      <TodoButton/>
    </React.Fragment>
  );
}

export default App;
