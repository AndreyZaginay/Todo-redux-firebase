import React, { useEffect, useContext, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { getTodos, addTodo, removeTodo } from '../API/firebase.servise';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(r => setTodos(r));  
  }, [])
    
  return (
    <>
    <button onClick={() => remove()}>asd</button>
    <TodoList todos={todos}/>
    </>
  )
}