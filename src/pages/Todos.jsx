import React, { useEffect, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { getTodos } from '../API/todo.firebase';
import { TodoForm } from '../components/TodoForm';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(todos => setTodos(todos));  
  }, [])
    
  return (
    <>
      <TodoForm/>
      <TodoList todos={todos}/>
    </>
  )
}