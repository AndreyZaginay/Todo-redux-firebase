import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';
import { fetchTodos } from '../store/actions/todosActions';

export const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [])
    
  return (
    <div className='App'>
      <h1 style={{textAlign: 'center'}}>TodoList</h1>
      <TodoForm/>
      <TodoList todos={todos}/>
    </div>
  )
}