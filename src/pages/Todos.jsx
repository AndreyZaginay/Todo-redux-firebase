import React, { useEffect, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { getTodos, addTodo, removeTodo } from '../API/todo.firebase';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(todos => setTodos(todos));  
  }, [])
    
  return (
    <>
    <TodoList todos={todos}/>
    </>
  )
}