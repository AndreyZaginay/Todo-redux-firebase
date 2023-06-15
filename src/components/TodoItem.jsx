import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../assets/css/todoItem';
import { removeTodo } from '../store/actions/todosActions';

export const TodoItem = ({ todo }) => {
  const router = useNavigate();
  const { name, id } = todo;
  const dispatch = useDispatch();

  const openTodoPage = (id) => {
    router(`todo/${id}`);
  }
    
  return (
    <div className='todoItem'>
      <span>{ name }</span>
      <div className='btns-container'>
        <Button variant="contained" onClick={() => openTodoPage(id)}>Todo page</Button>
        <Button variant="contained" onClick={() => dispatch(removeTodo(id))}>Remove</Button>
      </div>
    </div>
  )
}
